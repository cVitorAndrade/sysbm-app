import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';

// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Books from './pages/Books';
import Home from './pages/Home';
import Login from './pages/Login/login';
import Readers from './pages/Readers/reader';
import ReaderRegister from './pages/ReadersRegister/register';
import BookShelves from './pages/Bookshelves';
import ListReaders from './pages/ListReaders';
import Relatorio from './pages/Relatorio';
import Loan from './pages/BooksLoans/Loan';
import BookRegister from './pages/BookRegister';
import ListBooks from './pages/ListBook';
import ListBookshelves from './pages/ListBookShelves';
import EditReaders from './pages/ReadersEdit';
import BookEdit from './pages/BookEdit';
import { useAuthStore } from './pages/store/authStore';

export default function App() {
  const { userIsLogged } = useAuthStore();

  return (
    <Router>
      <Routes>
        {/* Rota de login */}
        <Route path="/login" element={<Login />} />

        {/* Rota protegida: Home */}
        <Route
          path="/"
          element={userIsLogged ? <Home /> : <Navigate to="/login" />}
        />

        {/* Rota protegida: Livros */}
        <Route
          path="/books"
          element={userIsLogged ? <Books /> : <Navigate to="/login" />}
        />

        <Route path="/loan" element={<Loan />} />
        <Route
          path="/book/register"
          element={userIsLogged ? <BookRegister /> : <Navigate to="/login" />}
        />

        <Route
          path="/book/list"
          element={userIsLogged ? <ListBooks /> : <Navigate to="/login" />}
        />

        {/* Rota protegida: Leitores */}
        <Route
          path="/readers"
          element={userIsLogged ? <Readers /> : <Navigate to="/login" />}
        />

        <Route path="/ReadersRegister/register" element={<ReaderRegister />} />

        <Route
          path="/bookshelves"
          element={userIsLogged ? <BookShelves /> : <Navigate to="/login" />}
        />

        <Route
          path="/bookshelves/list"
          element={
            userIsLogged ? <ListBookshelves /> : <Navigate to="/login" />
          }
        />

        <Route path="/ListReaders" element={<ListReaders />} />

        <Route
          path="/relatorio"
          element={userIsLogged ? <Relatorio /> : <Navigate to="/login" />}
        />
        <Route path="/ReadersEdit" element={<EditReaders />} />
        <Route
          path="/relatorio"
          element={userIsLogged ? <Relatorio /> : <Navigate to="/login" />}
        />

        <Route
          path="/book/edit"
          element={userIsLogged ? <BookEdit /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}
