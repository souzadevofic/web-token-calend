import React from 'react';
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }) {
    const token = localStorage.getItem('token');

    if (!token) {
        // Redireciona para a página de login se o token não existir
        return <Navigate to="/" />;
    }

    // Renderiza os componentes filhos se o token existir
    return children;
}


// ver depois
