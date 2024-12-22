import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hamburguer from '../../../public/hamburguer.png';
import axios from '../../../services/api'; // Importando o axios

export function Header() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate(); // Hook para redirecionamento

    const toggleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas);
    };

    const handleLogout = () => {
        // Removendo dados do localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');

        // Redirecionando o usuário para a página de login
        navigate('/login');
    };

    useEffect(() => {
        const fetchUserName = async () => {
            const token = localStorage.getItem('token'); // Obter o token do localStorage
            const email = localStorage.getItem('userEmail'); // Obter o e-mail do localStorage

            if (!token || !email) {
                setError('Usuário não autenticado.');
                setLoading(false);
                return;
            }

            try {
                console.log('Iniciando requisição para obter o nome do usuário...');
                console.log('Token:', token);
                console.log('Email:', email);

                const response = await axios.get(`http://localhost:3000/api/users/email/${email}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const { username } = response.data; // Supondo que o nome do usuário está no campo "username"
                setUserName(username);
                setLoading(false);
            } catch (err) {
                console.error('Erro ao buscar nome do usuário:', err);
                setError('Não foi possível carregar o nome do usuário.');
                setLoading(false);
            }
        };

        fetchUserName();
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <header>
                <div className='cabecalho'>
                    <Logo />
                </div>

                <div className='scroll-usuario'>
                    <div className="btn-hamburguer " type="button" onClick={toggleOffcanvas}>
                        <span className='hamburguer'>
                            <img className='img-hamburguer' src={Hamburguer} alt="hamburguer" />
                        </span>
                    </div>

                    {showOffcanvas && (
                        <div className="offcanvas offcanvas-end show" tabIndex="-1" id="offcanvasRight">
                            <div className="offcanvas-header">
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={toggleOffcanvas}
                                ></button>
                                <h5 className="offcanvas-title">Olá, {userName}</h5>
                                <a href="#">Editar Perfil</a>
                            </div>
                            <div className="offcanvas-body">
                                <a href="#">Eventos</a>
                                <a href="#">Meus Eventos</a>
                                <a href="#">Convites</a>
                                <div className='container-close'>
                                    {/* Chamando a função handleLogout ao clicar em "Sair" */}
                                    <a href="#" onClick={handleLogout}>Sair</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}

export default Header;

