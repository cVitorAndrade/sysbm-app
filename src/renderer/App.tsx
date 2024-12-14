import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './pages/Books';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
}
