/*
 * Bronco Deals — dataset
 * ----------------------------------------------------------------------------
 * A curated set of overlanding & accessory deals for the 6th-gen Ford Bronco
 * (2021–2026). Data is grounded in real products/brands that exist in the
 * Bronco aftermarket. Marketplace links (Amazon / AliExpress / Temu) point to
 * live search results so they always surface current listings and prices;
 * direct-brand links point to the specific product page where known.
 *
 * Schema per deal:
 *   id            string   unique id
 *   title         string   product name
 *   brand         string   manufacturer / seller
 *   category      string   one of CATEGORIES (see app.js)
 *   price         number   current price (USD)
 *   originalPrice number   list price (USD) — omit/equal to price if no deal
 *   years         number[] compatible model years (2021–2026)
 *   doors         string   "2-Door" | "4-Door" | "Both"
 *   source        string   "Amazon" | "AliExpress" | "Temu" | "Direct" | "Social"
 *   retailer      string   where you buy it
 *   url           string   outbound link
 *   shipsToIsrael boolean  ships / delivers to Israel
 *   rating        number   0–5
 *   tags          string[] free-form keywords for search
 *   description   string   short blurb
 *
 * To add deals: append objects to BRONCO_DEALS below. The UI derives all
 * filters (years, categories, sources, price range) automatically.
 */

const ALL_YEARS = [2021, 2022, 2023, 2024, 2025, 2026];
const NEW_YEARS = [2024, 2025, 2026];

window.BRONCO_DEALS_UPDATED = "2026-07-11";

window.BRONCO_DEALS = [
  /* ------------------------------- Roof Racks ------------------------------ */
  {
    id: "rack-trailrax", title: "TrailRax Modular Roof Rack (4-Door)", brand: "TrailRax",
    category: "Roof Racks", price: 899, originalPrice: 999, years: ALL_YEARS, doors: "4-Door",
    source: "Direct", retailer: "TrailRax",
    url: "https://trailrax.com/products/trailrax-modular-roof-rack-for-the-ford-bronco-4-door",
    shipsToIsrael: false, rating: 4.8, tags: ["roof", "rack", "hardtop", "overland", "aluminum"],
    description: "Modular hardtop roof rack, 850 lb static load, integrated wind deflector."
  },
  {
    id: "rack-frontrunner", title: "Front Runner Slimline II Roof Rack Kit", brand: "Front Runner",
    category: "Roof Racks", price: 1299, originalPrice: 1450, years: ALL_YEARS, doors: "4-Door",
    source: "Direct", retailer: "Front Runner Outfitters",
    url: "https://www.frontrunneroutfitters.com/en/us/shop/vehicle/ford/bronco",
    shipsToIsrael: true, rating: 4.9, tags: ["roof", "rack", "slimline", "modular", "premium"],
    description: "Aircraft-grade aluminum slat platform, huge accessory ecosystem, ships worldwide."
  },
  {
    id: "rack-hooke", title: "Hooke Road Roof Rack Cargo Basket", brand: "Hooke Road",
    category: "Roof Racks", price: 459, originalPrice: 529, years: ALL_YEARS, doors: "4-Door",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=hooke+road+bronco+roof+rack",
    shipsToIsrael: true, rating: 4.5, tags: ["roof", "rack", "basket", "steel", "budget"],
    description: "Bolt-on steel roof basket with plenty of room for road-trip and trail gear."
  },
  {
    id: "rack-ford-oe", title: "Ford OE Roof Rack (4-Door)", brand: "Ford",
    category: "Roof Racks", price: 545, years: ALL_YEARS, doors: "4-Door",
    source: "Direct", retailer: "Ford.com",
    url: "https://www.ford.com/product/bronco-oe-roof-rack-4door-p2883420646",
    shipsToIsrael: false, rating: 4.3, tags: ["roof", "rack", "oem", "factory", "crossbars"],
    description: "Factory side rails + crossbars kit with all mounting hardware and tools."
  },
  {
    id: "rack-ali-basket", title: "Aluminum Roof Cargo Basket (Universal)", brand: "OEMANDOverland",
    category: "Roof Racks", price: 189, originalPrice: 310, years: ALL_YEARS, doors: "Both",
    source: "AliExpress", retailer: "AliExpress",
    url: "https://www.aliexpress.com/w/wholesale-bronco-roof-rack-basket.html",
    shipsToIsrael: true, rating: 4.1, tags: ["roof", "rack", "basket", "aluminum", "cheap"],
    description: "Lightweight aluminum basket, direct from factory pricing, ships to Israel."
  },
  {
    id: "rack-temu-basket", title: "Steel Roof Cargo Basket", brand: "Generic",
    category: "Roof Racks", price: 129, originalPrice: 220, years: ALL_YEARS, doors: "Both",
    source: "Temu", retailer: "Temu",
    url: "https://www.temu.com/search_result.html?search_key=roof%20cargo%20basket",
    shipsToIsrael: true, rating: 3.9, tags: ["roof", "rack", "basket", "steel", "budget"],
    description: "Budget universal steel basket for light cargo hauling."
  },

  /* ------------------------------ Rooftop Tents ---------------------------- */
  {
    id: "rtt-smittybilt", title: "Smittybilt Overlander Rooftop Tent", brand: "Smittybilt",
    category: "Rooftop Tents", price: 1099, originalPrice: 1399, years: ALL_YEARS, doors: "Both",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=smittybilt+overlander+rooftop+tent",
    shipsToIsrael: false, rating: 4.6, tags: ["tent", "rtt", "camping", "sleep", "softshell"],
    description: "Classic soft-shell RTT, sleeps 2–3, includes ladder and rainfly."
  },
  {
    id: "rtt-ikamper", title: "iKamper Skycamp 3.0 Hard-Shell RTT", brand: "iKamper",
    category: "Rooftop Tents", price: 3999, years: NEW_YEARS, doors: "4-Door",
    source: "Direct", retailer: "iKamper",
    url: "https://ikamper.com/collections/roof-top-tents",
    shipsToIsrael: false, rating: 4.9, tags: ["tent", "rtt", "hardshell", "premium", "4-season"],
    description: "Premium hard-shell tent, fast setup, sleeps 4, all-season insulation."
  },
  {
    id: "rtt-intrepid", title: "Intrepid Geo 2.0 Rooftop Tent", brand: "Intrepid Camp Gear",
    category: "Rooftop Tents", price: 1295, originalPrice: 1495, years: ALL_YEARS, doors: "Both",
    source: "Direct", retailer: "Intrepid Camp Gear",
    url: "https://intrepidcampgear.com/collections/ford-bronco-rooftop-tents",
    shipsToIsrael: false, rating: 4.5, tags: ["tent", "rtt", "camping", "softshell"],
    description: "Aluminum-base soft-shell RTT sized for the Bronco's factory or aftermarket rack."
  },
  {
    id: "rtt-ali", title: "Soft-Shell Rooftop Tent (2-Person)", brand: "Generic",
    category: "Rooftop Tents", price: 549, originalPrice: 899, years: ALL_YEARS, doors: "Both",
    source: "AliExpress", retailer: "AliExpress",
    url: "https://www.aliexpress.com/w/wholesale-rooftop-tent-car.html",
    shipsToIsrael: true, rating: 4.0, tags: ["tent", "rtt", "budget", "camping"],
    description: "Entry-level soft-shell RTT with ladder; ships internationally to Israel."
  },

  /* -------------------------------- Awnings -------------------------------- */
  {
    id: "awn-arb", title: "ARB 2000 Awning (2m)", brand: "ARB",
    category: "Awnings", price: 199, originalPrice: 249, years: ALL_YEARS, doors: "Both",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=arb+2000+awning",
    shipsToIsrael: true, rating: 4.7, tags: ["awning", "shade", "camping", "arb"],
    description: "Rugged 2m pull-out awning with waterproof poly-cotton canopy."
  },
  {
    id: "awn-ovs270", title: "OVS Nomadic 270 LTE Awning", brand: "Overland Vehicle Systems",
    category: "Awnings", price: 549, originalPrice: 699, years: ALL_YEARS, doors: "4-Door",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=overland+vehicle+systems+nomadic+270+awning",
    shipsToIsrael: false, rating: 4.6, tags: ["awning", "270", "shade", "wraparound"],
    description: "270° wraparound awning covering the side and rear for full-camp shade."
  },
  {
    id: "awn-fr", title: "Front Runner Easy-Out Awning (2m)", brand: "Front Runner",
    category: "Awnings", price: 249, years: ALL_YEARS, doors: "Both",
    source: "Direct", retailer: "Front Runner Outfitters",
    url: "https://www.frontrunneroutfitters.com/en/us/shop/vehicle/ford/bronco",
    shipsToIsrael: true, rating: 4.7, tags: ["awning", "shade", "quick", "camping"],
    description: "Quick-deploy side awning, integrates with Slimline II rack, ships worldwide."
  },
  {
    id: "awn-ali270", title: "270° Wraparound Awning (Universal)", brand: "Generic",
    category: "Awnings", price: 329, originalPrice: 520, years: ALL_YEARS, doors: "Both",
    source: "AliExpress", retailer: "AliExpress",
    url: "https://www.aliexpress.com/w/wholesale-270-degree-car-awning.html",
    shipsToIsrael: true, rating: 3.8, tags: ["awning", "270", "budget", "shade"],
    description: "Budget 270° awning; heavy but great value for a full-coverage shade."
  },

  /* --------------------------- MOLLE & Storage ----------------------------- */
  {
    id: "molle-hooke", title: "Hooke Road Overhead MOLLE Panel Kit (4-Door)", brand: "Hooke Road",
    category: "MOLLE & Storage", price: 189, originalPrice: 219, years: ALL_YEARS, doors: "4-Door",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/Hooke-Road-Overhead-Management-Accessories/dp/B0BXL2ZH4K",
    shipsToIsrael: true, rating: 4.4, tags: ["molle", "storage", "overhead", "cargo", "roll bar"],
    description: "Overhead cargo MOLLE panel, bolts to factory roll-bar mounts, no drilling."
  },
  {
    id: "molle-rtr", title: "RTR Roof Rack MOLLE Accessory Panel", brand: "RTR Vehicles",
    category: "MOLLE & Storage", price: 99, years: ALL_YEARS, doors: "Both",
    source: "Direct", retailer: "RTR Vehicles",
    url: "https://www.rtrvehicles.com/products/roof-rack-molle-accessory-panel",
    shipsToIsrael: false, rating: 4.5, tags: ["molle", "storage", "roof", "panel"],
    description: "Roof-rack-mounted MOLLE panel for organizing tools, straps and pouches."
  },
  {
    id: "molle-iag", title: "IAG Off-Road MOLLE Grab Handle Panels", brand: "IAG Performance",
    category: "MOLLE & Storage", price: 129, years: ALL_YEARS, doors: "Both",
    source: "Direct", retailer: "IAG Performance",
    url: "https://www.iagperformance.com/ford-bronco/",
    shipsToIsrael: false, rating: 4.6, tags: ["molle", "grab handle", "interior", "storage"],
    description: "Dash-side MOLLE grab-handle panels for passenger storage within reach."
  },
  {
    id: "molle-ali", title: "Tailgate MOLLE Storage Panel", brand: "Generic",
    category: "MOLLE & Storage", price: 45, originalPrice: 79, years: ALL_YEARS, doors: "Both",
    source: "AliExpress", retailer: "AliExpress",
    url: "https://www.aliexpress.com/w/wholesale-bronco-molle-panel.html",
    shipsToIsrael: true, rating: 4.2, tags: ["molle", "tailgate", "storage", "budget"],
    description: "Rear tailgate/trunk MOLLE panel with straps for gear organization."
  },
  {
    id: "molle-temu", title: "Roll Bar Storage Bag Set (3pc)", brand: "Generic",
    category: "MOLLE & Storage", price: 28, originalPrice: 55, years: ALL_YEARS, doors: "Both",
    source: "Temu", retailer: "Temu",
    url: "https://www.temu.com/search_result.html?search_key=roll%20bar%20storage%20bag",
    shipsToIsrael: true, rating: 3.9, tags: ["storage", "roll bar", "bag", "budget"],
    description: "Set of roll-bar mounted storage pouches for small gear and tools."
  },

  /* -------------------------------- Lighting ------------------------------- */
  {
    id: "light-baja", title: "Baja Designs Squadron Ditch Light Kit", brand: "Baja Designs",
    category: "Lighting", price: 360, years: ALL_YEARS, doors: "Both",
    source: "Direct", retailer: "Baja Designs",
    url: "https://www.bajadesigns.com/vehicle-hub-lp/ford-bronco-21-lighting-kits/",
    shipsToIsrael: false, rating: 4.9, tags: ["lighting", "ditch", "led", "premium"],
    description: "Plug-and-play A-pillar ditch light kit with vehicle-specific brackets."
  },
  {
    id: "light-blackoak", title: "Black Oak 30\" Double-Row LED Light Bar", brand: "Black Oak LED",
    category: "Lighting", price: 329, originalPrice: 399, years: ALL_YEARS, doors: "Both",
    source: "Direct", retailer: "Black Oak LED",
    url: "https://www.blackoakled.com/collections/ford-bronco-light-bar-packages",
    shipsToIsrael: false, rating: 4.7, tags: ["lighting", "light bar", "led", "double row"],
    description: "High-output 30-inch double-row bar with premium OSRAM LEDs."
  },
  {
    id: "light-nilight", title: "Nilight 22\" LED Light Bar", brand: "Nilight",
    category: "Lighting", price: 49, originalPrice: 79, years: ALL_YEARS, doors: "Both",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=nilight+22+inch+led+light+bar",
    shipsToIsrael: true, rating: 4.3, tags: ["lighting", "light bar", "led", "budget"],
    description: "Popular budget 22\" combo-beam bar with wiring harness included."
  },
  {
    id: "light-ali-pods", title: "A-Pillar Ditch Light Pods (Pair)", brand: "Generic",
    category: "Lighting", price: 39, originalPrice: 69, years: ALL_YEARS, doors: "Both",
    source: "AliExpress", retailer: "AliExpress",
    url: "https://www.aliexpress.com/w/wholesale-bronco-ditch-lights.html",
    shipsToIsrael: true, rating: 4.0, tags: ["lighting", "ditch", "pods", "budget"],
    description: "Pair of LED pod lights with brackets; big savings vs. name brands."
  },
  {
    id: "light-temu-amber", title: "Amber LED Pod Lights (4pc)", brand: "Generic",
    category: "Lighting", price: 22, originalPrice: 45, years: ALL_YEARS, doors: "Both",
    source: "Temu", retailer: "Temu",
    url: "https://www.temu.com/search_result.html?search_key=amber%20led%20pod%20lights",
    shipsToIsrael: true, rating: 3.8, tags: ["lighting", "amber", "pods", "budget"],
    description: "Four amber pods for fog/rock lights on a shoestring budget."
  },
  {
    id: "light-grille", title: "Raptor-Style Amber Grille Marker Lights", brand: "Generic",
    category: "Lighting", price: 18, originalPrice: 30, years: ALL_YEARS, doors: "Both",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=bronco+grille+amber+marker+lights",
    shipsToIsrael: true, rating: 4.1, tags: ["lighting", "grille", "amber", "marker"],
    description: "Three amber marker lights for that Raptor/Baja grille look."
  },

  /* ----------------------------- Recovery Gear ----------------------------- */
  {
    id: "rec-maxtrax", title: "MAXTRAX MKII Recovery Boards (Pair)", brand: "MAXTRAX",
    category: "Recovery Gear", price: 299, originalPrice: 329, years: ALL_YEARS, doors: "Both",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=maxtrax+mkii+recovery+boards",
    shipsToIsrael: true, rating: 4.9, tags: ["recovery", "traction", "boards", "sand", "mud"],
    description: "The gold-standard traction boards for sand, mud and snow recovery."
  },
  {
    id: "rec-winch", title: "Smittybilt X2O 10K Waterproof Winch", brand: "Smittybilt",
    category: "Recovery Gear", price: 329, originalPrice: 429, years: ALL_YEARS, doors: "Both",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=smittybilt+x2o+10k+winch",
    shipsToIsrael: false, rating: 4.6, tags: ["recovery", "winch", "10000lb", "waterproof"],
    description: "10,000 lb waterproof winch with synthetic rope and wireless remote."
  },
  {
    id: "rec-kit", title: "Off-Road Recovery Kit (Straps + Shackles)", brand: "Autobots",
    category: "Recovery Gear", price: 89, originalPrice: 129, years: ALL_YEARS, doors: "Both",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=off+road+recovery+kit+straps+shackles",
    shipsToIsrael: true, rating: 4.5, tags: ["recovery", "strap", "shackle", "kit"],
    description: "Complete kit: tow strap, tree saver, D-ring shackles, gloves and bag."
  },
  {
    id: "rec-ali-boards", title: "Traction Recovery Boards (Pair)", brand: "Generic",
    category: "Recovery Gear", price: 59, originalPrice: 99, years: ALL_YEARS, doors: "Both",
    source: "AliExpress", retailer: "AliExpress",
    url: "https://www.aliexpress.com/w/wholesale-recovery-traction-boards.html",
    shipsToIsrael: true, rating: 4.1, tags: ["recovery", "traction", "boards", "budget"],
    description: "MAXTRAX-style traction boards at a fraction of the price."
  },
  {
    id: "rec-temu-shackle", title: "Soft Shackle + Tree Saver Kit", brand: "Generic",
    category: "Recovery Gear", price: 25, originalPrice: 49, years: ALL_YEARS, doors: "Both",
    source: "Temu", retailer: "Temu",
    url: "https://www.temu.com/search_result.html?search_key=soft%20shackle%20recovery",
    shipsToIsrael: true, rating: 4.0, tags: ["recovery", "soft shackle", "tree saver", "budget"],
    description: "Synthetic soft shackle and tree-saver strap for lighter, safer recoveries."
  },

  /* ------------------------- Fridges & Power ------------------------------- */
  {
    id: "fridge-dometic", title: "Dometic CFX3 45 Fridge/Freezer", brand: "Dometic",
    category: "Fridges & Power", price: 899, originalPrice: 1050, years: ALL_YEARS, doors: "Both",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=dometic+cfx3+45",
    shipsToIsrael: false, rating: 4.8, tags: ["fridge", "freezer", "12v", "camping", "power"],
    description: "46L dual-zone 12V fridge/freezer with app control and rugged build."
  },
  {
    id: "fridge-arb", title: "ARB Zero 47QT Fridge Freezer", brand: "ARB",
    category: "Fridges & Power", price: 1150, years: ALL_YEARS, doors: "Both",
    source: "Direct", retailer: "ARB 4x4",
    url: "https://www.arbusa.com/arb-zero-fridge-freezer/",
    shipsToIsrael: true, rating: 4.8, tags: ["fridge", "freezer", "12v", "arb", "premium"],
    description: "Single-zone 44L fridge with heavy-duty compressor; ARB has Israeli dealers."
  },
  {
    id: "fridge-ali", title: "Portable 12V Car Fridge (30L)", brand: "Generic",
    category: "Fridges & Power", price: 189, originalPrice: 299, years: ALL_YEARS, doors: "Both",
    source: "AliExpress", retailer: "AliExpress",
    url: "https://www.aliexpress.com/w/wholesale-12v-car-fridge-freezer.html",
    shipsToIsrael: true, rating: 4.2, tags: ["fridge", "freezer", "12v", "budget", "camping"],
    description: "Compact 30L compressor fridge/freezer; great value, ships to Israel."
  },
  {
    id: "power-jackery", title: "Jackery Explorer 1000 Power Station", brand: "Jackery",
    category: "Fridges & Power", price: 799, originalPrice: 999, years: ALL_YEARS, doors: "Both",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=jackery+explorer+1000",
    shipsToIsrael: true, rating: 4.7, tags: ["power", "battery", "solar", "camp", "1000wh"],
    description: "1002Wh portable power station to run a fridge, lights and devices off-grid."
  },
  {
    id: "power-dualbattery", title: "Dual Battery Isolator Kit", brand: "Generic",
    category: "Fridges & Power", price: 89, originalPrice: 140, years: ALL_YEARS, doors: "Both",
    source: "AliExpress", retailer: "AliExpress",
    url: "https://www.aliexpress.com/w/wholesale-dual-battery-isolator-kit.html",
    shipsToIsrael: true, rating: 4.0, tags: ["power", "dual battery", "isolator", "budget"],
    description: "Smart isolator kit so your fridge won't drain the starter battery."
  },

  /* --------------------------- Air Compressors ----------------------------- */
  {
    id: "air-arb", title: "ARB Twin Portable Air Compressor", brand: "ARB",
    category: "Air Compressors", price: 349, originalPrice: 419, years: ALL_YEARS, doors: "Both",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=arb+twin+portable+air+compressor",
    shipsToIsrael: true, rating: 4.8, tags: ["air", "compressor", "tires", "twin"],
    description: "High-output twin-motor compressor for fast airing-up after the trail."
  },
  {
    id: "air-viair", title: "VIAIR 88P Portable Compressor", brand: "VIAIR",
    category: "Air Compressors", price: 69, originalPrice: 89, years: ALL_YEARS, doors: "Both",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=viair+88p+portable+compressor",
    shipsToIsrael: true, rating: 4.6, tags: ["air", "compressor", "portable", "budget"],
    description: "Compact clip-to-battery compressor perfect for stock 33\" tires."
  },
  {
    id: "air-temu", title: "Digital Portable Tire Inflator", brand: "Generic",
    category: "Air Compressors", price: 32, originalPrice: 59, years: ALL_YEARS, doors: "Both",
    source: "Temu", retailer: "Temu",
    url: "https://www.temu.com/search_result.html?search_key=portable%20tire%20inflator",
    shipsToIsrael: true, rating: 3.9, tags: ["air", "inflator", "digital", "budget"],
    description: "Rechargeable digital inflator with auto shut-off for quick top-ups."
  },

  /* ------------------------ Armor & Protection ----------------------------- */
  {
    id: "armor-rc-bumper", title: "Rough Country Front Bumper", brand: "Rough Country",
    category: "Armor & Protection", price: 649, originalPrice: 799, years: ALL_YEARS, doors: "Both",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=rough+country+bronco+front+bumper",
    shipsToIsrael: false, rating: 4.5, tags: ["bumper", "armor", "steel", "winch mount"],
    description: "Full-width steel front bumper with winch mount and light cutouts."
  },
  {
    id: "armor-smitty-sliders", title: "Smittybilt XRC Rock Sliders", brand: "Smittybilt",
    category: "Armor & Protection", price: 399, originalPrice: 499, years: ALL_YEARS, doors: "4-Door",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=smittybilt+bronco+rock+sliders",
    shipsToIsrael: false, rating: 4.6, tags: ["rock sliders", "armor", "rocker", "steel"],
    description: "Bolt-on steel rock rails protecting the rockers and body panels."
  },
  {
    id: "armor-iag-sliders", title: "IAG Off-Road Rock Sliders (4-Door)", brand: "IAG Performance",
    category: "Armor & Protection", price: 895, years: ALL_YEARS, doors: "4-Door",
    source: "Direct", retailer: "IAG Performance",
    url: "https://www.iagperformance.com/ford-bronco/",
    shipsToIsrael: false, rating: 4.8, tags: ["rock sliders", "armor", "premium", "step"],
    description: "Heavy-wall step sliders engineered to jack the full weight of the Bronco."
  },
  {
    id: "armor-more-skid", title: "M.O.R.E. Skid Plate Kit", brand: "Mountain Off Road",
    category: "Armor & Protection", price: 549, originalPrice: 620, years: ALL_YEARS, doors: "Both",
    source: "Direct", retailer: "Mountain Off Road Enterprises",
    url: "https://mountainoffroad.com/blogs/blog/the-ford-bronco-overland-build",
    shipsToIsrael: false, rating: 4.7, tags: ["skid plate", "armor", "underbody", "protection"],
    description: "Full underbody skid protection for engine, transmission and transfer case."
  },
  {
    id: "armor-ali-carrier", title: "Rear Tire Carrier Reinforcement", brand: "Generic",
    category: "Armor & Protection", price: 120, originalPrice: 210, years: ALL_YEARS, doors: "Both",
    source: "AliExpress", retailer: "AliExpress",
    url: "https://www.aliexpress.com/w/wholesale-bronco-tire-carrier.html",
    shipsToIsrael: true, rating: 4.0, tags: ["tire carrier", "hinge", "reinforcement"],
    description: "Heavy-duty hinge reinforcement to carry larger 35\"+ spare tires."
  },

  /* ------------------------------- Interior -------------------------------- */
  {
    id: "int-stickerfab", title: "StickerFab Interior Dash Overlay", brand: "StickerFab",
    category: "Interior & Trim", price: 89, years: ALL_YEARS, doors: "Both",
    source: "Direct", retailer: "StickerFab",
    url: "https://www.stickerfab.com/collections/2021-ford-bronco",
    shipsToIsrael: true, rating: 4.5, tags: ["interior", "dash", "overlay", "trim", "topo"],
    description: "Precision-cut dash overlays in topo, carbon and solid finishes."
  },
  {
    id: "int-dashtray", title: "Dash Tray Storage Organizer", brand: "BroncOutfitter",
    category: "Interior & Trim", price: 39, originalPrice: 59, years: ALL_YEARS, doors: "Both",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=bronco+dash+tray+organizer",
    shipsToIsrael: true, rating: 4.4, tags: ["interior", "dash", "storage", "organizer"],
    description: "Snap-in dash tray adding a handy shelf above the glovebox."
  },
  {
    id: "int-mats", title: "All-Weather Rubber Floor Mats", brand: "Generic",
    category: "Interior & Trim", price: 129, originalPrice: 169, years: ALL_YEARS, doors: "4-Door",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=bronco+all+weather+floor+mats",
    shipsToIsrael: true, rating: 4.6, tags: ["interior", "floor mats", "rubber", "protection"],
    description: "Custom-fit deep-dish rubber mats for muddy, sandy overland days."
  },
  {
    id: "int-console", title: "Center Console Organizer Tray", brand: "Generic",
    category: "Interior & Trim", price: 19, originalPrice: 35, years: ALL_YEARS, doors: "Both",
    source: "AliExpress", retailer: "AliExpress",
    url: "https://www.aliexpress.com/w/wholesale-bronco-console-organizer.html",
    shipsToIsrael: true, rating: 4.1, tags: ["interior", "console", "organizer", "budget"],
    description: "Slide-in console tray for keys, cards and small gear."
  },
  {
    id: "int-carbon", title: "Carbon-Fiber Interior Trim Kit", brand: "Generic",
    category: "Interior & Trim", price: 34, originalPrice: 60, years: ALL_YEARS, doors: "Both",
    source: "AliExpress", retailer: "AliExpress",
    url: "https://www.aliexpress.com/w/wholesale-bronco-interior-trim-kit.html",
    shipsToIsrael: true, rating: 3.9, tags: ["interior", "carbon fiber", "trim", "budget"],
    description: "Adhesive carbon-look trim pieces to dress up the cabin cheaply."
  },
  {
    id: "int-grab", title: "Grab Handle Set with Storage", brand: "Generic",
    category: "Interior & Trim", price: 16, originalPrice: 32, years: ALL_YEARS, doors: "Both",
    source: "Temu", retailer: "Temu",
    url: "https://www.temu.com/search_result.html?search_key=roll%20bar%20grab%20handles",
    shipsToIsrael: true, rating: 4.0, tags: ["interior", "grab handle", "storage", "budget"],
    description: "Roll-bar grab handles with built-in phone/pouch storage."
  },

  /* --------------------------- Cargo & Tire -------------------------------- */
  {
    id: "cargo-drawer", title: "Rear Cargo Drawer / MOLLE System", brand: "Goose Gear",
    category: "Cargo & Tire", price: 399, originalPrice: 459, years: ALL_YEARS, doors: "4-Door",
    source: "Direct", retailer: "Main Line Overland",
    url: "https://mainlineoverland.com/collections/ford-bronco-overland-roof-racks-accessories",
    shipsToIsrael: false, rating: 4.6, tags: ["cargo", "drawer", "storage", "trunk"],
    description: "Rear-area storage/drawer platform for organized, lockable gear."
  },
  {
    id: "cargo-trasharoo", title: "Trasharoo Spare-Tire Trash Bag", brand: "Trasharoo",
    category: "Cargo & Tire", price: 45, years: ALL_YEARS, doors: "Both",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=trasharoo+spare+tire+trash+bag",
    shipsToIsrael: true, rating: 4.7, tags: ["cargo", "spare tire", "trash", "storage"],
    description: "Rugged spare-tire mounted bag for trail trash and muddy gear."
  },
  {
    id: "cargo-ali-spare", title: "Spare Tire Mount Storage Bag", brand: "Generic",
    category: "Cargo & Tire", price: 29, originalPrice: 49, years: ALL_YEARS, doors: "Both",
    source: "AliExpress", retailer: "AliExpress",
    url: "https://www.aliexpress.com/w/wholesale-spare-tire-storage-bag.html",
    shipsToIsrael: true, rating: 4.1, tags: ["cargo", "spare tire", "storage", "budget"],
    description: "Weatherproof spare-tire tool/gear bag at a budget price."
  },
  {
    id: "cargo-temu-roofbag", title: "Waterproof Rooftop Cargo Bag", brand: "Generic",
    category: "Cargo & Tire", price: 42, originalPrice: 79, years: ALL_YEARS, doors: "Both",
    source: "Temu", retailer: "Temu",
    url: "https://www.temu.com/search_result.html?search_key=waterproof%20rooftop%20cargo%20bag",
    shipsToIsrael: true, rating: 4.0, tags: ["cargo", "roof bag", "waterproof", "budget"],
    description: "Roll-top waterproof roof bag for overflow gear on long trips."
  },

  /* --------------------------- Fuel & Water -------------------------------- */
  {
    id: "fuel-rotopax", title: "RotopaX 2-Gallon Fuel Pack", brand: "RotopaX",
    category: "Fuel & Water", price: 89, originalPrice: 110, years: ALL_YEARS, doors: "Both",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=rotopax+2+gallon+fuel+pack",
    shipsToIsrael: true, rating: 4.8, tags: ["fuel", "jerry can", "gas", "storage"],
    description: "Slim stackable fuel pack that mounts to racks, tire carriers and more."
  },
  {
    id: "water-fr", title: "Front Runner Water Tank (42L)", brand: "Front Runner",
    category: "Fuel & Water", price: 220, years: ALL_YEARS, doors: "Both",
    source: "Direct", retailer: "Front Runner Outfitters",
    url: "https://www.frontrunneroutfitters.com/en/us/shop/vehicle/ford/bronco",
    shipsToIsrael: true, rating: 4.7, tags: ["water", "tank", "camp", "storage"],
    description: "Under-rack 42L water tank with tap for camp cooking and washing."
  },

  /* -------------------------- Steps & Ladders ------------------------------ */
  {
    id: "step-nerf", title: "Side Step Nerf Bars", brand: "Generic",
    category: "Steps & Ladders", price: 199, originalPrice: 260, years: ALL_YEARS, doors: "4-Door",
    source: "Amazon", retailer: "Amazon",
    url: "https://www.amazon.com/s?k=bronco+running+boards+nerf+bars",
    shipsToIsrael: true, rating: 4.4, tags: ["steps", "nerf bars", "running boards"],
    description: "Bolt-on side steps to help kids and shorter drivers climb in."
  },
  {
    id: "ladder-ali", title: "Rear Tire-Mounted Ladder", brand: "Generic",
    category: "Steps & Ladders", price: 99, originalPrice: 160, years: ALL_YEARS, doors: "Both",
    source: "AliExpress", retailer: "AliExpress",
    url: "https://www.aliexpress.com/w/wholesale-bronco-rear-ladder.html",
    shipsToIsrael: true, rating: 4.0, tags: ["ladder", "tire mount", "roof access", "budget"],
    description: "Spare-tire mounted ladder for easy access to roof racks and tents."
  },

  /* ----------------------------- Social Deals ------------------------------ */
  {
    id: "social-bronco6g", title: "Group Buy: Fender Flare Delete Kit", brand: "Bronco6G Community",
    category: "Social Deals", price: 75, originalPrice: 110, years: ALL_YEARS, doors: "Both",
    source: "Social", retailer: "Bronco6G Forum",
    url: "https://www.bronco6g.com/forum/threads/off-road-overlanding-accessories-build-my-ford-bronco.40398/",
    shipsToIsrael: false, rating: 4.5, tags: ["social", "group buy", "fender", "forum"],
    description: "Forum group-buy pricing on a Sasquatch fender-flare delete kit."
  },
  {
    id: "social-trailrecon", title: "YouTube Promo: TrailRecon Recovery Bundle", brand: "TrailRecon",
    category: "Social Deals", price: 199, originalPrice: 260, years: ALL_YEARS, doors: "Both",
    source: "Social", retailer: "TrailRecon",
    url: "https://trailrecon.com/collections/ford-bronco-2021-2024",
    shipsToIsrael: false, rating: 4.6, tags: ["social", "youtube", "recovery", "bundle"],
    description: "Creator-promo bundle: traction boards, straps and shackles at a discount."
  },
  {
    id: "social-broaddict", title: "Instagram Deal: BROADDICT Gear Bundle", brand: "BROADDICT",
    category: "Social Deals", price: 129, originalPrice: 179, years: NEW_YEARS, doors: "Both",
    source: "Social", retailer: "BROADDICT",
    url: "https://www.broaddict.com/blogs/news/5-must-have-2026-gear-recommendations-for-new-bronco-owners-and-overlanding-dads",
    shipsToIsrael: false, rating: 4.3, tags: ["social", "instagram", "bundle", "2026"],
    description: "Social-promo essentials bundle curated for new 2024–2026 Bronco owners."
  },
  {
    id: "social-fbmarket", title: "Facebook Marketplace: Used Front Bumper", brand: "Local Seller",
    category: "Social Deals", price: 300, originalPrice: 650, years: ALL_YEARS, doors: "Both",
    source: "Social", retailer: "Facebook Marketplace",
    url: "https://www.facebook.com/marketplace/search/?query=ford%20bronco%20front%20bumper",
    shipsToIsrael: false, rating: 4.0, tags: ["social", "marketplace", "used", "bumper"],
    description: "Second-hand steel front bumper — big savings if you can pick up locally."
  }
];
