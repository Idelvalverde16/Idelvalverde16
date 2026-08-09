import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: if deploying to GitHub Pages at https://<username>.github.io/<repo-name>/
// set base to '/<repo-name>/'. If deploying to Vercel/Netlify, or to
// https://<username>.github.io/ (a repo literally named <username>.github.io),
// leave base as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
