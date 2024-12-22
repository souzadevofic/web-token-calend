import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import do useNavigate
import './SectionLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../../../services/api.js'; // A instância axios que você já tem configurada

export function SectionLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate(); // Inicializa o hook de navegação

    const handleLogin = async (event) => {
        event.preventDefault();

        setError('');
        setSuccessMessage('');

        try {
            const response = await axios.post('http://localhost:3000/api/login', {
                email,
                password,
            });

            // Sucesso no login
            setSuccessMessage('Login bem-sucedido!');
            localStorage.setItem('token', response.data.token); // Salva o token no localStorage
            localStorage.setItem('userEmail', email); // Salva o e-mail no localStorage
            navigate('/home'); // Redireciona para a rota "/home"
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setError(error.response?.data?.message || 'Erro ao tentar fazer login. Verifique suas credenciais.');
        }
    };

    const handleNavigateToRegister = () => {
        navigate('/createAccount'); // Navega para a página de cadastro
    };

    return (
        <section className="container mt-1">
            <div className="row justify-content-center">
                <div className="container-caixa col-md-6">
                    <form onSubmit={handleLogin} className="container-forms-login p-4 rounded shadow">
                        <h2 className="text-center mb-4">Acesse sua conta</h2>
                        {error && <div className="alert alert-danger">{error}</div>}
                        {successMessage && <div className="alert alert-success">{successMessage}</div>}

                        {/* Input de Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Input de Senha */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Senha</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Checkbox */}
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Lembre-me</label>
                        </div>

                        {/* Botão Submit */}
                        <button type="submit" className="btn-forms btn-primary w-100">Entrar</button>

                        {/* Link de Cadastro */}
                        <div className="container-cad text-center mt-4">
                            <span>Ainda não tem cadastro?</span>
                            <button 
                                type="button" 
                                className="btn btn-link text-decoration-none p-0" 
                                onClick={handleNavigateToRegister}
                            >
                                Fazer cadastro
                            </button>
                        </div>

                        {/* Link de Recuperação de Senha */}
                        <div className="text-center mt-3">
                            <a 
                                href="/recuperar-senha" 
                                className="recup-senha text-decoration-none">Esqueci minha senha
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
