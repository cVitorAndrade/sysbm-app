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
            <Button title="CADASTRAR ESTANTES" />
            <Button title="LISTAR ESTANTES" />
          </NavigationWrapper>
        </NavigationSection>
      </Content>
    </Container>
  );
}
