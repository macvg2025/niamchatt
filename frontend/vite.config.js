import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext'  // This allows top-level await
  },
  server: {
    port: 5173,
    proxy: {
      '/socket.io': {
        target: 'https://niamchat-backend.onrender.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
})
