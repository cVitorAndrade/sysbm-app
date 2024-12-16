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
import Readers from './pages/Readers/reader';
import ReaderRegister from './pages/ReadersRegister/register';
import BookShelves from './pages/Bookshelves';



export default function App() {
  const isLoggedIn = () => {
    return localStorage.getItem('userToken') !== null;
  };

  return (
    <Router>
      <Routes>
        {/* Rota de login */}
        <Route path="/login" element={<Login />} />

        {/* Rota protegida: Home */}
        <Route path="/" element={isLoggedIn() ? <Home /> : <Navigate to="/login" />} />

        {/* Rota protegida: Livros */}
        <Route path="/books" element={isLoggedIn() ? <Books /> : <Navigate to="/login" />} />

        {/* Rota protegida: Leitores */}
        <Route path="/readers" element={isLoggedIn() ? <Readers /> : <Navigate to="/login" />} />

        <Route path="/ReadersRegister/register" element={<ReaderRegister />} />

        <Route
          path="/bookshelves"
          element={isLoggedIn() ? <BookShelves /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}
