import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  base: '/hasindu-nagolla.me/',
  integrations: [tailwind(), react()]
});