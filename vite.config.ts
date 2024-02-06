import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import eslintPlugin from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: []
  },
  plugins: [
    uni(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue']
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        'uni-app'
      ],
      eslintrc: { enabled: true }
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue']
    }),
    UnoCSS()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
