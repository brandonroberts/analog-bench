/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({ vite: { experimental: { supportAnalogFormat: true } } }),
    Inspect({
      build: true,
      outputDir: '.vite-inspect',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
