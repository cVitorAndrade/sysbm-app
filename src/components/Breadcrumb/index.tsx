import { IoIosArrowForward } from 'react-icons/io';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Container } from './styles';

export default function Breadcrumb() {
  const location = useLocation();
  const isRegisterPage = location.pathname === '/ListReaders';

  return (
    <Container>
      <Link to="/" style={{ color: isRegisterPage ? '#000' : '#fff' }}>
        HOME <IoIosArrowForward />
      </Link>
    </Container>
  );
}
