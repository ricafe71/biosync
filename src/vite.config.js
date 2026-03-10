import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'node:path'
import nodemailer from 'nodemailer'

function contactSmtpPlugin(env) {
  return {
    name: 'biosync-contact-smtp',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        const chunks = []
        req.on('data', (chunk) => chunks.push(chunk))
        req.on('end', async () => {
          try {
            const rawBody = Buffer.concat(chunks).toString('utf-8') || '{}'
            const body = JSON.parse(rawBody)
            const { name, email, role, type, message } = body

            const host = env.SMTP_HOST
            const port = Number(env.SMTP_PORT || 587)
            const user = env.SMTP_USER
            const pass = env.SMTP_PASS
            const to = env.SMTP_TO || 'contato@biosync.app.br'
            const from = env.SMTP_FROM || user

            if (!host || !user || !pass || !from) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(
                JSON.stringify({
                  error: 'SMTP não configurado. Defina SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS e SMTP_FROM no .env.local',
                })
              )
              return
            }

            const transporter = nodemailer.createTransport({
              host,
              port,
              secure: port === 465,
              auth: { user, pass },
            })

            await transporter.sendMail({
              from,
              to,
              replyTo: email,
              subject: `[BioSync] ${type || 'Contato'} - ${name || 'Sem nome'}`,
              text:
                `Nome: ${name || '-'}\n` +
                `E-mail: ${email || '-'}\n` +
                `Cargo: ${role || '-'}\n` +
                `Tipo: ${type || '-'}\n\n` +
                `Mensagem:\n${message || '-'}`,
            })

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true }))
          } catch (error) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: error?.message || 'Erro ao enviar e-mail' }))
          }
        })
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
      contactSmtpPlugin(env),
    ],
  }
});
