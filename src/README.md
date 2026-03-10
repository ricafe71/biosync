# BioSync Landing Page

Projeto frontend em React + Vite + Tailwind.

## Requisitos

- Node.js 20+
- npm 10+

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse: `http://localhost:5173`

## Teste de envio de e-mail (SMTP no dev)

Crie um arquivo `.env.local` na raiz com:

```bash
SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=587
SMTP_USER=SEU_USER
SMTP_PASS=SUA_SENHA
SMTP_FROM="BioSync <no-reply@biosync.local>"
SMTP_TO=contato@biosync.app.br
```

Depois rode `npm run dev` e envie pelo formulario.

## Build de producao

```bash
npm run build
npm run preview
```
