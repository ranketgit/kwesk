// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  trailingSlash: 'never',
  vite: {
  plugins: [tailwindcss()],
},
site: "https://kwesk.ma",
redirects: {
    '/reunion/tables': '/reunion/table-de-reunion',
    '/reunion/tables/': '/reunion/table-de-reunion',
    '/reunion/rangement': '/reunion/rangement/armoire-basse',
    '/reunion/rangement/': '/reunion/rangement/armoire-basse',
    '/amenagement-de-bureau-professionnel-a-temara/': '/amenagement-de-bureau-professionnel-a-temara',
  },

  integrations: [sitemap(
    {
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }
  )],
});