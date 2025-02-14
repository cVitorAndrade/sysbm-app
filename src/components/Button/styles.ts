import styled from 'styled-components';

export const Container = styled.button`
  padding: 1rem 2rem;
  background-color: #100a34;
  color: #ffffff;
  font-weight: 600;
  border-radius: 1rem;
  border: none;

  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    filter: brightness(0.75);
  }

  &:disabled {
    filter: brightness(0.75);

    &:hover {
      cursor: not-allowed;
    }
  }
`;
