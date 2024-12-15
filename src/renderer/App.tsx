import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';

import Books from './pages/Books';
import Home from './pages/Home';
import Login from './pages/Login/login';

export default function App() {
  const isLoggedIn = () => {
    return localStorage.getItem('userToken') !== null;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={isLoggedIn() ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/books"
          element={isLoggedIn() ? <Books /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}
