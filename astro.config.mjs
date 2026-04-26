import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://www.dasat.es',
  integrations: [react()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
