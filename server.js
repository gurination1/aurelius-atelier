const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5173;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.af': 'video/mp4', // ActiveFrame video stream
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);
  if (pathname.startsWith("/branders")) pathname = pathname.slice("/branders".length) || "/";
  if (pathname.startsWith("/aurelius-atelier")) pathname = pathname.slice("/aurelius-atelier".length) || "/";

  if (pathname === '/') {
    pathname = '/index.html';
  } else if (!path.extname(pathname)) {
    if (fs.existsSync(path.join(PUBLIC_DIR, pathname, 'index.html'))) {
      pathname = path.join(pathname, 'index.html');
    } else if (fs.existsSync(path.join(PUBLIC_DIR, pathname + '.html'))) {
      pathname = pathname + '.html';
    } else {
      pathname = '/index.html';
    }
  }

  const filePath = path.join(PUBLIC_DIR, pathname);

  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Not Found: ' + pathname);
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Handle range requests for video streaming (.mp4, .webm, .af)
    if ((ext === '.mp4' || ext === '.webm' || ext === '.af') && req.headers.range && stats.size > 0) {
      const range = req.headers.range;
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10) || 0;
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
      const chunksize = (end - start) + 1;

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });
      return fs.createReadStream(filePath, { start, end }).pipe(res);
    }

    // Static immutable headers for fonts and media
    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
    };

    headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';

    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Vanguard Atelier Cleanroom server active at http://localhost:${PORT}`);
});
