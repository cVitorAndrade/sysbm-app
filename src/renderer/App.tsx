import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Books from './pages/Books';

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>SysBM</h1>
      <div className="Hello">
        <Link to="/books">Ir para books</Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
}
