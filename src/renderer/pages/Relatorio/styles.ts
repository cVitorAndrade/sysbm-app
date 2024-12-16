import styled from 'styled-components';
import background from '../../../../assets/books-bakground.png';

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: #fdfdfd;
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
  height: fit-content;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 40rem;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  > button {
    width: 100%;
  }
`;

export const BreadcrumbWrapper = styled.div`
  color: white;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  margin-top: 0.8rem;

  span {
    margin: 0 0.5rem;
    &:last-child {
      color: #d4d4d4;
    }
  }
`;
