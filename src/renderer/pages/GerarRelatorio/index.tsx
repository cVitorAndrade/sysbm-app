import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Container } from './styles';
import Breadcrumb from '../../../components/Breadcrumb';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Content = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

function GerarRelatorio() {
  const [periodo, setPeriodo] = useState({
    inicio: '2025-01-01',
    fim: '2025-02-15',
  });
  const [tema, setTema] = useState('geral');

  const handleThemeChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTema(e.target.value);
  };

  const createChartData = (label: string, data: any[], color: string) => ({
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],
    datasets: [
      {
        label,
        data: [...data],
        backgroundColor: data.map(() => color),
      },
    ],
  });

  const dataAtrasados = useMemo(
    () =>
      createChartData(
        'Livros Atrasados',
        [10, 5, 8, 12, 7, 6, 9, 13, 15, 20, 25, 8],
        'rgba(54, 162, 235, 0.6)',
      ),
    [],
  );
  const dataDevolvidos = useMemo(
    () =>
      createChartData(
        'Livros Devolvidos',
        [15, 10, 20, 45, 18, 22, 30, 10, 25, 38, 28, 12],
        'rgba(75, 192, 192, 0.6)',
      ),
    [],
  );
  const dataRenovados = useMemo(
    () =>
      createChartData(
        'Livros Renovados',
        [12, 8, 15, 18, 25, 30, 35, 10, 20, 22, 18, 14],
        'rgba(255, 159, 64, 0.6)',
      ),
    [],
  );
  const dataGeneros = useMemo(
    () =>
      createChartData(
        'Gêneros Mais Lidos',
        [90, 75, 50, 20, 18],
        'rgba(153, 102, 255, 0.6)',
      ),
    [],
  );

  return (
    <Container>
      <Breadcrumb style={{ color: '#fff' }} />
      <Content>
        <h1>Relatórios</h1>
        <div>
          <label htmlFor="periodoInicio">Período Selecionado:</label>
          <input
            id="periodoInicio"
            type="date"
            value={periodo.inicio}
            onChange={(e) => setPeriodo({ ...periodo, inicio: e.target.value })}
          />
          <span> até </span>
          <input
            id="periodoFim"
            type="date"
            value={periodo.fim}
            onChange={(e) => setPeriodo({ ...periodo, fim: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="tema">Selecione o tema:</label>
          <select id="tema" value={tema} onChange={handleThemeChange}>
            <option value="atrasados">Livros Atrasados</option>
            <option value="devolvidos">Livros Devolvidos</option>
            <option value="renovados">Livros Renovados</option>
            <option value="generos">Gêneros Mais Lidos</option>
          </select>
        </div>
        <div className="charts">
          {(tema === 'geral' || tema === 'atrasados') && (
            <div className="chart">
              <h3>Livros Atrasados</h3>
              <Bar data={dataAtrasados} />
            </div>
          )}
          {(tema === 'geral' || tema === 'devolvidos') && (
            <div className="chart">
              <h3>Livros Devolvidos</h3>
              <Bar data={dataDevolvidos} />
            </div>
          )}
          {(tema === 'geral' || tema === 'renovados') && (
            <div className="chart">
              <h3>Livros Renovados</h3>
              <Bar data={dataRenovados} />
            </div>
          )}
          {(tema === 'geral' || tema === 'generos') && (
            <div className="chart">
              <h3>Gêneros Mais Lidos</h3>
              <Bar data={dataGeneros} />
            </div>
          )}
        </div>
      </Content>
    </Container>
  );
}

export default GerarRelatorio;
