import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  
  integrations: [tailwind(), astroI18next()
  ],
});