import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  test:{
    globals:true,
    environment: 'jsdom'
  },
  server: {
    host: '0.0.0.0', 
    port: 8080, 
  },
  plugins: [react()],
})
