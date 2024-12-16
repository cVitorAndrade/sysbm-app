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
import ListReaders from './pages/ListReaders';
import BookRegister from './pages/BookRegister';
import ListBooks from './pages/ListBook';
import ListBookshelves from './pages/ListBookShelves';

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
        <Route
          path="/"
          element={isLoggedIn() ? <Home /> : <Navigate to="/login" />}
        />

        {/* Rota protegida: Livros */}
        <Route
          path="/books"
          element={isLoggedIn() ? <Books /> : <Navigate to="/login" />}
        />

        <Route
          path="/book/register"
          element={isLoggedIn() ? <BookRegister /> : <Navigate to="/login" />}
        />

        <Route
          path="/book/list"
          element={isLoggedIn() ? <ListBooks /> : <Navigate to="/login" />}
        />

        {/* Rota protegida: Leitores */}
        <Route
          path="/readers"
          element={isLoggedIn() ? <Readers /> : <Navigate to="/login" />}
        />

        <Route path="/ReadersRegister/register" element={<ReaderRegister />} />

        <Route
          path="/bookshelves"
          element={isLoggedIn() ? <BookShelves /> : <Navigate to="/login" />}
        />

        <Route
          path="/bookshelves/list"
          element={
            isLoggedIn() ? <ListBookshelves /> : <Navigate to="/login" />
          }
        />

        <Route path="/ListReaders" element={<ListReaders />} />
      </Routes>
    </Router>
  );
}
