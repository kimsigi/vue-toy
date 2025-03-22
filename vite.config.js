import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      dirs: ['src/components', 'src/layout', 'src/views', 'src/router'], // 자동 import 대상 디렉토리
      extensions: ['vue', 'js'],      // 대상 파일 확장자
      deep: true,               // 하위 폴더까지 탐색할지 여부
      //dts: true,                // 자동 타입 생성 (원하면 true)
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
