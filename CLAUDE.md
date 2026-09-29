# BioSync — Landing Page

Landing estática em React + Vite + Tailwind, publicada em `biosync.app.br`.
O código fica em `src/`. Instruções de desenvolvimento em [src/README.md](src/README.md).

## Identidade visual

**A fonte da verdade é o produto, não esta landing.** Os tokens canônicos vivem em
`frontend/src/app/theme.css` do repositório `BioSync_clean_reanchored`. Ao mexer em
cor aqui, consulte lá antes de inventar valor.

A landing usa apenas o **tema claro** do produto (o app é dark-first; a landing não).
Tipografia: IBM Plex Sans / IBM Plex Mono, igual ao produto. O wordmark em
`src/assets/biosync-logo-transparent.png` é byte-a-byte o mesmo arquivo do produto —
não regere nem reexporte.

### Forma: a mesma do produto

Cor certa não basta — a identidade do produto está tanto na forma quanto na paleta.
Convenções tiradas de `frontend/src` do produto (onde `rounded-full` aparece mais de mil vezes):

| elemento | raio |
|---|---|
| botões, chips, badges, seletor de idioma | `rounded-full` |
| cards | `rounded-[24px]` |
| painéis grandes, modal, cabeçalho | `rounded-[28px]` |
| caixas de ícone, painéis internos | `rounded-2xl` |
| campos de formulário | `rounded-xl` |

O cabeçalho é um card flutuante (`rounded-[28px]`, borda, sombra, `backdrop-blur`), não
uma barra de ponta a ponta. O `body` leva a atmosfera do produto — os gradientes radiais
`--ambient-teal`, `--ambient-cyan` e `--ambient-peach` do tema claro — então não pinte fundo
sólido no wrapper da página.

Uma versão anterior da landing tinha estilo "instrumento de laboratório", com cantos
retos e bordas duras. Não era a identidade BioSync; não volte a ela.

### Contraste é requisito, não preferência

O produto impõe WCAG AA por teste automatizado (`frontend/tests/theme-contrast-audit.ts`):
mínimo **4,5:1**, ou **3:1** para texto ≥24px ou ≥18,7px em negrito. A landing não tem
esse teste, mas segue a mesma regra. Já houve regressão aqui: a landing pintava o teal
do tema **escuro** (`#2bb5aa`) sobre fundo claro, deixando os botões primários em 2,51:1.

### O laranja é dividido por função

Errar isso é fácil, porque os três são "o laranja da marca":

| token | valor | usar em |
|---|---|---|
| `ember` | `#e4572e` | traços, barras, marcadores — e texto **sobre o navy do hero** (4,66:1) |
| `ember-solid` | `#b34b2b` | texto de destaque sobre fundo claro (kickers, labels) |
| `ember-ink` | `#a8442a` | texto sobre `ember-soft` |

`ember` como texto sobre fundo claro reprova (3,1–3,7:1). `ember-solid` sobre o navy
do hero também reprova (3,24:1) — por isso o hero é a exceção que mantém `ember`.

`ember-ink` **só existe aqui**; o produto tem token `-ink` para toda família semântica
menos a do laranja, porque lá o laranja não vira badge. Se ele for adotado no produto,
alinhe o valor.

### Teal sobre o navy do hero

O `primary` (`#18716c`) é do tema claro e some sobre o navy (2,28:1). Texto teal no hero
usa `primary-ink-dark` (`#8fd4d0`, o `primary-ink` do tema escuro do produto, 7,86:1).

### Como auditar depois de mexer em cor

Percorra cada nó de texto comparando com o fundo computado. Atenção: fundo em gradiente
não é resolvível por `getComputedStyle` — o hero precisa ser medido amostrando os pixels
já renderizados, senão aparecem cinco falsos-positivos de texto branco.
Considere também a transparência da cor do texto (`text-x/30`): tratar `rgba` como cor
sólida aprova numerais decorativos que na tela ficam em 1,8:1.

## Materiais institucionais (`src/public/media/`)

PDF e vídeo servidos do próprio domínio, sem player de terceiros. Origem dos arquivos:
`docs/presentation/` no repositório `BioSync_clean_reanchored`.

Ao substituir o vídeo:

- **Remuxe com `-movflags +faststart`.** O arquivo original vem com o átomo `moov`
  depois do `mdat`, o que obriga o navegador a buscar o índice no fim de 18 MB antes
  de começar. Use `-c copy` — não recodifique.
- Legendas: converta o `.srt` para WebVTT (o `<track>` não aceita SRT).
- Gere o poster a partir do thumbnail, em JPG, para não pesar no carregamento inicial.

Os dois materiais são **em inglês**. A cópia em PT diz isso explicitamente
(`media.video.language`, `media.pdf.meta` em `src/lib/i18n.jsx`) — mantenha.

### Player de vídeo (`src/components/biosync/MediaLibrary.jsx`)

O `<video>` fica montado desde o início com `preload="none"`, e o botão de play é uma
sobreposição. **`play()` precisa ser chamado de forma síncrona dentro do `onClick`** —
Safari e iOS bloqueiam áudio em chamada adiada para fora do gesto do usuário. Não
mova para dentro de `requestAnimationFrame`, `setTimeout` ou efeito.

## Idiomas

PT e EN, tudo em `src/lib/i18n.jsx`. Não há string de interface fora desse arquivo.

## Deploy

**Automático: todo push em `main` publica o site.** O workflow
`.github/workflows/deploy.yml` compila e faz **force-push** do `dist/` para a branch
`gh-pages`, que é a origem do GitHub Pages (`build_type: legacy`). Pushes que só
alteram arquivos `.md` não disparam deploy.

Isso significa que `main` é produção — não há etapa de revisão entre o push e o site
no ar. Para testar antes, use uma branch e rode `npm run dev` ou `npx vite preview`.

Deploy manual, para republicar sem commit novo ou se o Actions estiver fora:

```bash
bash scripts/deploy-github-pages.sh        # a partir da máquina local
gh workflow run deploy.yml                 # ou redisparando o workflow
```

O build do GitHub Pages leva alguns minutos depois do push para `gh-pages` por causa do
vídeo de 18 MB — até terminar, os arquivos novos respondem 404 servindo o fallback SPA.
Acompanhe com:

```bash
gh run list --workflow=deploy.yml --limit 3
gh api repos/ricafe71/biosync/pages/builds --jq '.[0].status'
```

## Pendências conhecidas

- **Peso do histórico.** O repositório carrega ~26 MB de binários versionados em
  `src/public/media/`. Se esses materiais passarem a ser atualizados com frequência,
  mova para CDN ou Git LFS antes que o histórico cresça.
- **Material institucional fora da identidade.** O PDF e o vídeo usam paleta e fonte
  próprias (Liberation Sans, `#17294a`, `#ef7049`, `#168f88`) — mesma ideia de marca,
  redigitada por fora. Alinhá-los exige regerar o PDF a partir do HTML de origem, no
  outro repositório.
- **Relato de vídeo sem som, não reproduzido.** Um relato de ausência de áudio no
  Firefox (2026-09-29) nunca foi reproduzido: o arquivo tem áudio uniforme nos dois
  canais, e o site toca com som em Chromium e Firefox nos testes. Antes de mexer no
  player por causa disso, confirme que o problema existe.
