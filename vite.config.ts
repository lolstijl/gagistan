import { defineConfig } from 'vite';

export default defineConfig({
  // This tells Vite that the site is hosted in a sub-folder, not the root
  base: '/gagistan/',
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src', // Keeps the structure relative to your src folder
        entryFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
});