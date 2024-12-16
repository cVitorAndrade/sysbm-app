import styled from 'styled-components';

export const Container = styled.nav`
  width: 90%;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 1.6rem;

  > a {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;
    font-weight: 500;
    color:rgb(255, 255, 255);
    transition: all 0.3s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
