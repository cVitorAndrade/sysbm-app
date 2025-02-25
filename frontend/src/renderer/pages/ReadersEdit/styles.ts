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
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

    button {
      width: 100%;
    }
  }
`;
