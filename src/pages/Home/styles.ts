import styled from 'styled-components';

export const Container = styled.div`
  background: #ffe207;
  height: 100vh;
`;

export const HeaderShelf = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const TitleShelf = styled.strong`
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const ButtonViewMore = styled.button`
  border: 1px solid #0288d1;
  background: transparent;
  padding: 5px;

  color: #0288d1;

  &:hover {
    color: #000;
  }
`;
