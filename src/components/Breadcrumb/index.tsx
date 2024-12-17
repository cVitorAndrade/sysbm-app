import { IoIosArrowForward } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './styles';

// Definição do tipo das props
interface BreadcrumbProps {
  path: string[]; // Torna o path opcional
}

export default function Breadcrumb({ path = [] }: BreadcrumbProps) {
  const location = useLocation(); // Mantém a lógica de localização
  const isRegisterPage = location.pathname === '/ListReaders';

  return (
    <Container>
      {/* HOME sempre será o primeiro */}
      <Link to="/" style={{ color: isRegisterPage ? '#000' : '#fff' }}>
        <IoIosArrowForward />
      </Link>

      {/* Renderiza os demais itens do path */}
      {path.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={index}>
          <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          {index < path.length - 1 && <IoIosArrowForward />}
        </span>
      ))}
    </Container>
  );
}
