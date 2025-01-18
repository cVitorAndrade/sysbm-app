import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  padding: 20px; /* Reduzindo o espaçamento interno */
  width: 500px; /* Aumentando a largura */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }

  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
  }
`;

export const ModalBody = styled.div`
  margin-top: 10px; /* Reduzindo o espaçamento superior */

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px; /* Reduzindo espaço abaixo do texto */
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px; /* Diminuindo o espaçamento entre os campos */

    label {
      font-size: 14px;
      font-weight: bold;
      color: #333;
    }

    input,
    select {
      padding: 8px; /* Reduzindo o preenchimento dos campos */
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 14px;
      background-color: #fff;
    }
  }
`;

export const ModalFooter = styled.div`
  margin-top: 15px; /* Reduzindo o espaçamento superior */
  display: flex;
  justify-content: center;

  button {
    width: 100%;
    padding: 10px; /* Reduzindo a altura do botão */
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background-color: #34495e;
    }
  }
`;
