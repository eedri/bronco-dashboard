/*
 * Generates category illustration SVGs into assets/img/.
 * Run: node scripts/gen-images.mjs
 *
 * Each image is a self-contained, theme-neutral flat illustration used as the
 * default "photo" on a deal card. A deal may override it with a real photo via
 * the `image` field in data.js (the UI falls back to these on load/error).
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "assets", "img");
mkdirSync(outDir, { recursive: true });

const W = 400, H = 260;
const A = "#ffd0a3"; // warm accent

// Per-category: [slug, gradA, gradB, innerArt]
const cats = [
  ["roof-racks", "#b45309", "#f59e0b", `
    <rect x="122" y="150" width="156" height="42" rx="12"/>
    <path d="M150 150 l14 -22 h72 l14 22"/>
    <circle cx="158" cy="196" r="13" fill="#fff"/><circle cx="242" cy="196" r="13" fill="#fff"/>
    <g stroke="${A}"><line x1="120" y1="120" x2="280" y2="120"/>
    <line x1="140" y1="108" x2="140" y2="132"/><line x1="180" y1="108" x2="180" y2="132"/>
    <line x1="220" y1="108" x2="220" y2="132"/><line x1="260" y1="108" x2="260" y2="132"/></g>`],

  ["rooftop-tents", "#166534", "#22c55e", `
    <line x1="110" y1="150" x2="290" y2="150" stroke="${A}"/>
    <path d="M130 150 l70 -55 l70 55 z"/>
    <path d="M162 150 v-25 h76 v25"/>
    <g stroke="${A}"><line x1="120" y1="160" x2="120" y2="205"/>
    <line x1="120" y1="168" x2="150" y2="168"/><line x1="120" y1="185" x2="150" y2="185"/>
    <line x1="150" y1="160" x2="150" y2="205"/></g>`],

  ["awnings", "#92400e", "#f97316", `
    <line x1="140" y1="70" x2="140" y2="205" stroke="${A}"/>
    <path d="M140 96 l150 26 l0 20 l-150 -26 z" fill="#ffffff22"/>
    <path d="M140 96 l150 26"/>
    <path d="M140 116 l150 26"/>
    <g stroke="${A}"><line x1="278" y1="120" x2="278" y2="200"/><line x1="255" y1="116" x2="255" y2="200"/></g>`],

  ["molle-storage", "#713f12", "#a16207", `
    <g stroke="${A}">
    ${[0,1,2,3].map(r=>[0,1,2,3].map(c=>`<rect x="${140+c*32}" y="${86+r*30}" width="22" height="14" rx="4"/>`).join("")).join("")}
    </g>
    <rect x="176" y="150" width="70" height="60" rx="10"/>
    <path d="M176 168 h70"/>`],

  ["lighting", "#a16207", "#facc15", `
    <rect x="120" y="118" width="160" height="34" rx="10"/>
    <g stroke="${A}"><line x1="150" y1="118" x2="150" y2="152"/><line x1="180" y1="118" x2="180" y2="152"/>
    <line x1="210" y1="118" x2="210" y2="152"/><line x1="240" y1="118" x2="240" y2="152"/></g>
    <g stroke="${A}" stroke-width="6"><line x1="200" y1="92" x2="200" y2="72"/>
    <line x1="150" y1="98" x2="138" y2="82"/><line x1="250" y1="98" x2="262" y2="82"/></g>`],

  ["recovery-gear", "#7c2d12", "#ea580c", `
    <rect x="120" y="112" width="170" height="60" rx="16" transform="rotate(-8 200 140)"/>
    <g stroke="${A}" transform="rotate(-8 200 140)">
    <line x1="120" y1="132" x2="290" y2="132"/><line x1="120" y1="152" x2="290" y2="152"/>
    ${[0,1,2,3,4].map(i=>`<line x1="${145+i*30}" y1="112" x2="${145+i*30}" y2="172"/>`).join("")}</g>`],

  ["fridges-power", "#075985", "#0ea5e9", `
    <rect x="150" y="80" width="100" height="120" rx="12"/>
    <line x1="150" y1="132" x2="250" y2="132"/>
    <line x1="234" y1="100" x2="234" y2="116" stroke="${A}"/>
    <line x1="234" y1="150" x2="234" y2="182" stroke="${A}"/>
    <g stroke="${A}" transform="translate(200 108)"><line x1="-14" y1="0" x2="14" y2="0"/>
    <line x1="0" y1="-14" x2="0" y2="14"/><line x1="-10" y1="-10" x2="10" y2="10"/><line x1="-10" y1="10" x2="10" y2="-10"/></g>`],

  ["air-compressors", "#155e75", "#06b6d4", `
    <circle cx="185" cy="130" r="55"/>
    <circle cx="185" cy="130" r="7" fill="#fff"/>
    <line x1="185" y1="130" x2="215" y2="100" stroke="${A}" stroke-width="6"/>
    <path d="M240 130 q40 0 40 40 l0 20" stroke="${A}"/>
    <rect x="265" y="188" width="30" height="16" rx="4" stroke="${A}"/>`],

  ["armor-protection", "#334155", "#64748b", `
    <path d="M200 78 l60 22 v42 q0 52 -60 78 q-60 -26 -60 -78 v-42 z"/>
    <path d="M172 138 l20 22 l40 -46" stroke="${A}" stroke-width="8"/>`],

  ["interior-trim", "#6b21a8", "#a855f7", `
    <circle cx="200" cy="132" r="62"/>
    <circle cx="200" cy="132" r="20"/>
    <g stroke="${A}"><line x1="200" y1="112" x2="200" y2="70"/>
    <line x1="182" y1="142" x2="146" y2="168"/><line x1="218" y1="142" x2="254" y2="168"/></g>`],

  ["cargo-tire", "#292524", "#57534e", `
    <circle cx="200" cy="132" r="64"/>
    <circle cx="200" cy="132" r="28"/>
    <circle cx="200" cy="132" r="10" fill="#fff"/>
    <g stroke="${A}" stroke-width="6">${Array.from({length:12},(_,i)=>{const a=i*30*Math.PI/180;const x1=200+Math.cos(a)*64,y1=132+Math.sin(a)*64,x2=200+Math.cos(a)*52,y2=132+Math.sin(a)*52;return `<line x1="${x1.toFixed(0)}" y1="${y1.toFixed(0)}" x2="${x2.toFixed(0)}" y2="${y2.toFixed(0)}"/>`}).join("")}</g>`],

  ["fuel-water", "#115e59", "#14b8a6", `
    <rect x="150" y="92" width="100" height="115" rx="10"/>
    <path d="M168 92 v-14 h30 v14" stroke="${A}"/>
    <path d="M158 108 l84 84 M242 108 l-84 84" stroke="${A}"/>
    <line x1="150" y1="150" x2="250" y2="150"/>`],

  ["steps-ladders", "#854d0e", "#d97706", `
    <g><line x1="165" y1="72" x2="165" y2="205"/><line x1="235" y1="72" x2="235" y2="205"/>
    <g stroke="${A}">${[0,1,2,3,4].map(i=>`<line x1="165" y1="${92+i*28}" x2="235" y2="${92+i*28}"/>`).join("")}</g></g>`],

  ["social-deals", "#5b21b6", "#8b5cf6", `
    <path d="M150 110 l70 -26 v92 l-70 -26 z"/>
    <rect x="126" y="120" width="26" height="40" rx="6"/>
    <line x1="180" y1="176" x2="188" y2="205" stroke="${A}"/>
    <g stroke="${A}"><path d="M242 108 q22 22 0 44"/><path d="M258 96 q36 34 0 68"/></g>`],
];

const wave = `
  <g stroke="#ffffff" stroke-opacity="0.10" fill="none" stroke-width="2">
    <path d="M0 60 Q100 30 200 60 T400 60"/>
    <path d="M0 120 Q100 90 200 120 T400 120"/>
    <path d="M0 180 Q100 150 200 180 T400 180"/>
    <path d="M0 240 Q100 210 200 240 T400 240"/>
  </g>`;

for (const [slug, c1, c2, art] of cats) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  ${wave}
  <g fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
    ${art.trim()}
  </g>
</svg>`;
  writeFileSync(join(outDir, `${slug}.svg`), svg, "utf8");
  console.log("wrote", `${slug}.svg`);
}
console.log(`\nGenerated ${cats.length} images in assets/img/`);
