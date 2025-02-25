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
import { ManageLoanModal } from '../../../components/ManageLoanModal';

const statusTag = {
  active: 'Ativo',
  lost: 'Livro perdido',
  returnedOnTime: 'Devolvido no prazo',
  returnedLate: 'Devolvido com atraso',
  overdue: 'Livro Atrasado',
  renewed: 'Livro renovado',
};

export function ListLoansPage() {
  const [loans, setLoans] = useState<ILoanWithDetails[]>([]);
  const [filteredLoans, setFilteredLoans] = useState<ILoanWithDetails[]>([]);
  const [selectedLoan, setSelectedLoan] = useState<ILoanWithDetails>();
  const [showLoanModal, setShowLoanModal] = useState<boolean>(false);

  // Estados para os filtros
  const [titleFilter, setTitleFilter] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [borrowerFilter, setBorrowerFilter] = useState<string>('');
  const [startDateFilter, setStartDateFilter] = useState<string>('');
  const [endDateFilter, setEndDateFilter] = useState<string>('');

  const onGetLoans = async () => {
    try {
      const allLoans = await LoanService.getAllLoans();
      setLoans(allLoans);
      setFilteredLoans(allLoans); // Inicialmente, exibe todos os empréstimos
    } catch (error) {
      console.log('ListLoansPage - onGetLoans: ', error);
    }
  };

  const onCloseManageLoanModal = async () => {
    setShowLoanModal(false);
    await onGetLoans();
  };

  const onOpenManageLoanModal = (loan: ILoanWithDetails) => {
    setSelectedLoan(loan);
    setShowLoanModal(true);
  };

  // Função para aplicar os filtros
  const applyFilters = () => {
    let filtered = loans;

    // Filtro por título
    if (titleFilter) {
      filtered = filtered.filter((loan) =>
        loan.bookTitle.toLowerCase().includes(titleFilter.toLowerCase()),
      );
    }

    // Filtro por status
    if (statusFilter) {
      filtered = filtered.filter((loan) =>
        statusTag[loan.status]
          .toLowerCase()
          .includes(statusFilter.toLowerCase()),
      );
    }

    // Filtro por leitor
    if (borrowerFilter) {
      filtered = filtered.filter((loan) =>
        loan.readerName.toLowerCase().includes(borrowerFilter.toLowerCase()),
      );
    }

    // Filtro por data inicial e final
    if (startDateFilter || endDateFilter) {
      const startDate = startDateFilter ? new Date(startDateFilter) : null;
      const endDate = endDateFilter ? new Date(endDateFilter) : null;

      filtered = filtered.filter((loan) => {
        const loanStartDate = new Date(loan.createdAt);
        const loanEndDate = new Date(loan.finalDate);

        // Se apenas a data inicial for fornecida
        if (startDate && !endDate) {
          return loanStartDate >= startDate;
        }

        // Se apenas a data final for fornecida
        if (!startDate && endDate) {
          return loanEndDate <= endDate;
        }

        // Se ambas as datas forem fornecidas
        if (startDate && endDate) {
          return loanStartDate >= startDate && loanEndDate <= endDate;
        }

        return true; // Caso nenhuma data seja fornecida
      });
    }

    setFilteredLoans(filtered);
  };

  // Atualiza os filtros sempre que um dos valores muda
  useEffect(() => {
    applyFilters();
  }, [
    titleFilter,
    statusFilter,
    borrowerFilter,
    startDateFilter,
    endDateFilter,
  ]);

  useEffect(() => {
    onGetLoans();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Breadcrumb style={{ color: 'white' }}>
          <Link to="/books" style={{ color: 'white', fontWeight: '500' }}>
            LIVROS
          </Link>
        </Breadcrumb>

        <FilterSection>
          <InputGroup>
            <label htmlFor="title">Título</label>
            <input
              id="title"
              type="text"
              placeholder="exemplo..."
              value={titleFilter}
              onChange={(e) => setTitleFilter(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="status">Status</label>
            <input
              id="status"
              type="text"
              placeholder="exemplo..."
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="borrower">Leitor</label>
            <input
              id="borrower"
              type="text"
              placeholder="exemplo..."
              value={borrowerFilter}
              onChange={(e) => setBorrowerFilter(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="startDate">Data inicial</label>
            <input
              id="startDate"
              type="date"
              value={startDateFilter}
              onChange={(e) => setStartDateFilter(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="endDate">Data final</label>
            <input
              id="endDate"
              type="date"
              value={endDateFilter}
              onChange={(e) => setEndDateFilter(e.target.value)}
            />
          </InputGroup>
        </FilterSection>

        <ListLoans
          style={{
            display: 'flex',
            flexDirection: 'column-reverse',
            maxHeight: '800px',
            overflow: 'auto',
          }}
        >
          {filteredLoans.map(
            ({
              id,
              bookTitle,
              readerName,
              readerCpf,
              createdAt,
              finalDate,
              status,
              ...rest
            }) => (
              <LoanCard
                key={id}
                onClick={() => {
                  onOpenManageLoanModal({
                    id,
                    bookTitle,
                    readerName,
                    readerCpf,
                    createdAt,
                    finalDate,
                    status,
                    ...rest,
                  });
                }}
              >
                <strong>{bookTitle}</strong>
                <span
                  className="status"
                  style={{ textTransform: 'capitalize' }}
                >
                  {statusTag[status]}
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

      {showLoanModal && (
        <ManageLoanModal loan={selectedLoan} onClose={onCloseManageLoanModal} />
      )}
    </Container>
  );
}
