/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => { 
  return {
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html')
        },
      },
      lib: {
        formats: ['es', 'umd', 'cjs'],
        entry: path.resolve(__dirname, './js/lazy-images.js'),
        name: 'LazyImages'      }
    }
  };
});
