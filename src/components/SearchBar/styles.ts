import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza horizontalmente o conteúdo */
  background-color: #fff;
  border-radius: 3rem; /* Aumenta o arredondamento */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 2rem 3rem; /* Aumenta a altura e espaçamento interno */
  width: 100%;
  max-width: 1200px; /* Ajuste conforme o design do Figma */
  margin: 6rem auto; /* Move o componente mais para baixo */

  @media (max-width: 768px) {
    max-width: 95%; /* Responsividade em telas menores */
  }
`;

export const IconWrapper = styled.div`
  margin-right: 2rem; /* Espaçamento maior entre o ícone e o input */
  color: #666;
  font-size: 2.4rem; /* Ícone maior */
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 2rem; /* Aumenta o tamanho da fonte */
  width: 100%;

  &::placeholder {
    color: #aaa;
    font-size: 1.8rem;
  }
`;