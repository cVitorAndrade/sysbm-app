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

export default function Books() {
  return (
    <Container>
      <Header />
      <Content>
        <Breadcrumb />
        <NavigationSection>
          <img src={fullLogo} alt="" />
          <NavigationWrapper>
            <Link to="/Loan">
              <Button title="EMPRÉSTIMOS" />
            </Link>
            <Link to="/book/register">
              <Button title="CADASTRAR LIVROS" />
            </Link>
            <Link to="/book/list">
              <Button title="ACESSAR ACERVO" />
            </Link>
          </NavigationWrapper>
        </NavigationSection>
      </Content>
    </Container>
  );
}
