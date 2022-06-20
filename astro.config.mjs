import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  markdown: {
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    // syntaxHighlight: "prism",
  },
  vite: {
    server: {
      host: "0.0.0.0",
    },
    ssr: {
      external: ["svgo"],
    },
    // plugins: [astroImagePlugin],
  },
});
