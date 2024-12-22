import React from 'react';
import Header from '../../Components/Header/Header';

// Definindo o componente de layout
const Layout = ({ children }) => {
    return (
        <div>
            {/* Componente do cabeçalho */}
            <Header/>

            {/* Conteúdo dinâmico das páginas */}
            {children}
        </div>
    );
};

export default Layout;