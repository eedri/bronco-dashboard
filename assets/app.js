/* ============================================================
   BroncoDeals — app logic
   Vanilla JS. Reads window.BRONCO_DEALS (assets/data.js).
   ============================================================ */

(function () {
  "use strict";

  const DEALS = (window.BRONCO_DEALS || []).slice();

  /* ---- Presentation maps ---- */
  const SOURCE_COLORS = {
    Amazon: "#ff9900",
    AliExpress: "#e62e04",
    Temu: "#fb7701",
    Direct: "#2f6fed",
    Social: "#8b5cf6",
  };

  const CATEGORY_ICONS = {
    "Roof Racks": "🏗️",
    "Rooftop Tents": "⛺",
    "Awnings": "⛱️",
    "MOLLE & Storage": "🎒",
    "Lighting": "💡",
    "Recovery Gear": "🪢",
    "Fridges & Power": "🧊",
    "Air Compressors": "💨",
    "Armor & Protection": "🛡️",
    "Interior & Trim": "🪑",
    "Cargo & Tire": "🛞",
    "Fuel & Water": "⛽",
    "Steps & Ladders": "🪜",
    "Social Deals": "📣",
  };

  const CATEGORY_GRADIENTS = {
    "Roof Racks": ["#3a3226", "#5a4a30"],
    "Rooftop Tents": ["#2d3a2f", "#3f5a45"],
    "Awnings": ["#3a3524", "#5c5230"],
    "MOLLE & Storage": ["#332a22", "#54432f"],
    "Lighting": ["#3a3418", "#6b5c1e"],
    "Recovery Gear": ["#332622", "#5a3a30"],
    "Fridges & Power": ["#222f3a", "#30495a"],
    "Air Compressors": ["#26313a", "#30505a"],
    "Armor & Protection": ["#2c2c30", "#484850"],
    "Interior & Trim": ["#31292f", "#4f3f4a"],
    "Cargo & Tire": ["#2a2a2a", "#454545"],
    "Fuel & Water": ["#22323a", "#305058"],
    "Steps & Ladders": ["#332e22", "#544a30"],
    "Social Deals": ["#2e2640", "#463a68"],
  };

  /* ---- Derived option lists ---- */
  const CATEGORIES = [...new Set(DEALS.map((d) => d.category))].sort();
  const SOURCES = ["Amazon", "AliExpress", "Temu", "Direct", "Social"].filter((s) =>
    DEALS.some((d) => d.source === s)
  );
  const PRICE_MAX = Math.ceil(Math.max(...DEALS.map((d) => d.price)) / 50) * 50;

  /* ---- Language ---- */
  let LANG = localStorage.getItem("bronco-lang") || "en";
  const t = (key) =>
    (window.I18N[LANG] && window.I18N[LANG][key]) || window.I18N.en[key] || key;
  const catLabel = (c) => (LANG === "he" && window.CATEGORY_I18N.he[c]) || c;
  const srcLabel = (s) => (LANG === "he" && window.SOURCE_I18N.he[s]) || s;
  const doorsLabel = (d) => (LANG === "he" && window.DOORS_I18N.he[d]) || d;
  const descText = (deal) => (LANG === "he" && window.DEAL_DESC_HE[deal.id]) || deal.description;
  const catChipLabel = (v) => (CATEGORY_ICONS[v] ? CATEGORY_ICONS[v] + " " : "") + catLabel(v);
  const srcChipLabel = (v) => srcLabel(v);

  /* ---- State ---- */
  const state = {
    search: "",
    year: "",
    categories: new Set(),
    sources: new Set(),
    maxPrice: PRICE_MAX,
    israelOnly: false,
    dealsOnly: false,
    sort: "discount",
  };

  /* ---- Elements ---- */
  const el = {
    grid: document.getElementById("dealGrid"),
    empty: document.getElementById("emptyState"),
    count: document.getElementById("resultsCount"),
    activeFilters: document.getElementById("activeFilters"),
    search: document.getElementById("searchInput"),
    year: document.getElementById("yearSelect"),
    categoryChips: document.getElementById("categoryChips"),
    sourceChips: document.getElementById("sourceChips"),
    priceRange: document.getElementById("priceRange"),
    priceValue: document.getElementById("priceValue"),
    priceMaxLabel: document.getElementById("priceMaxLabel"),
    israel: document.getElementById("israelToggle"),
    deal: document.getElementById("dealToggle"),
    sort: document.getElementById("sortSelect"),
    reset: document.getElementById("resetFilters"),
    themeToggle: document.getElementById("themeToggle"),
  };

  /* ---- Helpers ---- */
  const money = (n) => "$" + n.toLocaleString("en-US");
  const discountPct = (d) =>
    d.originalPrice && d.originalPrice > d.price
      ? Math.round((1 - d.price / d.originalPrice) * 100)
      : 0;

  function stars(rating) {
    const full = Math.round(rating);
    return "★".repeat(full) + "☆".repeat(5 - full);
  }

  /* ============================ Filtering ============================ */
  function applyFilters() {
    let list = DEALS.filter((d) => {
      if (state.year && !d.years.includes(Number(state.year))) return false;
      if (state.categories.size && !state.categories.has(d.category)) return false;
      if (state.sources.size && !state.sources.has(d.source)) return false;
      if (d.price > state.maxPrice) return false;
      if (state.israelOnly && !d.shipsToIsrael) return false;
      if (state.dealsOnly && discountPct(d) === 0) return false;
      if (state.search) {
        const q = state.search.toLowerCase();
        const hay = [d.title, d.brand, d.category, d.retailer, d.description, (d.tags || []).join(" ")]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    list.sort((a, b) => {
      switch (state.sort) {
        case "price-asc": return a.price - b.price;
        case "price-desc": return b.price - a.price;
        case "rating": return (b.rating || 0) - (a.rating || 0);
        case "name": return a.title.localeCompare(b.title);
        case "discount":
        default: return discountPct(b) - discountPct(a) || a.price - b.price;
      }
    });

    return list;
  }

  /* ============================ Rendering ============================ */
  function cardHTML(d) {
    const pct = discountPct(d);
    const grad = CATEGORY_GRADIENTS[d.category] || ["#333", "#555"];
    const icon = CATEGORY_ICONS[d.category] || "🛻";
    const srcColor = SOURCE_COLORS[d.source] || "#666";
    const ship = d.shipsToIsrael
      ? `<span class="meta-tag ship-yes">🇮🇱 ${t("shipsYes")}</span>`
      : `<span class="meta-tag ship-no">🚫 ${t("shipsNo")}</span>`;
    const doors = d.doors && d.doors !== "Both" ? `<span class="meta-tag">${doorsLabel(d.doors)}</span>` : "";
    const yearsLabel = summarizeYears(d.years);

    return `
      <article class="card">
        <div class="card-media" style="background:linear-gradient(150deg, ${grad[0]}, ${grad[1]});">
          <div class="badge-row">
            <span class="source-badge" style="background:${srcColor};">${srcLabel(d.source)}</span>
            ${pct > 0 ? `<span class="discount-badge">-${pct}%</span>` : ""}
          </div>
          <span aria-hidden="true">${icon}</span>
        </div>
        <div class="card-body">
          <div class="card-cat">${catLabel(d.category)}</div>
          <h3 class="card-title">${escapeHTML(d.title)}</h3>
          <div class="card-brand">${escapeHTML(d.brand)} · ${escapeHTML(d.retailer)}</div>
          <p class="card-desc">${escapeHTML(descText(d))}</p>
          <div class="card-meta">
            <span class="meta-tag">${yearsLabel}</span>
            ${doors}
            <span class="meta-tag"><span class="star">★</span> ${d.rating.toFixed(1)}</span>
            ${ship}
          </div>
          <div class="card-foot">
            <div class="price-wrap">
              <span class="price-now">${money(d.price)}</span>
              ${d.originalPrice && d.originalPrice > d.price ? `<span class="price-was">${money(d.originalPrice)}</span>` : ""}
            </div>
            <a class="buy-btn" href="${d.url}" target="_blank" rel="noopener noreferrer">${t("viewDeal")} ↗</a>
          </div>
        </div>
      </article>`;
  }

  function summarizeYears(years) {
    if (!years || !years.length) return "—";
    const sorted = [...years].sort((a, b) => a - b);
    const contiguous = sorted[sorted.length - 1] - sorted[0] === sorted.length - 1;
    if (sorted.length >= 6) return "2021–2026";
    return contiguous ? `${sorted[0]}–${sorted[sorted.length - 1]}` : sorted.join(", ");
  }

  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }

  function render() {
    const list = applyFilters();

    el.grid.innerHTML = list.map(cardHTML).join("");
    el.empty.hidden = list.length !== 0;

    el.count.innerHTML = `${t("showingPre")} <strong>${list.length}</strong> ${t("showingMid")} ${DEALS.length} ${t("showingPost")}`;

    renderActiveFilters();
  }

  function renderActiveFilters() {
    const pills = [];
    if (state.year) pills.push(pill(`${t("year")}: ${state.year}`, () => { state.year = ""; el.year.value = ""; render(); }));
    state.categories.forEach((c) =>
      pills.push(pill(catLabel(c), () => { state.categories.delete(c); syncChips(); render(); }))
    );
    state.sources.forEach((s) =>
      pills.push(pill(srcLabel(s), () => { state.sources.delete(s); syncChips(); render(); }))
    );
    if (state.israelOnly) pills.push(pill(t("shipsYes"), () => { state.israelOnly = false; el.israel.checked = false; render(); }));
    if (state.dealsOnly) pills.push(pill(t("onSale"), () => { state.dealsOnly = false; el.deal.checked = false; render(); }));
    if (state.maxPrice < PRICE_MAX) pills.push(pill(`≤ ${money(state.maxPrice)}`, () => { state.maxPrice = PRICE_MAX; el.priceRange.value = PRICE_MAX; updatePriceLabel(); render(); }));
    if (state.search) pills.push(pill(`"${state.search}"`, () => { state.search = ""; el.search.value = ""; render(); }));

    el.activeFilters.innerHTML = "";
    pills.forEach((p) => el.activeFilters.appendChild(p));
  }

  function pill(label, onRemove) {
    const span = document.createElement("span");
    span.className = "active-pill";
    span.appendChild(document.createTextNode(label));
    const btn = document.createElement("button");
    btn.setAttribute("aria-label", "Remove filter " + label);
    btn.textContent = "×";
    btn.addEventListener("click", onRemove);
    span.appendChild(btn);
    return span;
  }

  /* ============================ Stats ============================ */
  function renderStats() {
    document.getElementById("statTotal").textContent = DEALS.length;
    const discounts = DEALS.map(discountPct).filter((p) => p > 0);
    const avg = discounts.length ? Math.round(discounts.reduce((a, b) => a + b, 0) / discounts.length) : 0;
    document.getElementById("statAvgDiscount").textContent = avg + "%";
    document.getElementById("statSources").textContent = SOURCES.length;
    const israel = DEALS.filter((d) => d.shipsToIsrael).length;
    document.getElementById("statIsrael").textContent = israel;
    const lu = document.getElementById("lastUpdated");
    if (lu) lu.textContent = window.BRONCO_DEALS_UPDATED || "—";
  }

  /* ============================ Chips ============================ */
  function buildChips(container, values, stateSet, labelFn) {
    container.innerHTML = "";
    values.forEach((val) => {
      const chip = document.createElement("button");
      chip.className = "chip";
      chip.type = "button";
      chip.dataset.value = val;
      chip.textContent = labelFn(val);
      if (stateSet.has(val)) chip.classList.add("active");
      chip.addEventListener("click", () => {
        if (stateSet.has(val)) stateSet.delete(val);
        else stateSet.add(val);
        chip.classList.toggle("active");
        render();
      });
      container.appendChild(chip);
    });
  }

  /* ============================ Language ============================ */
  function applyLanguage(lang) {
    LANG = lang;
    localStorage.setItem("bronco-lang", lang);
    const dict = window.I18N[lang] || window.I18N.en;

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dict.dir || "ltr");

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (dict[key] != null) node.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((node) => {
      const key = node.dataset.i18nPh;
      if (dict[key] != null) node.placeholder = dict[key];
    });

    // Rebuild chips with translated labels (selection is preserved via stateSet)
    buildChips(el.categoryChips, CATEGORIES, state.categories, catChipLabel);
    buildChips(el.sourceChips, SOURCES, state.sources, srcChipLabel);

    render();
  }

  function syncChips() {
    el.categoryChips.querySelectorAll(".chip").forEach((c) =>
      c.classList.toggle("active", state.categories.has(c.dataset.value))
    );
    el.sourceChips.querySelectorAll(".chip").forEach((c) =>
      c.classList.toggle("active", state.sources.has(c.dataset.value))
    );
  }

  /* ============================ Price ============================ */
  function updatePriceLabel() {
    const isMax = Number(el.priceRange.value) >= PRICE_MAX;
    el.priceValue.textContent = isMax ? money(PRICE_MAX) + "+" : money(Number(el.priceRange.value));
  }

  /* ============================ Theme ============================ */
  function initTheme() {
    const saved = localStorage.getItem("bronco-theme");
    const theme = saved || "dark";
    document.documentElement.setAttribute("data-theme", theme);
    updateThemeIcon(theme);
    el.themeToggle.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("bronco-theme", next);
      updateThemeIcon(next);
    });
  }
  function updateThemeIcon(theme) {
    el.themeToggle.querySelector(".theme-icon").textContent = theme === "dark" ? "🌙" : "☀️";
  }

  /* ============================ Wire up ============================ */
  function init() {
    // Price range
    el.priceRange.max = PRICE_MAX;
    el.priceRange.value = PRICE_MAX;
    el.priceMaxLabel.textContent = money(PRICE_MAX) + "+";
    updatePriceLabel();

    // Events
    el.search.addEventListener("input", (e) => { state.search = e.target.value.trim(); render(); });
    el.year.addEventListener("change", (e) => { state.year = e.target.value; render(); });
    el.priceRange.addEventListener("input", () => { state.maxPrice = Number(el.priceRange.value); updatePriceLabel(); render(); });
    el.israel.addEventListener("change", (e) => { state.israelOnly = e.target.checked; render(); });
    el.deal.addEventListener("change", (e) => { state.dealsOnly = e.target.checked; render(); });
    el.sort.addEventListener("change", (e) => { state.sort = e.target.value; render(); });
    el.reset.addEventListener("click", resetFilters);

    document.getElementById("scrollFilters").addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("filters").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    document.getElementById("langToggle").addEventListener("click", () => {
      applyLanguage(LANG === "en" ? "he" : "en");
    });

    initTheme();
    renderStats();
    applyLanguage(LANG); // builds chips (translated), applies strings, and renders
  }

  function resetFilters() {
    state.search = "";
    state.year = "";
    state.categories.clear();
    state.sources.clear();
    state.maxPrice = PRICE_MAX;
    state.israelOnly = false;
    state.dealsOnly = false;
    state.sort = "discount";

    el.search.value = "";
    el.year.value = "";
    el.priceRange.value = PRICE_MAX;
    el.israel.checked = false;
    el.deal.checked = false;
    el.sort.value = "discount";
    updatePriceLabel();
    syncChips();
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
