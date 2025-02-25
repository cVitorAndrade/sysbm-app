import styled from 'styled-components';

export const ScrollContainer = styled.div`
  overflow-y: auto; /* Ativa a rolagem apenas quando necessário */
  overflow-x: hidden;
  padding-right: 1rem; /* Evita o corte dos conteúdos próximos à borda */

  /* Barra de rolagem personalizada */
  &::-webkit-scrollbar {
    width: 10px; /* Largura da barra */
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* Cor do fundo da barra */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888; /* Cor da barra */
    border-radius: 10px;
    transition: background 0.3s ease;

    &:hover {
      background: #555; /* Cor ao passar o mouse */
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    max-height: 70vh;
  }
`;
