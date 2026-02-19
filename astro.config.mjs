// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  vite: {
  plugins: [tailwindcss()],
},
site: "https://kwesk.ma",
redirects: {
    // Tables Redirects
    '/reunion/tables': '/reunion/table-de-reunion',
    '/reunion/tables/': '/reunion/table-de-reunion',

    // Rangement Redirects
    '/reunion/rangement': '/reunion/rangement/armoire-basse',
    '/reunion/rangement/': '/reunion/rangement/armoire-basse',
  },

  integrations: [sitemap(
    {
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }
  )],
});