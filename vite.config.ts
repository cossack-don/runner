import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    minify: false, // Отключает минификацию
    sourcemap: true, // Включает генерацию source maps
  },
})
