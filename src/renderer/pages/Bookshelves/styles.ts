import styled from 'styled-components';
import background from '../../../../assets/background.jpg';

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
  width: min(40rem, 90%);
  background-color: #eeeeee;
  padding: 3rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > img {
    width: 40rem;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  > a {
    width: 100%;

    > button {
      cursor: pointer;
      width: 100%;
    }
  }
`;
