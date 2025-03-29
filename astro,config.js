import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  
  integrations: [
    tailwind({
    // Ejemplo: Proporciona una ruta personalizada a un archivo de configuración de Tailwind
    configFile:'./custom-config.mjs',
    }),
  ],
});