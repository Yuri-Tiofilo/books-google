import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 100vh;
`;

export const HeaderShelf = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const TitleShelf = styled.strong`
  padding: 0 40px;

  @media (max-width: 480px) {
    padding: 0 0px;
  }

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const ButtonViewMore = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background: transparent;
  padding: 5px;

  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: #fff;
  }
`;
