import { defineConfig, transformWithOxc } from 'vite'
import react from '@vitejs/plugin-react'

function jsxInJsPlugin() {
  return {
    name: 'transform-jsx-in-js',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.js') || id.includes('node_modules')) {
        return null
      }

      return transformWithOxc(code, id, { lang: 'jsx' })
    },
  }
}

export default defineConfig({
  base: '/urbanscrap/',
  plugins: [jsxInJsPlugin(), react({ include: /\.(js|jsx)$/ })],
})
