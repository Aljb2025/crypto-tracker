import { createServer } from "node:http";
import { createReadStream, existsSync } from "node:fs";
import { extname, join } from "node:path";

const port = Number(process.env.PORT || 5180);
const root = process.cwd();
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8"
};

createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const cleanPath = decodeURIComponent(url.pathname).replace(/^\/+/, "").replace(/\.\./g, "");
  const filePath = join(root, cleanPath || "index.html");
  const finalPath = existsSync(filePath) ? filePath : join(root, "index.html");
  response.writeHead(200, { "Content-Type": types[extname(finalPath)] || "application/octet-stream" });
  createReadStream(finalPath).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Crypto Portfolio Tracker running at http://127.0.0.1:${port}`);
});
