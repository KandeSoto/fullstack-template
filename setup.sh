#!/bin/bash
echo "🟢 Instalando frontend"
cd vacation.client
npm install
cd ..

echo "🔵 Restaurando backend .NET"
dotnet restore vacation.sln

echo "✅ Todo listo!"