import { readFile } from "node:fs/promises";

/** Public, immutable artwork only. Names come from the shipped allowlist, never from the request. */
const ARTWORK = ["wallpaper.webp", "wallpaper2.webp", "character2.webp", "logo-full.svg", "logo-mark.svg"];
const PREFIX = "/skin-assets/luotianyi";
const NAME_RE = /^(wallpaper2?|character2|logo-full|logo-mark)\.(webp|svg)$/;
const TYPES = {
  webp: "image/webp",
  svg: "image/svg+xml"
};

/** Serve only this package's immutable presentation assets while the skin is enabled. */
function installSkinAssets(ctx) {
  const allowed = new Set(ARTWORK);
  const directory = new URL("../assets/runtime/", import.meta.url);
  ctx.inject(["webServer"], (webCtx) => {
    const server = webCtx.get("webServer");
    webCtx.effect(() => server.register({
      kind: "prefix",
      path: PREFIX,
      handler: async (req, res) => {
        if (req.method !== "GET" && req.method !== "HEAD") {
          res.writeHead(405, { Allow: "GET, HEAD" }).end();
          return;
        }
        const pathname = new URL(req.url ?? "/", "http://localhost").pathname;
        const file = pathname.slice(PREFIX.length + 1);
        if (!pathname.startsWith(`${PREFIX}/`) || !allowed.has(file) || !NAME_RE.test(file)) {
          res.writeHead(404).end();
          return;
        }
        let bytes;
        try {
          bytes = await readFile(new URL(file, directory));
        } catch (error) {
          if (error.code !== "ENOENT") throw error;
          res.writeHead(404).end();
          return;
        }
        const ext = file.split(".").pop();
        const etag = `"${file}"`;
        const headers = {
          "Content-Type": TYPES[ext] ?? "application/octet-stream",
          "Cache-Control": "public, max-age=31536000, immutable",
          "X-Content-Type-Options": "nosniff",
          ETag: etag
        };
        if (req.headers["if-none-match"]?.split(",").some((value) => value.trim().replace(/^W\//, "") === etag)) {
          res.writeHead(304, headers).end();
          return;
        }
        res.writeHead(200, { ...headers, "Content-Length": bytes.length });
        res.end(req.method === "HEAD" ? void 0 : bytes);
      }
    }), "ui-skin-luotianyi: packaged artwork");
  });
}

export function apply(ctx) {
  installSkinAssets(ctx);
}
