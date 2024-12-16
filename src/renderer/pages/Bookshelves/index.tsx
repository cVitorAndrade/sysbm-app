import { Link } from 'react-router-dom';
import fullLogo from '../../../../assets/full-logo.png';
import Breadcrumb from '../../../components/Breadcrumb';
import Button from '../../../components/Button';

import Header from '../../../components/Header';
import {
  Container,
  Content,
  NavigationSection,
  NavigationWrapper,
} from './styles';

export default function BookShelves() {
  return (
    <Container>
      <Header />
      <Content>
        <Breadcrumb />
        <NavigationSection>
          <img src={fullLogo} alt="Logo completa" />

          <NavigationWrapper>
            <Link to="/bookshelves/register">
              <Button title="CADASTRAR ESTANTES" />
            </Link>
            <Link to="/bookshelves/list">
              <Button title="LISTAR ESTANTES" />
            </Link>
          </NavigationWrapper>
        </NavigationSection>
      </Content>
    </Container>
  );
}
