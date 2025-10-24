import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Render needs a relative path & dist output
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // output folder for production build
  },
  server: {
    port: 3000, // local dev port
  },
})
