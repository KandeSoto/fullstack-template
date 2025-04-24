🏝️ Vacation Template

Plantilla base para proyectos fullstack con:

🔵 Backend: ASP.NET Core

⚛️ Frontend: React + TypeScript + Vite

🌐 Multilenguaje (i18n: Español/Inglés)

📤 Exportación de datos a Excel

🧩 Arquitectura escalable (modular por feature)

🚀 Primeros pasos

1. Clonar el repositorio

git clone https://turepo.git
cd nombre-del-proyecto

2. Ejecutar script de instalación automática (Linux/Mac/Git Bash)

chmod +x setup.sh
./setup.sh

Este script hará:

🧶 npm install en vacation.client

🛠️ dotnet restore para los proyectos .NET

📁 Estructura del proyecto

/vacation.client # Frontend React con Vite y TypeScript
/vacation.Server # ASP.NET API (WebHost)
/vacation.Logic # Capa de lógica de negocio (servicios, helpers)
/vacation.Data # Capa de acceso a datos (EF Core, contextos, modelos)
/vacation.sln # Solución de Visual Studio

🌍 Soporte Multilenguaje

React-i18next configurado con español e inglés.

Selector de idioma con banderas.

Idioma persistente con localStorage.

📁 Exportación a Excel

Desde frontend: botón que descarga el archivo .xlsx

Desde backend: generación con EPPlus, usando atributos [ExportIgnore]

🔧 Scripts disponibles

Frontend

cd vacation.client
npm run dev # Desarrollo
npm run build # Producción

Backend

dotnet build vacation.sln

🧪 Para iniciar nuevo proyecto desde esta plantilla

npx degit tu_usuario/tu_plantilla nombre-nuevo-proyecto
cd nombre-nuevo-proyecto
chmod +x setup.sh
./setup.sh

¡Listo para desarrollar!
