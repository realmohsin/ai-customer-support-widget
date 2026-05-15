import { defineConfig, type Plugin } from "vite";
import { resolve } from "path";
import { readFileSync, writeFileSync } from "node:fs";

// The library build (below) only emits widget.iife.js, so index.html is not
// processed by Vite on build. This plugin copies index.html into dist and
// rewrites the dev-only `<script src="/embed.ts">` tag to load the built
// `/widget.iife.js` bundle instead, so the same source file works for both
// `vite dev` (TypeScript source) and `vite preview` / production (built bundle).
function emitDemoHtml(): Plugin {
  return {
    name: "emit-demo-html",
    apply: "build",
    closeBundle() {
      const html = readFileSync(
        resolve(__dirname, "index.html"),
        "utf-8",
      ).replace(
        /<script[^>]*src="\/embed\.ts"([^>]*)><\/script>/,
        '<script src="/widget.iife.js"$1></script>',
      );

      writeFileSync(resolve(__dirname, "dist", "index.html"), html);
    },
  };
}

export default defineConfig({
  plugins: [emitDemoHtml()],
  build: {
    lib: {
      entry: resolve(__dirname, "embed.ts"),
      name: "SonarWidget",
      fileName: "widget",
      formats: ["iife"],
    },
    rollupOptions: {
      output: {
        extend: true,
      }
    }
  },
  server: {
    port: 3002,
    open: "/"
  },
});
