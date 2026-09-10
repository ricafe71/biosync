#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$ROOT/src"
DIST="$SRC/dist"
DOMAIN="biosync.app.br"
REPO_URL="$(git -C "$ROOT" remote get-url origin)"

cd "$SRC"
npm ci
npm run build

echo "$DOMAIN" > "$DIST/CNAME"
cp "$DIST/index.html" "$DIST/404.html"
touch "$DIST/.nojekyll"

TMP="$(mktemp -d)"
cleanup() { rm -rf "$TMP"; }
trap cleanup EXIT

cp -a "$DIST"/. "$TMP/"
cd "$TMP"
git init -q
git checkout -q -b gh-pages
git config user.name "$(git -C "$ROOT" config user.name || echo 'BioSync Deploy')"
git config user.email "$(git -C "$ROOT" config user.email || echo 'noreply@biosync.app.br')"
git add -A
git commit -qm "Deploy GitHub Pages"
git push -f "$REPO_URL" gh-pages
echo "Published $DOMAIN from gh-pages"
