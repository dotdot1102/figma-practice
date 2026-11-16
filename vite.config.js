import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 배포 경로: https://dotdot1102.github.io/figma-practice/
  base: '/figma-practice/',
  plugins: [react()],
})
