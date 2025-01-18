import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 30px;
  background-color: #f9f9f9;
  min-height: 50vh;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
`;

export const Section = styled.div`
  margin-bottom: 30px;

  h3 {
    font-size: 10px;
    font-weight: bold;
    color: #444;
    margin-bottom: 15px;
  }
`;

export const ChartWrapper = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  text-align: center;
`;

export const ListWrapper = styled.div`
  background: #f1f1f1;
  border-radius: 8px;
  padding: 15px;
`;

export const BookList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
export const Content = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
