/// <reference types="vitest" />

import angular from '@analogjs/vite-plugin-angular';
import { defineConfig } from 'vite';
import { minify } from "rollup-plugin-esbuild";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: ['es2020'],
    minify: false
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    angular(),
    minify({
      minify: true,
      legalComments: "none",
      target: "es2022",
    }) as any,
  ],
  experimental: {
    enableNativePlugin: true,
  },
});
