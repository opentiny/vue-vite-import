import vue from '@vitejs/plugin-vue'
import importPlugin from '../../dist/index.js'
import inspectPlugin from 'vite-plugin-inspect'
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  resolve: {
    extensions: ['.js', '.jsx', '.vue']
  },
  server: {
    port: 3001
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
    ),
    visualizer(),
    inspectPlugin({
      open: true
    })
  ]
})
