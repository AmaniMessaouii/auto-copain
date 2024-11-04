const legacy = require('@vitejs/plugin-legacy');
const react = require('@vitejs/plugin-react');
const { defineConfig } = require('vite');

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [
    react(),
    legacy()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js', // Ensure this file is a JavaScript file, not TypeScript
  }
});
