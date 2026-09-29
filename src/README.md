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

## Formulario de contato (Zoho Mail via Netlify Function)

O GitHub Pages nao executa backend, entao o envio fica numa Netlify Function em
`api/netlify/functions/contact.mjs` (raiz do repositorio), que fala com o SMTP do
Zoho. Em producao o formulario chama `https://biosync-contact.netlify.app/api/contact`
(`CONTACT_ENDPOINT` em `components/biosync/ContactFormModal.jsx`). No `npm run dev`,
`/api/contact` roda **a mesma funcao**, pelo plugin em `vite.config.js`.

Variaveis (na Netlify, em *Site configuration → Environment variables*; no dev, em
`src/.env.local`):

```bash
SMTP_HOST=smtp.zoho.com            # conta em outra regiao: smtp.zoho.eu, smtp.zoho.in...
SMTP_PORT=465
SMTP_USER=contato@biosync.app.br
SMTP_PASS=senha_de_app_do_zoho     # com 2FA ativo, gere uma senha de app no Zoho
SMTP_FROM="BioSync <contato@biosync.app.br>"   # o Zoho so aceita o proprio SMTP_USER como remetente
SMTP_TO=contato@biosync.app.br
```

Para testar sem mandar e-mail de verdade, aponte o `.env.local` para um SMTP de
teste (Mailtrap, por exemplo).

A funcao so aceita requisicoes vindas de `https://biosync.app.br` (e `www`) e
devolve o cabecalho CORS inclusive nas respostas de erro. O campo escondido
`company` e um honeypot: se vier preenchido, a funcao responde sucesso e nao envia.

### Publicar a funcao (uma vez)

1. Na Netlify: *Add new project → Import an existing project → GitHub* e escolha
   este repositorio. O `netlify.toml` da raiz ja define a pasta `api/`.
2. Nome do projeto: `biosync-contact` (tem que bater com `CONTACT_ENDPOINT`).
3. Cadastre as variaveis `SMTP_*` acima e faca um novo deploy.

Depois disso, cada push em `main` que mexe em `api/` republica a funcao; o
GitHub Pages ignora essas mudancas.

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

## Build de producao

```bash
npm run build
npm run preview
```
