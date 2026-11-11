// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://raulcabreraabogado.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
  // Manrope autoalojada (nunca Google Fonts). Astro genera un respaldo con las
  // métricas ajustadas para que el texto no salte cuando llega la fuente.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Manrope',
      cssVariable: '--font-manrope',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            weight: '200 800',
            style: 'normal',
            src: ['./node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2'],
          },
        ],
      },
    },
  ],
});
