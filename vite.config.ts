/// <reference types="vitest" />

import angular from '@analogjs/vite-plugin-angular';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: ['es2020']
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    angular()
  ]
});
