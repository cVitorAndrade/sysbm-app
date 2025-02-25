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

export default function RelatorioMensal() {
  return (
    <Container>
      <Header />
      <Content>
        <Breadcrumb />
        <NavigationSection>
          <img src={fullLogo} alt="SysBM Logo" />
          <NavigationWrapper>
            <Link to="/GerarRelatorio">
              <Button title="GERAR RELATORIO" />
            </Link>
            <Link to="/reports">
              <Button title="HISTORICO DE RELATORIOS" />
            </Link>
          </NavigationWrapper>
        </NavigationSection>
      </Content>
    </Container>
  );
}
