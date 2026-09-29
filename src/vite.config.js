import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'node:path'
import { handleContact } from '../api/netlify/functions/contact.mjs'

// No `npm run dev`, /api/contact roda a mesma função publicada na Netlify
// (api/netlify/functions/contact.mjs), com as variáveis SMTP do .env.local.
function contactApiPlugin(env) {
  return {
    name: 'biosync-contact-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        const chunks = []
        for await (const chunk of req) chunks.push(chunk)

        const origin = `http://${req.headers.host}`
        const request = new Request(new URL(req.originalUrl || req.url, origin), {
          method: req.method,
          headers: req.headers,
          body: ['GET', 'HEAD'].includes(req.method) ? undefined : Buffer.concat(chunks),
        })
        const response = await handleContact(request, { ...env, CONTACT_ALLOWED_ORIGINS: origin })

        res.statusCode = response.status
        response.headers.forEach((value, key) => res.setHeader(key, value))
        res.end(Buffer.from(await response.arrayBuffer()))
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    logLevel: 'error', // Suppress warnings, only show errors
    resolve: {
      alias: {
        '@': resolve(__dirname, '.'),
      },
    },
    plugins: [
      react(),
      contactApiPlugin(env),
    ],
  }
});
