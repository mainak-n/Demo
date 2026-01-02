import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Demo/', 
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        // List every HTML file here:
        main: resolve(__dirname, 'index.html'),
        productivity: resolve(__dirname, 'asin-productivity.html'),
        availability: resolve(__dirname, 'availability-genai.html'),
        sigma: resolve(__dirname, 'sigma.html'),
      },
    },
  },
})