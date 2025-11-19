import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        gallery: './gallery.html',
      },
    },
  },
  publicDir: 'public',
});

