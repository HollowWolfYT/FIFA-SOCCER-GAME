import { defineConfig } from 'vite';

export default defineConfig({
  base: '/FIFA-SOCCER-GAME/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  },
  server: {
    port: 3000,
    open: true
  }
});
