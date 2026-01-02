import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Demo/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // ADD YOUR OTHER PAGES HERE:
        page2: resolve(__dirname, 'page2.html'), 
        page3: resolve(__dirname, 'page3.html'),
      },
    },
  },
})