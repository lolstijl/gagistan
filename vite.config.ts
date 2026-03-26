import { defineConfig } from 'vite';

export default defineConfig({
  // This tells Vite that the site is hosted in a sub-folder, not the root
  base: '/gagistan/',
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // This creates a separate chunk for every single node_module
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
});