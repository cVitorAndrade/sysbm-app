import styled from 'styled-components';
import background from '../../../../assets/books-bakground.png';

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  background-image: url(${background});
  background-position: center center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export const NavigationSection = styled.main`
  width: (40rem, 90%);
  background-color: #eeeeee;
  padding: 3rem;
  border-radius: 1rem;
  height: fit-content;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 40rem;
  }
`;

export const NavigationWrapper  = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  > a{
    width: 100%;

    > button {
      width: 100%;
      cursor: pointer;
    }
  }
`;
