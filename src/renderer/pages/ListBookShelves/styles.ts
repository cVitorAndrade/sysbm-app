import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: #f9f9f9;
  overflow-y: auto; /* Permite rolagem vertical */
`;

export const Content = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h2 {
    font-size: 2.4rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 1.5rem 2rem;
  border-radius: 0.8rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(5px); /* Move para baixo */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > strong {
      font-size: 1.6rem;
      color: #333;
    }

    > p {
      font-size: 1.4rem;
      color: #777;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    transition:
      background-color 0.2s ease,
      transform 0.2s ease;

    &.edit {
      color: #f39c12;
    }

    &.delete {
      color: #e74c3c;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      transform: scale(1.1);
    }
  }
`;
