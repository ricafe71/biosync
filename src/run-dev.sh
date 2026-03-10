#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-5173}"
HOST="${HOST:-0.0.0.0}"

if [[ ! -d "node_modules" ]]; then
  echo "Instalando dependencias..."
  npm install
fi

LOCAL_URL="http://localhost:${PORT}"
echo "----------------------------------------"
echo "BioSync local dev server"
echo "Abra no navegador: ${LOCAL_URL}"
echo "----------------------------------------"

exec npm run dev -- --host "${HOST}" --port "${PORT}"
