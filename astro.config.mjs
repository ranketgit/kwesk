// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
  plugins: [tailwindcss()],
},
site: "https://kwesk.ma",

  integrations: [sitemap(
    {
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }
  )],
});