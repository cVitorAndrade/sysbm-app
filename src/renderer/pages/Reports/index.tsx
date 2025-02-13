import Breadcrumb from '../../../components/Breadcrumb';
import Header from '../../../components/Header';
import { Container, Content, ReportSection } from './styles';
import Button from '../../../components/Button';

export function Reports() {
  return (
    <Container>
      <Header />
      <Content>
        <Breadcrumb style={{ color: 'black' }} />
        <ReportSection>
          
        </ReportSection>
      </Content>
    </Container>
  );
}
