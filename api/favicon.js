export default async function handler(req, res) {
  const { domain, sz = '128' } = req.query;
  if (!domain) { res.status(400).end('domain required'); return; }

  const url = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=${sz}`;

  try {
    const upstream = await fetch(url);
    if (!upstream.ok) throw new Error('upstream');
    const buffer = await upstream.arrayBuffer();
    res.setHeader('Content-Type', upstream.headers.get('content-type') || 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(Buffer.from(buffer));
  } catch {
    res.status(502).end('upstream error');
  }
}
