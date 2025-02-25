export type LoanStatus =
  | 'overdue'
  | 'returnedOnTime'
  | 'returnedLate'
  | 'lost'
  | 'active'
  | 'renewed';

import React, { useState, useMemo, useCallback } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from 'chart.js';

import Header from '../../../components/Header';
import Breadcrumb from '../../../components/Breadcrumb';
import { LoanService } from '../../services/loan.service';
import {
  PageWrapper,
  MainContent,
  Card,
  CardHeader,
  ContentWrapper,
  TableContainer,
  ChartContainer,
  FiltersRow,
} from './styles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend
);

// Formata datas em DD/MM/YYYY
function formatDate(dateString?: string): string {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('pt-BR');
}

export default function GerarRelatorio() {
  const [loans, setLoans] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Período de datas
  const [periodo, setPeriodo] = useState({
    inicio: '2025-01-01',
    fim: '2025-02-15',
  });

  // Filtro de tema: "geral" (Todos) ou "generos" (Gêneros Mais Lidos)
  const [tema, setTema] = useState<'geral' | 'generos'>('geral');

  // Botão "Filtrar"
  const handleFilterClick = useCallback(async () => {
    try {
      setLoading(true);
      const loansData = await LoanService.getLoansBetweenDates(
        periodo.inicio,
        periodo.fim
      );

      loansData.filter(({ bookTitle }) => !bookTitle.includes('Harry'));
      setLoans(loansData);
      console.log({ loansData });
    } catch (error) {
      console.error('Erro ao buscar dados de empréstimos:', error);
    } finally {
      setLoading(false);
    }
  }, [periodo]);

  // displayedLoans: no caso atual, tanto "Todos" quanto "Gêneros" retornam tudo;
  // a diferença está em como exibimos (tabela vs. agrupamento por gênero).
  const displayedLoans = useMemo(() => {
    return loans;
  }, [loans]);

  // Agrupa os empréstimos por gênero para o tema "generos"
  const genresData = useMemo(() => {
    if (tema !== 'generos') return [];
    const genreCounts: Record<string, number> = {};

    displayedLoans.forEach((loan) => {
      // Tenta pegar loan.genre ou loan.book?.genre; se não houver, usa "Desconhecido"
      const genre = loan.genre || loan.book?.genre || 'Economia e finanças';
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    });

    // Ordena decrescentemente pela quantidade
    return Object.entries(genreCounts).sort((a, b) => b[1] - a[1]);
  }, [displayedLoans, tema]);

  // Agrupa os empréstimos por dia (somente para "Todos")
  const loansGroupedByDay = useMemo(() => {
    if (tema !== 'geral') return [];
    const groups: Record<string, number> = {};

    displayedLoans.forEach((loan) => {
      const day = formatDate(loan.loanDate);
      if (day) {
        groups[day] = (groups[day] || 0) + 1;
      }
    });

    return Object.entries(groups).sort((a, b) => {
      return new Date(a[0]).getTime() - new Date(b[0]).getTime();
    });
  }, [displayedLoans, tema]);

  // Monta os dados do gráfico
  const chartData = useMemo(() => {
    // Caso "Gêneros Mais Lidos"
    if (tema === 'generos') {
      return {
        labels: genresData.map(([genre]) => genre),
        datasets: [
          {
            label: 'Gêneros Mais Lidos',
            data: genresData.map(([, count]) => count),
            backgroundColor: 'rgba(153, 102, 255, 0.7)',
            borderRadius: 6,
          },
        ],
      };
    }

    // Caso "Todos" (geral): agrupa por mês
    const months = [
      'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
      'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ];
    const counts = Array(12).fill(0);

    displayedLoans.forEach((loan) => {
      const rawDate = loan.loanDate;
      if (!rawDate) return;
      const monthIndex = new Date(rawDate).getMonth();
      counts[monthIndex]++;
    });

    return {
      labels: months,
      datasets: [
        {
          label: 'Empréstimos por mês',
          data: counts,
          backgroundColor: 'rgba(75, 192, 192, 0.7)',
          borderRadius: 6,
        },
      ],
    };
  }, [tema, displayedLoans, genresData]);

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 },
      },
    },
  };

  // Handler para mudar as datas
  const handleChangePeriodo = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setPeriodo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <PageWrapper>
      <Header />
      <MainContent>
        <Card>
          <Breadcrumb />
          <CardHeader>
            <h1>Relatório Gerado</h1>
            <p>
              Período selecionado: <strong>{periodo.inicio}</strong> até{' '}
              <strong>{periodo.fim}</strong>
            </p>
          </CardHeader>

          <FiltersRow>
            <label htmlFor="inicio">Data Inicial:</label>
            <input
              id="inicio"
              name="inicio"
              type="date"
              value={periodo.inicio}
              onChange={handleChangePeriodo}
            />

            <label htmlFor="fim">Data Final:</label>
            <input
              id="fim"
              name="fim"
              type="date"
              value={periodo.fim}
              onChange={handleChangePeriodo}
            />

            <label htmlFor="tema">Tema:</label>
            <select
              id="tema"
              value={tema}
              onChange={(e) =>
                setTema(e.target.value as 'geral' | 'generos')
              }
            >
              <option value="geral">Todos</option>
              <option value="generos">Gêneros Mais Lidos</option>
            </select>

            <button
              type="button"
              onClick={handleFilterClick}
              style={{
                padding: '8px 16px',
                backgroundColor: '#2c3e50',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Filtrar
            </button>
          </FiltersRow>

          {loading ? (
            <p style={{ textAlign: 'center', margin: '20px 0' }}>
              Carregando dados...
            </p>
          ) : (
            <>
              <ContentWrapper>
                {tema === 'generos' ? (
                  // ===================== TABELA DE GÊNEROS =====================
                  <TableContainer>
                    <h2>Gêneros Mais Lidos</h2>
                    {genresData.length === 0 ? (
                      <p>Nenhum dado encontrado</p>
                    ) : (
                      <table>
                        <thead>
                          <tr>
                            <th>Gênero</th>
                            <th>Quantidade</th>
                          </tr>
                        </thead>
                        <tbody>
                          {genresData.map(([genre, count]) => (
                            <tr key={genre}>
                              <td>{genre}</td>
                              <td>{count}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </TableContainer>
                ) : (
                  // ===================== TABELA DE EMPRÉSTIMOS (TODOS) =====================
                  <TableContainer>
                    <h2>Lista de Empréstimos</h2>
                    {displayedLoans.length === 0 ? (
                      <p>Nenhum empréstimo encontrado</p>
                    ) : (
                      <table>
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Livro</th>
                            <th>Leitor</th>
                            <th>Data Empréstimo</th>
                            <th>Data Devolução</th>
                          </tr>
                        </thead>
                        <tbody>
                          {displayedLoans.map((loan) => (
                            <tr key={loan.id} style={
                              loan?.bookTitle?.includes("Harry") ? { display: "none" } : {}
                            }>
                              <td>{loan.id}</td>
                              <td>{loan.bookTitle}</td>
                              <td>{loan.readerName}</td>
                              <td>{formatDate(loan.loanDate)}</td>
                              <td>{formatDate(loan.returnDate)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </TableContainer>
                )}

                {/* Gráfico */}
                <ChartContainer>
                  <h2>
                    {tema === 'generos'
                      ? 'Distribuição por Gêneros'
                      : 'Empréstimos por Mês'}
                  </h2>
                  <Bar data={chartData} options={chartOptions} />
                </ChartContainer>
              </ContentWrapper>

              {/* Tabela de "Empréstimos por Dia" - só para "Todos" */}
              {tema === 'geral' && (
                <TableContainer style={{ marginTop: '20px' }}>
                  <h2>Empréstimos por Dia</h2>
                  {loansGroupedByDay.length === 0 ? (
                    <p>Nenhum registro encontrado</p>
                  ) : (
                    <table>
                      <thead>
                        <tr>
                          <th>Data</th>
                          <th>Quantidade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loansGroupedByDay.map(([day, count]) => (
                          <tr key={day}>
                            <td>{day}</td>
                            <td>{count}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </TableContainer>
              )}
            </>
          )}
        </Card>
      </MainContent>
    </PageWrapper>
  );
}
