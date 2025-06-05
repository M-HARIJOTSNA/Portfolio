import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',   // all lowercase, matching your repo name
  plugins: [react()],
});
