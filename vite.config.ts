import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'   // or whatever plugin you're using

export default defineConfig({
  plugins: [react()],
  base: '/docx-link-magic/',     // ← ADD THIS LINE
})
