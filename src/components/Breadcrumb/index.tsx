import { IoIosArrowForward } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './styles';

// Definição do tipo das props
interface BreadcrumbProps {
  path?: string[]; // Permite o path ser opcional
}

export default function Breadcrumb({ path }: BreadcrumbProps) {
  const location = useLocation();
  
  // Gera um caminho dinâmico com base no pathname
  const generatePath = () => {
    const currentPath = location.pathname.split('/').filter(Boolean);
    return path || currentPath;
  };

  const breadcrumbPath = generatePath();

  return (
    <Container>
      {/* HOME como primeiro item */}
      <Link to="/">
        <span>Home</span>
      </Link>
      {breadcrumbPath.map((item, index) => (
        <span key={index}>
          <IoIosArrowForward />
          <Link to={`/${item.toLowerCase()}`}>{item.replace('-', ' ')}</Link>
        </span>
      ))}
    </Container>
  );
}
