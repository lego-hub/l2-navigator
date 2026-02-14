import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'global': 'globalThis',
  },
  resolve: {
    alias: {
      // 这里的逻辑是：如果有人找那个不存在的路径，直接给它返回 viem 的根路径
      // 这样 Vite 就不会因为找不到文件而停止构建了
      'viem/experimental/erc7821': 'viem',
      'viem/erc7821': 'viem'
    }
  },
  build: {
    rollupOptions: {
      // 强行把这个麻烦制造者排除在依赖检查之外
      external: [
        'viem/experimental/erc7821',
        'viem/erc7821'
      ]
    }
  }
})
