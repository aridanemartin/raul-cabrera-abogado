import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    environmentOptions: {
      // Las pruebas comprueban que se inyecta gtag.js, no lo descargan.
      happyDOM: { settings: { handleDisabledFileLoadingAsSuccess: true } },
    },
  },
});
