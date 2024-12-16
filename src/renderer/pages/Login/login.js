import React, { useState } from 'react';
import './login.css';
import logo from '../../../../assets/logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simula autenticação
    if (email === 'teste@email.com' && password === '123456') {
      localStorage.setItem('userToken', 'token_de_exemplo');
      window.location.href = '/'; // Redireciona para a home
    } else {
      alert('Credenciais inválidas!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="image-section">
          <img src={logo} alt="SysBM Logo" className="login-logo" />
        </div>
        <h1>SysBM</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplo@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
            />
          </div>

          <div className="button-section">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
