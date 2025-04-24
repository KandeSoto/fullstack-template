# 🛠️ Proyecto Base FullStack: Vacaciones (React + .NET)

Este repositorio es una plantilla lista para usar con:

-   🧩 **Frontend**: React + TypeScript + Vite + Reactstrap
-   🔒 **Autenticación**: JWT con expiración y redirección automática
-   🌐 **Internacionalización**: i18n con selector de idioma
-   📦 **Exportación**: Generación de reportes Excel desde backend
-   🔄 **Axios Interceptors**: Loading global + manejo de errores
-   🧪 **Estructura escalable**: Contextos, hooks, lógica separada por módulo

---

## 🚀 Primeros pasos

```bash
# 1. Clona el repositorio
npx degit <usuario>/<repositorio> nombre-proyecto
cd nombre-proyecto

# 2. Ejecuta el setup
chmod +x setup.sh
./setup.sh
```

Esto instalará dependencias del frontend (`vacation.client`) y restaurará los paquetes del backend (`vacation.server`). También se generan automáticamente:

-   `.env.development` con variable `VITE_API_URL=https://localhost:7149`
-   `.vscode/launch.json` con configuraciones para VS Code

---

## 🧱 Estructura de Carpetas

```
📦 root/
├── vacation.client/         # Frontend React
│   ├── src/
│   │   ├── @core/           # Componentes, Layouts y utilidades base
│   │   ├── context/         # React Contexts por dominio
│   │   ├── hooks/           # Hooks personalizados
│   │   ├── pages/           # Vistas organizadas por módulo
│   │   ├── modals/          # Formularios y CRUDs
│   │   ├── validations/     # Validaciones con Yup
│   │   └── types/           # ViewModels
│   ├── public/
│   ├── .env.development     # Variables de entorno (generado)
│   └── vite.config.ts
│
├── vacation.server/         # Backend ASP.NET Core
│   ├── Controllers/         # Endpoints
│   ├── Services/            # Lógica de negocio (por capa)
│   ├── Data/                # Modelos y contexto EF
│   ├── ViewModels/          # Modelos usados en frontend
│   ├── Extensions/          # Helpers / middlewares
│   └── Startup.cs / Program.cs
│
├── .vscode/launch.json      # Configuración VS Code (generado)
├── setup.sh                 # Script de arranque (frontend + backend)
└── README.md
```

---

## 🔑 Autenticación

-   Se usa JWT desde el backend con expiración
-   El token se guarda en `localStorage`
-   Interceptores lo adjuntan en cada petición automáticamente
-   Al expirar, redirige al login

---

## 🌐 Internacionalización (i18n)

-   Multi-idioma con `react-i18next`
-   Selector de idioma desde el menú de usuario
-   Idioma persistido en `localStorage`

---

## 📁 Exportación a Excel

-   Lógica para generar archivo Excel en backend con EPPlus
-   Hook en frontend (`useAreaApi`) para descargarlo como `Blob`

---

## 📦 Toasts y Feedback Global

-   `react-toastify` para mostrar notificaciones (éxito, error, etc.)
-   Se inicializa en `AppLayout`

---

## 🧪 Futuro soporte: Generación de módulos

Se planea agregar soporte con **Plop.js** para automatizar la creación de:

-   Hooks (`useXyzApi`)
-   Contexts (`XyzProvider`)
-   Formularios (`XyzForm`)
-   Modals (`XyzModal`)
-   Vistas (`XyzListView`)

---

## ✅ ¿Listo para comenzar?

Ya puedes correr el proyecto:

```bash
# Backend
cd vacation.server
code .
# Ejecutar desde Visual Studio

# Frontend
cd vacation.client
npm run dev
```
