import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Fixed root path and output directory
export default defineConfig({
  plugins: [react()],
  root: '.',                // tell Vite that index.html is at root
  build: {
    outDir: 'dist',         // folder where build files will go
  },
})
