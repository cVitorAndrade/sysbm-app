import styled from 'styled-components';
import background from '../../../../assets/background.jpg';

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  background-image: url(${background});
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

export const FilterSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: #333;
  }

  input {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font-size: 1.4rem;

    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }
`;

export const ListLoans = styled.div`
  width: 100%;
  max-width: 800px;
`;

export const LoanCard = styled.div`
  background-color: #fff;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  strong {
    font-size: 1.4rem;
    color: #333;
  }

  .status {
    font-size: 1rem;
    color: #007bff;
    font-weight: bold;
    margin-left: 0.5rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    color: #666;
  }
`;
