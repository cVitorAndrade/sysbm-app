import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  background-color: #f8f8f8;
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

export const FormSection = styled.section`
  text-align: center;

  img {
    margin-bottom: 1rem;
    height: 80px;
  }

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
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
  justify-content: space-between;
  gap: 1rem;
`;

export const FormField = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #555;
  }

  input {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:first-child {
    background-color: #d9534f;
    color: #fff;

    &:hover {
      background-color: #c9302c;
    }
  }

  button:last-child {
    background-color: #5cb85c;
    color: #fff;

    &:hover {
      background-color: #4cae4c;
    }
  }
`;
