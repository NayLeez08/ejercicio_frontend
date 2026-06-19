import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Esto le dice a Vite que escuche todas las conexiones (Docker)
    port: 5173  // Asegura que use el puerto 5173
  }
})