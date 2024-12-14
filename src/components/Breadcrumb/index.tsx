import { IoIosArrowForward } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import { Container } from './styles';

export default function Breadcrumb() {
  const params = useParams();

  return (
    <Container>
      <Link to="/">
        {' '}
        HOME <IoIosArrowForward />{' '}
      </Link>
    </Container>
  );
}
