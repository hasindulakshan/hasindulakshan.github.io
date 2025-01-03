import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://hasindu-nagolla.me',
  integrations: [
    tailwind(),
    react(),
    sitemap(),
    robotsTxt()
  ]
});
