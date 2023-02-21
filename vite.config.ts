import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
const {resolve} = require("path");

// https://vitejs.dev/config/
module.exports = defineConfig({
  server: {
    host: true,
    port: 7777,
  },
  plugins: [
    vue()
  ],
  assetsInclude: ["**/*.tgs"],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      }
    ],
    extensions: ['.js', '.ts', '.vue']
  },
  optimizeDeps: {
    extensions: ['.wasm']
  },
  build: {
    outDir: 'build',
    assetsDir: 'static'
  },
})
