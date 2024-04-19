import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: '/src/api',
      components: '/src/components',
      pages: '/src/pages',
      layout: '/src/layout',
      utils: '/src/utils',
      assets: '/src/assets',
      styles: '/src/assets/styles',
      images: '/src/assets/images',
    }
  }
})
