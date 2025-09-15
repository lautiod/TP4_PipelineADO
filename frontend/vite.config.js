import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy para desarrollo: el front llama a /api y Vite redirige al back
      '/api': 'http://localhost:3001'
    }
  }
})
