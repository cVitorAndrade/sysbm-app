import { Link } from 'react-router-dom';
import logo from '../../../assets/name-logo.png';
import { Container, Content, Navigation } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="SysBM Logo" />
        </div>

        <Navigation>
          <Link to="/books">Livros</Link>
          <Link to="/readers">Leitores</Link>
          <Link to="/bookshelves">Estantes</Link>
          <Link to="/books">Empréstimos</Link>
        </Navigation>
      </Content>
    </Container>
  );
}
