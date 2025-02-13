import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import { ILoanWithDetails } from '../../interfaces/ILoan';
import { LoanService } from '../../services/loan.service';
import { MarkLoanAsCompletedModal } from '../../../components/MarkLoanAsCompleted';

export function ListLoansPage() {
  const [loans, setLoans] = useState<ILoanWithDetails[]>([]);

  useEffect(() => {
    const onGetLoans = async () => {
      try {
        const allLoans = await LoanService.getAllLoans();
        setLoans(allLoans);
      } catch (error) {
        console.log('ListLoansPage - onGetLoans: ', error);
      }
    };

    onGetLoans();
  }, []);

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
          {loans.map(
            ({
              id,
              bookTitle,
              readerName,
              readerCpf,
              createdAt,
              finalDate,
              status,
            }) => (
              <LoanCard key={id}>
                <strong>{bookTitle}</strong>
                <span
                  className="status"
                  style={{ textTransform: 'capitalize' }}
                >
                  {status}
                </span>
                <p>
                  Nome do leitor: {readerName} - CPF: {readerCpf}
                </p>
                <p>
                  Aluguel: {new Date(createdAt).toLocaleDateString('pt-BR')} à{' '}
                  {new Date(finalDate).toLocaleDateString('pt-BR')}
                </p>
              </LoanCard>
            ),
          )}
        </ListLoans>
      </Content>

      {/* <MarkLoanAsCompletedModal /> */}
    </Container>
  );
}
