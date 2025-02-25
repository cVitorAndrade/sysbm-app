import styled from 'styled-components';

/** Container geral da página, com fundo suave */
export const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(120deg, #f0f2f5 0%, #ffffff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/** Limita a largura máxima e centraliza o conteúdo */
export const MainContent = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 0 20px;
`;

/** Card principal, para agrupar título, breadcrumb e dados */
export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

/** Cabeçalho do relatório (título, período) */
export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    margin: 0;
    font-size: 1.6rem;
    color: #333;
  }

  p {
    margin: 0;
    color: #666;
    font-size: 0.95rem;
  }
`;

/** Envolve a tabela e o gráfico, lado a lado */
export const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

/** Estilos para a tabela */
export const TableContainer = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1);

  h2 {
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 1.1rem;
    color: #444;
    text-align: center;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      tr {
        background-color: #f5f5f5;
      }
    }

    th, td {
      padding: 10px;
      font-size: 0.9rem;
      color: #555;
      border-bottom: 1px solid #eee;
      text-align: left;
    }

    tr:hover {
      background: #fafafa;
    }
  }

  p {
    font-size: 0.9rem;
    color: #777;
    text-align: center;
  }
`;

/** Estilos para o gráfico */
export const ChartContainer = styled.div`
  width: 420px;
  min-width: 300px;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1);

  h2 {
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 1.1rem;
    color: #444;
    text-align: center;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

/** Área de seleção de período/tema */
export const FiltersRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: center;

  label {
    font-weight: 500;
    color: #555;
    margin-right: 4px;
  }

  input[type="date"],
  select {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
    color: #333;
    min-width: 150px;
  }
`;
