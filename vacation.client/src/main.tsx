import './i18n';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { LoadingProvider } from '@src/context/loading/LoadingProvider.tsx';
import { App } from '@src/App.tsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@src/assets/styles/base.css';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </BrowserRouter>
  </StrictMode>,
)
