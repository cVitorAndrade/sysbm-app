import { Link } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumb';
import Header from '../../../components/Header';
import {
  Container,
  Content,
  FilterSection,
  LoanCard,
  ListLoans,
  InputGroup,
} from './styles';

export function ListLoansPage() {
  return (
    <Container>
      <Header />
      <Content>
        <Breadcrumb />

        <FilterSection>
          <InputGroup>
            <label htmlFor="title">Título</label>
            <input id="title" type="text" placeholder="exemplo..." />
          </InputGroup>

          <InputGroup>
            <label htmlFor="status">Status</label>
            <input id="status" type="text" placeholder="exemplo..." />
          </InputGroup>

          <InputGroup>
            <label htmlFor="borrower">Locatário</label>
            <input id="borrower" type="text" placeholder="exemplo..." />
          </InputGroup>

          <InputGroup>
            <label htmlFor="startDate">Data inicial</label>
            <input id="startDate" type="text" placeholder="XX/XX/XXXX" />
          </InputGroup>

          <InputGroup>
            <label htmlFor="endDate">Data final</label>
            <input id="endDate" type="text" placeholder="XX/XX/XXXX" />
          </InputGroup>
        </FilterSection>

        <ListLoans>
          {Array.from({ length: 10 }, (_, index) => (
            <LoanCard key={index}>
              <strong>Nome do livro</strong>
              <span className="status">Status</span>
              <p>
                Nome do locatário (Cliente): Nome do locatário - Matrícula/CPF: 12312312
              </p>
              <p>Aluguel: 01/01/2025 a 09/01/2025</p>
            </LoanCard>
          ))}
        </ListLoans>
      </Content>
    </Container>
  );
}
