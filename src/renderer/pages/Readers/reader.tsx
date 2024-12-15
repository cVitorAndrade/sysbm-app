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

export default function Readers() {
  return (
    <Container>
      <Header />
      <Content>
        <Breadcrumb />
        <NavigationSection>
          <img src={fullLogo} alt="Logo SysBM" />
          <NavigationWrapper>
            <Link to={'/ReadersRegister/register'} style={{ width: "100%" }} >
              <Button title="CADASTRAR LEITORES" />
            </Link>
              <Button title="LISTAR LEITORES" />
          </NavigationWrapper>
        </NavigationSection>
      </Content>
    </Container>
  );
}
