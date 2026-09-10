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

## Hospedagem no GitHub Pages

O site e publicado a partir da branch `gh-pages` (build estatico do Vite).
Para republicar depois de alterar o landpage, na raiz do repo:

```bash
./scripts/deploy-github-pages.sh
```

URL do GitHub: `https://ricafe71.github.io/biosync/`
Dominio: `https://biosync.app.br`

No Registro.br, use o DNS do proprio Registro (`a.sec.dns.br` / `b.sec.dns.br`)
e configure a zona no **modo avancado**:

| Tipo  | Nome | Valor              |
|-------|------|--------------------|
| A     | (vazio) | 185.199.108.153 |
| A     | (vazio) | 185.199.109.153 |
| A     | (vazio) | 185.199.110.153 |
| A     | (vazio) | 185.199.111.153 |
| AAAA  | (vazio) | 2606:50c0:8000::153 |
| AAAA  | (vazio) | 2606:50c0:8001::153 |
| AAAA  | (vazio) | 2606:50c0:8002::153 |
| AAAA  | (vazio) | 2606:50c0:8003::153 |
| CNAME | www  | ricafe71.github.io |

Depois disso, o GitHub emite o certificado HTTPS sozinho (pode levar alguns minutos).

O GitHub Pages e estatico: o formulario de contato (`POST /api/contact`) nao
roda la. Para o envio de e-mail em producao, use a Vercel Function em
`api/contact.js` com as variaveis SMTP abaixo, ou outro backend.

```bash
SMTP_HOST=smtp.seu-provedor.com
SMTP_PORT=587
SMTP_USER=contato@biosync.app.br
SMTP_PASS=sua_senha_ou_app_password
SMTP_FROM="BioSync <contato@biosync.app.br>"
SMTP_TO=contato@biosync.app.br
```

## Build de producao

```bash
npm run build
npm run preview
```
