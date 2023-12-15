// vite.config.js
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue()
  ],
  resolve: {
    alias: {
      "@comps": path.resolve(__dirname, "./src/components"),
    },
  },
})