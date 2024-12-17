import { IoIosArrowForward } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './styles';

export default function Breadcrumb({ style = {} }) {
  const location = useLocation();
  const isRegisterPage = location.pathname === '/ListReaders';

  return (
    <Container>
      <Link
        to="/"
        style={{ color: isRegisterPage ? '#000' : '#fff', ...style }}
      >
        HOME <IoIosArrowForward />
      </Link>
    </Container>
  );
}
