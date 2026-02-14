import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // 解决一些 Web3 库依赖全局 global 对象的问题
    'global': 'globalThis',
  },
  resolve: {
    alias: {
      // 强力跳过那个报错的实验性路径
      'viem/experimental': 'viem',
    },
  },
  build: {
    rollupOptions: {
      external: [
        // 如果还有特定路径报错，可以在这里将其排除
      ],
    },
  },
})
