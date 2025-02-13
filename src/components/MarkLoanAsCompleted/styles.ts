import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  width: min(90%, 80rem);
  padding: 2rem;
  border-radius: 1rem;
  background-color: #eeeeee;
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

export const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
