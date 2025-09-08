import importPlugin from '../../dist/index.js'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    extensions: ['.js', '.jsx', '.vue']
  },
  server: {
    port: 3000
  },
  plugins: [
    vue(),
    importPlugin(
      [
        {
          libraryName: '@opentiny/vue',
          split: '-'
        },
        {
          libraryName: '@opentiny/vue-icon',
          customName: (name) => {
            return name === 'default' ? '@opentiny/vue-icon' : `@opentiny/vue-icon/lib/${name.replace(/^icon-/, '')}.js`
          }
        }
      ],
      'pc'
    )
  ]
})
