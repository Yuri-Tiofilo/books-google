import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

export const Container = styled.div`
  position: absolute;

  right: 10px;

  width: 300px;
  background: #ffff;

  display: flex;
  align-items: center;
  border-radius: 20px;
  margin-top: -10px;
`;

export const ContainerInput = styled.div`
  width: 90%;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  height: 40px;
  padding-left: 20px;
  border-radius: 20px;
`;

export const AreaIconSearch = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
`;

export const IconSearch = styled(FiX)`
  font-size: 22px;
  z-index: 1;
`;
