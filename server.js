const server = Bun.serve({
  port: 8080,
  async fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname === '/' ? '/index.html' : url.pathname;
    const file = Bun.file('.' + path);
    if (await file.exists()) return new Response(file);
    return new Response('Not found', { status: 404 });
  },
});
console.log(`Listening on http://localhost:${server.port}`);