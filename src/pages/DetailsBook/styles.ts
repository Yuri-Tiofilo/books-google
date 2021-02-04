import styled, { css } from 'styled-components';
import { FiHeart } from 'react-icons/fi';

interface PropsButton {
  isFavorite: boolean;
}

export const Container = styled.div`
  height: 90vh;
  @media (min-width: 980px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  @media (min-width: 980px) {
  }
`;

export const ButtonFavorite = styled.button<PropsButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-left: 10px;
  height: 38px;
  width: 38px;
  border: 0px;
  border-radius: 19px;

  ${(props) =>
    props.isFavorite &&
    css`
      background: #000;
    `}
`;

export const IconFavorite = styled(FiHeart)<PropsButton>`
  color: #000;
  ${(props) =>
    props.isFavorite &&
    css`
      color: #fff;
    `}
`;

export const HeaderPage = styled.div`
  background: #ffe207;
  display: flex;
  padding: 30px 15px;
  margin: 0 auto;
`;

export const ContentHeader = styled.div`
  display: flex;
  max-width: 980px;
  margin: 0 auto;
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 120px;
    width: 92px;
  }

  span {
    font-size: 12px;
    padding-top: 15px;
    color: #707070 !important;
  }
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Title = styled.strong`
  font-size: 20px;
`;

export const Author = styled.span`
  font-size: 12px;
  color: #707070;
  padding-top: 5px;
`;

export const ContainerPriceWithRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;

  @media (min-width: 980px) {
    justify-content: space-between;
  }
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
  padding-top: 5px;
  margin-right: 12px;
`;

export const ContainerBuyWithFavorite = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
`;

export const ButtonBuy = styled.button`
  width: 130px;
  height: 38px;
  border-radius: 20px;
  border: 0;
  background: #0288d1;
  color: #fff;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 2;
  text-align: justify;

  padding: 18px;
  color: #707070;

  @media (min-width: 980px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;
