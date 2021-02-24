import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
import alias from '@rollup/plugin-alias';
import legacyPlugin from '@vitejs/plugin-legacy'

export default defineConfig({
  base: '',
  plugins: [
    vue(),
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, './src/') }
      ]
    }),
    legacyPlugin({
      targets: [
        'ie >= 11'
      ]
    })
  ],
  build:{
    outDir:'www'
  }

})
