// src/pages/NotFound.tsx
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="text-center p-5">
      <h1 className="display-3">404</h1>
      <p className="lead">Página no encontrada</p>
      <Link to="/dashboard" className="btn btn-primary mt-3">
        Ir al Dashboard
      </Link>
    </div>
  );
};
