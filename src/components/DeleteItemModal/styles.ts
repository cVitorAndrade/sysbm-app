import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: min(90%, 80rem);
  padding: 4rem 2rem 2rem;
  border-radius: 1rem;
  background-color: #eeeeee;
  position: relative;
`;

export const MessageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  > h2 {
    font-weight: 600;
    color: #100a34;
  }

  > p {
    color: #100a34;
    font-weight: 500;
    font-size: 1.8rem;
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

  > label,
  > div > label {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: #555;
  }

  > input,
  > div > input {
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

export const Footer = styled.footer`
  display: flex;
  justify-content: end;
  gap: 0.8rem;
`;
