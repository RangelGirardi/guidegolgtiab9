import { cp, mkdir, rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist/client", { recursive: true });
await mkdir("dist/server", { recursive: true });
await cp("index.html", "dist/client/index.html");
await cp("support.js", "dist/client/support.js");
await cp("uploads", "dist/client/uploads", { recursive: true });
await cp("worker/index.js", "dist/server/index.js");

console.log("Manual pronto para publicação.");
