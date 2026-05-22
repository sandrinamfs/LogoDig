const http  = require("http");
const https = require("https");
const fs    = require("fs");
const path  = require("path");

const PORT = 8080;
const ROOT = __dirname;

const MIME = {
  ".html": "text/html",
  ".css":  "text/css",
  ".js":   "application/javascript",
  ".json": "application/json",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".ico":  "image/x-icon",
};

// ── SSE clients for live reload ───────────────────────────────────────────────

const clients = new Set();

function broadcast() {
  for (const res of clients) res.write("data: reload\n\n");
}

// ── Watch source files ────────────────────────────────────────────────────────

let debounce;
["index.html", "app.js", "style.css"].forEach(file => {
  fs.watch(path.join(ROOT, file), () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      console.log(`↺  ${file} changed — reloading…`);
      broadcast();
    }, 100);
  });
});

// ── HTTP server ───────────────────────────────────────────────────────────────

const RELOAD_SNIPPET = `<script>
  const es = new EventSource("/__reload");
  es.onmessage = () => location.reload();
</script>`;

const server = http.createServer((req, res) => {
  // SSE endpoint
  if (req.url === "/__reload") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });
    res.write(": connected\n\n");
    clients.add(res);
    req.on("close", () => clients.delete(res));
    return;
  }

  // Favicon proxy — mirrors /api/favicon Vercel function
  if (req.url.startsWith("/api/favicon")) {
    const params = new URLSearchParams(req.url.split("?")[1] || "");
    const domain = params.get("domain");
    const sz     = params.get("sz") || "128";

    if (!domain) { res.writeHead(400); res.end("domain required"); return; }

    const target = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=${sz}`;
    const options = {
      hostname: "www.google.com",
      path: `/s2/favicons?domain=${encodeURIComponent(domain)}&sz=${sz}`,
      headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" },
    };
    function follow(url, depth) {
      if (depth > 5) { res.writeHead(502); res.end("too many redirects"); return; }
      const mod = url.startsWith("https") ? https : require("http");
      mod.get(url, { headers: options.headers }, (upstream) => {
        if (upstream.statusCode >= 300 && upstream.statusCode < 400 && upstream.headers.location) {
          upstream.resume();
          follow(upstream.headers.location, depth + 1);
          return;
        }
        const ct = upstream.headers["content-type"] || "image/png";
        res.writeHead(200, { "Content-Type": ct, "Cache-Control": "public, max-age=86400", "Access-Control-Allow-Origin": "*" });
        upstream.pipe(res);
      }).on("error", () => { res.writeHead(502); res.end("upstream error"); });
    }
    follow(target, 0);
    return;
  }

  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === "/" || urlPath === "") urlPath = "/index.html";

  const filePath = path.join(ROOT, urlPath);

  if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end(); return; }

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end("Not found"); return; }

    const ext  = path.extname(filePath).toLowerCase();
    const mime = MIME[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": mime });

    if (ext === ".html") {
      res.end(data.toString().replace("</body>", `${RELOAD_SNIPPET}\n</body>`));
    } else {
      res.end(data);
    }
  });
});

// ── Start ─────────────────────────────────────────────────────────────────────

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`\n✗ Port ${PORT} is already in use.\n`);
    process.exit(1);
  } else {
    throw err;
  }
});

server.listen(PORT, () => {
  console.log(`\n✓ FaviconDex dev server running at http://localhost:${PORT}/\n`);
});
