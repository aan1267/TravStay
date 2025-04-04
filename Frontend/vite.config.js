import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  test:{
    globals:true,
    environment: 'jsdom'
  },
  plugins: [react()],
  server: {
    port: 8080, 
    host: '0.0.0.0',
    strictPort: true,
  },
})
