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

export default function Relatorio() {
  return (
    <Container>
      <Header />
      <Content>
        <Breadcrumb />
        <NavigationSection>
          <img src={fullLogo} alt="" />

          <NavigationWrapper>
            <Button title="GERAR RELATÓRIOS" />
          </NavigationWrapper>
        </NavigationSection>
      </Content>
    </Container>
  );
}
