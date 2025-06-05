// vite.config.mjs
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

// Hack para __dirname en ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig(({ mode }) => {
  // Esto es válido en Node.js, pero si falla aquí, asegúrate de ejecutarlo con `vite` y no con otro runner.
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || '/',
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@helpers': path.resolve(__dirname, './src/helpers'),
        '@data': path.resolve(__dirname, './src/data'),
        '@redux': path.resolve(__dirname, './src/redux'),
        '@styles': path.resolve(__dirname, './src/styles'),
      },
    },
  }
})
