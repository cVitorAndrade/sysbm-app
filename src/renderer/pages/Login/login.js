import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../../../assets/logo.png';
import useAuth from '../../hooks/useAuth';
import { useAuthStore } from '../store/authStore';

function Login() {
  const onAuth = useAuth();
  const { onLogin } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await onAuth({ email, password });
      onLogin();
      navigate('/');
    } catch (error) {
      console.log('Login: ', error);
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
