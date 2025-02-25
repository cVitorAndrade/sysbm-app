import { Link } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../../../assets/background.jpg';

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: red;
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
  width: 90%;
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

export const NavigationCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  width: 100%;
`;

export const NavigationCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 4rem 5.5rem;
  background-color: #ffffff;
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;

  > img {
    width: 16rem;
    height: 16rem;
  }

  > h2 {
    font-weight: 900;
    color: #1a1818;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  &:last-child {
    background-color: #bfbfbf;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
