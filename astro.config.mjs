import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kevinhubert.com',
  integrations: [sitemap()],
});
