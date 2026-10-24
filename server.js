const ROOT = process.cwd();

const server = Bun.serve({
  port: 8080,
  async fetch(req) {
    const url = new URL(req.url);
    let pathname;
    try {
      pathname = decodeURIComponent(url.pathname);
    } catch {
      return new Response('Bad request', { status: 400 });
    }

    // resolve inside the project only — no `..` escapes
    const path = require('node:path');
    const fs = require('node:fs');
    const resolved = path.resolve(ROOT, '.' + pathname);
    if (resolved !== ROOT && !resolved.startsWith(ROOT + path.sep)) {
      return new Response('Forbidden', { status: 403 });
    }

    let stat = fs.statSync(resolved, { throwIfNoEntry: false });
    if (!stat) return new Response('Not found', { status: 404 });

    if (stat.isDirectory()) {
      // /folder -> /folder/ so relative imports resolve against the folder
      if (!pathname.endsWith('/')) {
        return Response.redirect(url.origin + pathname + '/', 302);
      }
      const index = Bun.file(path.join(resolved, 'index.html'));
      if (await index.exists()) return new Response(index);
      return new Response(listing(resolved, pathname, fs, path), {
        headers: { 'content-type': 'text/html; charset=utf-8' },
      });
    }

    return new Response(Bun.file(resolved));
  },
});

function listing(dir, urlPath, fs, path) {
  const entries = fs
    .readdirSync(dir)
    .filter((name) => !name.startsWith('.'))
    .map((name) => {
      const isDir = fs.statSync(path.join(dir, name)).isDirectory();
      return { name, href: urlPath + name + (isDir ? '/' : ''), isDir };
    })
    .sort((a, b) => a.isDir !== b.isDir ? (a.isDir ? -1 : 1) : a.name.localeCompare(b.name));

  const items = entries
    .map(({ name, href, isDir }) => `<li><a href="${href}">${name}${isDir ? '/' : ''}</a></li>`)
    .join('');
  return `<!DOCTYPE html><meta charset="utf-8"><title>${urlPath}</title><h1>${urlPath}</h1><ul>${items}</ul>`;
}

console.log(`Listening on http://localhost:${server.port}`);
