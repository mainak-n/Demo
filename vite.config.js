import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Demo/',       // <--- Your Repo Name
  build: {
    outDir: 'docs',     // <--- Output to "docs" instead of "dist"
  }
})