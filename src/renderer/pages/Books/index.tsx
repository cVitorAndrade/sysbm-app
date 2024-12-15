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
            <Button title="EMPRESTAR LIVROS" />
            <Button title="CADASTRAR LIVROS" />
            <Button title="ACESSAR ACERVO" />
            <Button title="EMPRÉSTIMO" />
          </NavigationWrapper>
        </NavigationSection>
      </Content>
    </Container>
  );
}
