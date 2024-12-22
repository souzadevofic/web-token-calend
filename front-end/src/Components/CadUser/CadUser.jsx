import './CadUser.css';
import { HeaderInicio } from '../HeaderInicio/HeaderInicio.jsx';
import { Footer } from '../Footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from '../../../services/api.js';

export function CadUser() {
  const [formData, setFormData] = useState({
    username: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/register', {
        username: formData.username,
        surname: formData.surname,
        email: formData.email,
        password: formData.password,
      });

      setMessage('Conta criada com sucesso!');
      setFormData({
        username: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      setError(error.response?.data?.message || 'Erro ao criar conta. Tente novamente.');
    }
  };

  return (
    <>
      <HeaderInicio />
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="container-forms col-md-8 col-lg-6 p-4 rounded shadow">
            <h2 className="text-center mb-4">Criar Conta</h2>
            {message && <p className="text-center text-success">{message}</p>}
            {error && <p className="text-center text-danger">{error}</p>}

            <form className="forms-conta" onSubmit={handleSubmit}>
              <h4 className="mb-3">Informações Pessoais</h4>

              <div className="mb-3">
                <label htmlFor="username" className="form-label">Nome:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  placeholder="Insira seu nome"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="surname" className="form-label">Sobrenome:</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  className="form-control"
                  placeholder="Insira seu sobrenome"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">* E-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Insira seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">* Senha:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Digite sua senha"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">* Confirme sua Senha:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Confirme sua senha"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dataConsent"
                  required
                />
                <label htmlFor="dataConsent" className="form-check-label">
                  Você aceita fornecer seus dados para acessar este sistema.
                </label>
              </div>

              <div className="text-center">
                <button type="submit" className="btn-forms btn-primary w-100">
                  Criar Conta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

