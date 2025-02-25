import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  background-color: #313b72;
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 2rem;

  > a {
    color: #eeeeee;
    font-size: 2rem;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    outline: none;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
