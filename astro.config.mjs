import { defineConfig } from "astro/config";
import astroImagePlugin from "astro-imagetools/plugin";

// https://astro.build/config
export default defineConfig({
  markdown: {
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    // syntaxHighlight: "prism",
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
    plugins: [astroImagePlugin],
  },
});
