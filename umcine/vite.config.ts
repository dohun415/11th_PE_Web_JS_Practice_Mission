import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // tanstackRouter는 src/routes 파일을 읽어 routeTree.gen.ts를 자동 생성한다.
  // react 플러그인보다 먼저 등록해야 한다.
  plugins: [tanstackRouter({ target: 'react', autoCodeSplitting: true }), react()],
})
