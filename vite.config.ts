import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'   // ← Changed to the one you have installed

export default defineConfig({
  plugins: [react()],
  base: '/docx-link-magic/',
})
