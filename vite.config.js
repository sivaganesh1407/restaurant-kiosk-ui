import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Local: http://localhost:3000 — easy to remember, avoids clashing with Vite’s 5173.
    port: 3000,
    strictPort: false,
    // Expose on LAN so you can open the app from a phone/tablet (real touch testing).
    host: true,
    open: true,
  },
  preview: {
    port: 3000,
    host: true,
    strictPort: false,
  },
});
