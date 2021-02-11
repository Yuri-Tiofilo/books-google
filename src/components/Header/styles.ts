import styled from 'styled-components';
import { FiMenu, FiSearch, FiArrowLeft, FiX } from 'react-icons/fi';

interface PropsIcon {
  isActive: boolean;
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const IconMenu = styled(FiMenu)`
  font-size: 22px;
  &:hover {
    cursor: pointer;
  }
`;

export const IconSearch = styled(FiSearch)<PropsIcon>`
  font-size: 22px;
  z-index: ${({ isActive }) => (isActive ? 0 : 10)};
  &:hover {
    cursor: pointer;
  }
`;

export const IconArrowLeft = styled(FiArrowLeft)`
  font-size: 22px;

  &:hover {
    cursor: pointer;
  }
`;

export const TitleHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;

  @media (max-width: 980px) {
    justify-content: center;
  }
`;
export const IconClose = styled(FiX)``;
