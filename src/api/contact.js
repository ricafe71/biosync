import nodemailer from 'nodemailer'

function badRequest(res, message) {
  res.status(400).json({ error: message })
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'POST, OPTIONS')
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, role, type, message } = req.body ?? {}

  if (!name?.trim()) {
    return badRequest(res, 'Nome é obrigatório.')
  }

  if (!email?.trim()) {
    return badRequest(res, 'E-mail é obrigatório.')
  }

  if (!message?.trim()) {
    return badRequest(res, 'Mensagem é obrigatória.')
  }

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const to = process.env.SMTP_TO || 'contato@biosync.app.br'
  const from = process.env.SMTP_FROM || user

  if (!host || !user || !pass || !from) {
    return res.status(500).json({
      error: 'SMTP não configurado. Defina SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS e SMTP_FROM.',
    })
  }

  try {
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
      subject: `[BioSync] ${type || 'Contato'} - ${name}`,
      text:
        `Nome: ${name}\n` +
        `E-mail: ${email}\n` +
        `Cargo: ${role || '-'}\n` +
        `Tipo: ${type || '-'}\n\n` +
        `Mensagem:\n${message}`,
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    return res.status(500).json({
      error: error?.message || 'Erro ao enviar e-mail.',
    })
  }
}
