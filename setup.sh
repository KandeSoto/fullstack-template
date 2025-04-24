#!/bin/bash

echo "🟢 Instalando dependencias del frontend..."
cd vacation.client
npm install
cd ..

echo "🔵 Restaurando backend .NET..."
dotnet restore vacation.sln

# Crear archivo .env.development si no existe
ENV_FILE="vacation.client/.env.development"
if [ ! -f "$ENV_FILE" ]; then
  echo "🌱 Creando archivo .env.development con VITE_API_URL..."
  echo "VITE_API_URL=https://localhost:7149" > "$ENV_FILE"
else
  echo "🔎 Archivo .env.development ya existe. No se modificó."
fi

# Crear configuración para VSCode
VSCODE_DIR="vacation.client/.vscode"
LAUNCH_FILE="$VSCODE_DIR/launch.json"

mkdir -p "$VSCODE_DIR"

cat > "$LAUNCH_FILE" <<EOL
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "edge",
      "request": "launch",
      "name": "localhost (Edge)",
      "url": "https://localhost:54641",
      "webRoot": "\${workspaceFolder}"
    },
    {
      "type": "chrome",
      "request": "launch",
      "name": "localhost (Chrome)",
      "url": "https://localhost:54641",
      "webRoot": "\${workspaceFolder}"
    }
  ]
}
EOL

echo "✅ Setup completo"
