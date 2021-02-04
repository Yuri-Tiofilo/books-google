import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Container = styled.div``;

export const Card = styled.div``;

export const ImageCard = styled.img`
  width: 100%;
  height: 180px;
  padding-left: 10px;
  @media (min-width: 768px) {
    width: 100%;
    height: 240px;
    padding-left: 20px;
  }
`;

export const ImageNotExist = styled.div`
  background: #f90;
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  word-wrap: break-word;
  padding: 10px;

  @media (min-width: 980px) {
    width: 90%;
    height: 240px;
    margin-left: 20px;
  }
`;

export const TextImageExist = styled.p`
  text-decoration: none;
  word-wrap: break-word;
  text-align: center;
  color: #000;
`;
