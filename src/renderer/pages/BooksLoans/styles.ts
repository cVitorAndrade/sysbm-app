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

export const FormSection = styled.section`
  width: 90%;
  max-width: 800px;
  background-color: #eeeeee;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  > img {
    width: 200px;
    display: block;
    margin: 0 auto;
  }

  > h2 {
    text-align: center;
    margin: 1.5rem 0;
    color: #333;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > label {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: #555;
  }

  > input {
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 48%;
    background-color: #1f1f5f;
    color: #fff;
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.2rem;

    &:hover {
      background-color: #3a3a8f;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

    button {
      width: 100%;
    }
  }
`;

export const FormColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Divide o layout em duas colunas */
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Fica uma coluna em telas menores */
    gap: 1rem;
  }
`;
