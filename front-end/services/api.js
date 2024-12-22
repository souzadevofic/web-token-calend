import axios from 'axios';

// Configuração base da API
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Substitua pelo URL correto da sua API
});

// Adiciona o token JWT aos cabeçalhos das requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtToken'); // Supõe que o token seja armazenado no localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Trata erros de autenticação (ex: token expirado ou inválido)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redireciona para a tela de login se o token não for válido ou expirou
      localStorage.removeItem('jwtToken'); // Remove o token inválido
      window.location.href = '/login'; // Substitua pelo caminho da sua tela de login
    }
    return Promise.reject(error);
  }
);

export default api;

