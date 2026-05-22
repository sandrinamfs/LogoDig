// ── Icons ─────────────────────────────────────────────────────────────────────

const COPY_ICON  = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
const DOWN_ICON  = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
const LINK_ICON  = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
const CHECK_ICON = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

// ── Brand → Domain mapping ────────────────────────────────────────────────────

const BRANDS = {
  '1password':   ['1password.com'],
  'airtable':    ['airtable.com'],
  'algolia':     ['algolia.com'],
  'amplitude':   ['amplitude.com'],
  'anthropic':   ['anthropic.com', 'anthropic.ai'],
  'apple':       ['apple.com'],
  'astro':       ['astro.build'],
  'atlassian':   ['atlassian.com'],
  'aws':         ['aws.amazon.com'],
  'azure':       ['azure.microsoft.com'],
  'bitbucket':   ['bitbucket.org'],
  'bitly':       ['bitly.com'],
  'browserless': ['browserless.io'],
  'claude':      ['claude.ai'],
  'cloudflare':  ['cloudflare.com'],
  'cohere':      ['cohere.com'],
  'contentful':  ['contentful.com'],
  'cursor':      ['cursor.sh'],
  'datadog':     ['datadoghq.com'],
  'deepseek':    ['deepseek.com'],
  'discord':     ['discord.com'],
  'docker':      ['docker.com'],
  'drizzle':     ['drizzle.team'],
  'dropbox':     ['dropbox.com'],
  'elevenlabs':  ['elevenlabs.io'],
  'fal':         ['fal.ai'],
  'figma':       ['figma.com'],
  'firebase':    ['firebase.google.com'],
  'fly':         ['fly.io'],
  'flutterflow': ['flutterflow.io'],
  'framer':      ['framer.com'],
  'gatsby':      ['gatsbyjs.com'],
  'ghost':       ['ghost.org'],
  'github':      ['github.com'],
  'gitlab':      ['gitlab.com'],
  'google':      ['google.com'],
  'groq':        ['groq.com'],
  'heroku':      ['heroku.com'],
  'huggingface': ['huggingface.co'],
  'instagram':   ['instagram.com'],
  'intercom':    ['intercom.com'],
  'jira':        ['atlassian.com'],
  'kubernetes':  ['kubernetes.io'],
  'linear':      ['linear.app'],
  'loom':        ['loom.com'],
  'meta':        ['meta.com'],
  'midjourney':  ['midjourney.com'],
  'miro':        ['miro.com'],
  'mistral':     ['mistral.ai'],
  'mixpanel':    ['mixpanel.com'],
  'mongodb':     ['mongodb.com'],
  'neon':        ['neon.tech'],
  'netlify':     ['netlify.com'],
  'next':        ['nextjs.org'],
  'nextjs':      ['nextjs.org'],
  'notion':      ['notion.so'],
  'npm':         ['npmjs.com'],
  'nuxt':        ['nuxt.com'],
  'openai':      ['openai.com'],
  'openrouter':  ['openrouter.ai'],
  'paypal':      ['paypal.com'],
  'perplexity':  ['perplexity.ai'],
  'planetscale': ['planetscale.com'],
  'plaid':       ['plaid.com'],
  'postman':     ['postman.com'],
  'postgres':    ['postgresql.org'],
  'postgresql':  ['postgresql.org'],
  'prisma':      ['prisma.io'],
  'railway':     ['railway.app'],
  'react':       ['react.dev'],
  'redis':       ['redis.io'],
  'render':      ['render.com'],
  'replicate':   ['replicate.com'],
  'runway':      ['runwayml.com'],
  'salesforce':  ['salesforce.com'],
  'sanity':      ['sanity.io'],
  'segment':     ['segment.com'],
  'sentry':      ['sentry.io'],
  'shopify':     ['shopify.com'],
  'slack':       ['slack.com'],
  'spotify':     ['spotify.com'],
  'stability':   ['stability.ai'],
  'storybook':   ['storybook.js.org'],
  'stripe':      ['stripe.com'],
  'supabase':    ['supabase.com'],
  'svelte':      ['svelte.dev'],
  'tailwind':    ['tailwindcss.com'],
  'together':    ['together.ai'],
  'turso':       ['turso.tech'],
  'twilio':      ['twilio.com'],
  'twitter':     ['x.com'],
  'typescript':  ['typescriptlang.org'],
  'vercel':      ['vercel.com'],
  'vite':        ['vitejs.dev'],
  'vue':         ['vuejs.org'],
  'webflow':     ['webflow.com'],
  'whimsical':   ['whimsical.com'],
  'wordpress':   ['wordpress.org'],
  'x':           ['x.com'],
  'youtube':     ['youtube.com'],
  'zendesk':     ['zendesk.com'],
  'zoom':        ['zoom.us'],
};

// ── Default popular favicons ──────────────────────────────────────────────────

const DEFAULT_POPULAR = [
  'apollo.io',
  'replicate.com',
  'v0.dev',
  'ollama.ai',
  'cursor.sh',
  'notion.so',
  'figma.com',
  'claude.ai',
  'grok.com',
  'groq.com',
  'kling.ai',
  'firebase.google.com',
  'leonardo.ai',
  'postman.com',
  'relume.io',
].map(domain => ({ domain, label: domain }));

// ── Usage tracking ────────────────────────────────────────────────────────────

const STORAGE_KEY = 'favidex-recent';

function getRecentDomains() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}

function recordUsage(domain) {
  const recent = getRecentDomains();
  const updated = [domain, ...recent.filter(d => d !== domain)].slice(0, 15);
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); } catch {}
}

function getPopularItems() {
  const recent = getRecentDomains();
  const recentItems = recent.map(domain => ({ domain, label: domain }));
  const usedSet = new Set(recent);
  const fill = DEFAULT_POPULAR.filter(i => !usedSet.has(i.domain));
  return [...recentItems, ...fill].slice(0, 15);
}

// ── DOM refs ──────────────────────────────────────────────────────────────────

const grid        = document.getElementById("logoGrid");
const searchInput = document.getElementById("searchInput");
const searchClearBtn = document.getElementById("searchClearBtn");
const emptyState  = document.getElementById("emptyState");
const asciiAnim   = document.getElementById("asciiAnim");
const searchQueryEl = document.getElementById("searchQuery");
const lightBtn    = document.getElementById("lightBtn");
const darkBtn     = document.getElementById("darkBtn");
const toast       = document.getElementById("toast");

// ── Theme ─────────────────────────────────────────────────────────────────────

const savedTheme = localStorage.getItem("favidex-theme");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (systemDark ? "dark" : "light"));

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  lightBtn.classList.toggle("active", theme === "light");
  darkBtn.classList.toggle("active", theme === "dark");
  localStorage.setItem("favidex-theme", theme);
}

lightBtn.addEventListener("click", () => applyTheme("light"));
darkBtn.addEventListener("click", () => applyTheme("dark"));

document.querySelector(".logo").addEventListener("click", () => {
  searchInput.value = "";
  toggleClearBtn();
  showDefault();
});

// ── Rain animation ────────────────────────────────────────────────────────────

const RAIN_ROWS  = 8;
const RAIN_COLS  = 13;
const RAIN_GAP   = 2;
const RAIN_TRAIL = ['│', '╎', '·'];

const drops = Array.from({ length: RAIN_COLS }, () => ({
  y:       -Math.floor(Math.random() * (RAIN_ROWS + RAIN_TRAIL.length)),
  speed:   Math.random() < 0.35 ? 2 : 1,
  counter: 0,
}));

function renderRain() {
  const width    = RAIN_COLS * RAIN_GAP;
  const rainGrid = Array.from({ length: RAIN_ROWS }, () => Array(width).fill(' '));
  drops.forEach((drop, d) => {
    const x = d * RAIN_GAP;
    RAIN_TRAIL.forEach((char, t) => {
      const row = drop.y - t;
      if (row >= 0 && row < RAIN_ROWS) rainGrid[row][x] = char;
    });
  });
  return rainGrid.map(row => row.join('')).join('\n');
}

function tickRain() {
  drops.forEach(drop => {
    drop.counter++;
    if (drop.counter >= drop.speed) {
      drop.counter = 0;
      drop.y++;
      if (drop.y - RAIN_TRAIL.length >= RAIN_ROWS) {
        drop.y     = -RAIN_TRAIL.length - Math.floor(Math.random() * 4);
        drop.speed = Math.random() < 0.35 ? 2 : 1;
      }
    }
  });
  asciiAnim.textContent = renderRain();
}

let animInterval = null;

function startAnim() {
  asciiAnim.style.opacity = "1";
  asciiAnim.textContent   = renderRain();
  animInterval = setInterval(tickRain, 130);
}

function stopAnim() {
  clearInterval(animInterval);
  animInterval = null;
}

window.addEventListener("beforeunload", stopAnim);

// ── Search ────────────────────────────────────────────────────────────────────

function isDomain(str) {
  if (/^https?:\/\//i.test(str)) return true;
  return /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z]{2,})+([\/\?#].*)?$/.test(str);
}

function extractDomain(str) {
  str = str.trim();
  if (!/^https?:\/\//i.test(str)) str = 'https://' + str;
  try {
    return new URL(str).hostname.replace(/^www\./, '');
  } catch {
    return str.replace(/^https?:\/\//i, '').replace(/^www\./, '').split(/[\/\?#]/)[0];
  }
}

function lookupBrand(query) {
  const q = query.toLowerCase().replace(/\s+/g, '');
  if (BRANDS[q]) return BRANDS[q];
  // Strip common suffixes like ".js", ".css"
  const qStripped = q.replace(/\.?js$/, '').replace(/\.?css$/, '');
  if (qStripped !== q && BRANDS[qStripped]) return BRANDS[qStripped];
  // Keys that start with the query (min 2 chars)
  if (q.length >= 2) {
    const matches = Object.keys(BRANDS).filter(k => k.startsWith(q));
    if (matches.length > 0) {
      return [...new Set(matches.slice(0, 4).flatMap(k => BRANDS[k]))].slice(0, 6);
    }
  }
  return [];
}

function showDefault() {
  renderGrid(getPopularItems());
  emptyState.classList.add("hidden");
  stopAnim();
}

function runSearch() {
  const q = searchInput.value.trim();
  if (!q) { showDefault(); return; }

  if (isDomain(q)) {
    const domain = extractDomain(q);
    renderGrid([{ domain, label: domain }]);
    return;
  }

  const domains = lookupBrand(q);
  if (domains.length > 0) {
    renderGrid(domains.map(d => ({ domain: d, label: d })));
    return;
  }

  // Unknown brand: generate TLD candidates
  const slug = q.toLowerCase().replace(/\s+/g, '');
  renderGrid([
    { domain: `${slug}.com`, label: `${slug}.com` },
    { domain: `${slug}.io`,  label: `${slug}.io`  },
    { domain: `${slug}.ai`,  label: `${slug}.ai`  },
  ]);
}

function toggleClearBtn() {
  searchClearBtn.style.display = searchInput.value ? "flex" : "none";
}

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") runSearch();
  if (e.key === "Escape") {
    searchInput.value = "";
    toggleClearBtn();
    searchInput.blur();
    showDefault();
  }
});

searchInput.addEventListener("input", () => {
  toggleClearBtn();
  if (searchInput.value === "") showDefault();
});

searchClearBtn.addEventListener("click", () => {
  searchInput.value = "";
  toggleClearBtn();
  searchInput.blur();
  showDefault();
});

// ── Favicon fallback sizes ────────────────────────────────────────────────────

const FAVICON_FALLBACKS = [128, 64];

function faviconFallback(img) {
  const idx = parseInt(img.dataset.fbIdx || '0');
  if (idx < FAVICON_FALLBACKS.length) {
    img.dataset.fbIdx = idx + 1;
    img.src = img.src.replace(/sz=\d+/, `sz=${FAVICON_FALLBACKS[idx]}`);
  }
}

// ── Render ────────────────────────────────────────────────────────────────────

function renderGrid(items) {
  if (items.length === 0) {
    grid.innerHTML = "";
    searchQueryEl.textContent = searchInput.value.trim();
    emptyState.classList.remove("hidden");
    startAnim();
    return;
  }
  emptyState.classList.add("hidden");
  stopAnim();

  grid.innerHTML = items.map(item => `
    <div class="card" data-domain="${escHtml(item.domain)}" data-name="${escHtml(item.label)}">
      <a class="card-body" href="https://${escHtml(item.domain)}" target="_blank" rel="noopener noreferrer">
        <div class="card-logo">
          <img src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(item.domain)}&sz=128" alt="${escHtml(item.label)}" onerror="faviconFallback(this)">
        </div>
        <div class="card-name">${escHtml(item.label)}</div>
      </a>
      <div class="card-actions">
        <button class="card-btn copy-btn" data-tooltip="Copy PNG"  aria-label="Copy ${escHtml(item.label)} PNG">${COPY_ICON}</button>
        <button class="card-btn dl-btn"   data-tooltip="Download PNG" aria-label="Download ${escHtml(item.label)} PNG">${DOWN_ICON}</button>
        <button class="card-btn link-btn" data-tooltip="Image URL" aria-label="Copy ${escHtml(item.label)} image URL">${LINK_ICON}</button>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".copy-btn").forEach(btn =>
    btn.addEventListener("click", (e) => { e.stopPropagation(); copyPng(btn.closest(".card")); })
  );
  grid.querySelectorAll(".dl-btn").forEach(btn =>
    btn.addEventListener("click", (e) => { e.stopPropagation(); downloadPng(btn.closest(".card")); })
  );
  grid.querySelectorAll(".link-btn").forEach(btn =>
    btn.addEventListener("click", (e) => { e.stopPropagation(); copyLink(btn.closest(".card")); })
  );
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    .replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ── Shared: fetch favicon → blob URL → canvas → PNG blob ─────────────────────

async function getFaviconPng(domain) {
  const res = await fetch(`/api/favicon?domain=${encodeURIComponent(domain)}&sz=128`);
  if (!res.ok) throw new Error("fetch failed");
  const srcBlob = await res.blob();
  // Always run through canvas — converts indexed/palette PNGs (which Chrome's
  // clipboard rejects) to standard RGBA PNG. Canvas starts transparent so
  // alpha is preserved for logos with transparent backgrounds.
  const blobUrl = URL.createObjectURL(srcBlob);
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(blobUrl);
      const size = Math.max(img.naturalWidth || 128, img.naturalHeight || 128);
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      canvas.getContext("2d").drawImage(img, 0, 0);
      canvas.toBlob(b => b ? resolve(b) : reject(new Error("toBlob failed")), "image/png");
    };
    img.onerror = () => { URL.revokeObjectURL(blobUrl); reject(new Error("image load failed")); };
    img.src = blobUrl;
  });
}

// ── Copy PNG ──────────────────────────────────────────────────────────────────

async function copyPng(card) {
  const domain = card.dataset.domain;
  try {
    // Pass the Promise directly so ClipboardItem starts within the user gesture
    // context — required by Safari, which rejects if we await first.
    await navigator.clipboard.write([
      new ClipboardItem({ "image/png": getFaviconPng(domain) })
    ]);
    showToast("PNG copied to clipboard");
    recordUsage(domain);
    const btn = card.querySelector(".copy-btn");
    btn.innerHTML = CHECK_ICON;
    setTimeout(() => { btn.innerHTML = COPY_ICON; }, 1600);
  } catch {
    showToast("Copy not supported in this browser — try right-clicking the image");
  }
}

// ── Download PNG ──────────────────────────────────────────────────────────────

async function downloadPng(card) {
  const domain = card.dataset.domain;
  try {
    const blob = await getFaviconPng(domain);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${domain}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(a.href), 10000);
    showToast(`Downloaded ${domain}.png`);
    recordUsage(domain);
  } catch {
    showToast("Download failed");
  }
}

// ── Copy link ─────────────────────────────────────────────────────────────────

async function copyLink(card) {
  const domain = card.dataset.domain;
  const url = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
  try {
    await navigator.clipboard.writeText(url);
    showToast("Link copied to clipboard");
    const btn = card.querySelector(".link-btn");
    btn.innerHTML = CHECK_ICON;
    setTimeout(() => { btn.innerHTML = LINK_ICON; }, 1600);
  } catch {
    showToast("Copy not supported in this browser");
  }
}

// ── Tooltip ───────────────────────────────────────────────────────────────────

const tooltipEl = document.createElement("div");
tooltipEl.className = "tooltip";
document.body.appendChild(tooltipEl);

let tooltipDelay;

grid.addEventListener("mouseover", (e) => {
  const btn = e.target.closest("[data-tooltip]");
  if (!btn) return;
  clearTimeout(tooltipDelay);
  tooltipDelay = setTimeout(() => {
    const rect = btn.getBoundingClientRect();
    tooltipEl.textContent = btn.dataset.tooltip;
    tooltipEl.style.left = `${rect.left + rect.width / 2}px`;
    tooltipEl.style.top  = `${rect.top - 26}px`;
    tooltipEl.classList.add("show");
  }, 500);
});

grid.addEventListener("mouseout", (e) => {
  if (!e.target.closest("[data-tooltip]")) return;
  clearTimeout(tooltipDelay);
  tooltipEl.classList.remove("show");
});

// ── Toast ─────────────────────────────────────────────────────────────────────

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

// ── Init ──────────────────────────────────────────────────────────────────────

renderGrid(getPopularItems());
