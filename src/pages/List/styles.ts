import styled from 'styled-components';

export const Container = styled.div`
  background: #ffe207;
  padding: 10px;
  margin: 0px auto;
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media (min-width: 980px) {
    margin-top: 30px;
  }
`;

export const ListBook = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  li {
    list-style: none;
    img {
      width: 110px;
      height: 160px;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 0.1fr);
    grid-gap: 20px;

    li {
      list-style: none;
      img {
        width: 180px;
        height: 240px;
      }
    }
  }

  @media (min-width: 980px) {
    grid-template-columns: repeat(4, 0.1fr);
    grid-gap: 20px;

    li {
      list-style: none;
      img {
        width: 180px;
        height: 240px;
      }
    }
  }
`;

export const ContainerButtonLoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  @media (min-width: 980px) {
    margin-top: 30px;
  }
`;

export const ButtonLoadMore = styled.button`
  background: #0288d1;
  border: 0;
  width: 250px;
  height: 48px;
  border-radius: 24px;
  text-transform: uppercase;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImageNotExist = styled.div`
  background: #f90;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  word-wrap: break-word;
  padding: 10px;

  @media (min-width: 980px) {
    height: 240px;
  }
`;

export const TextImageExist = styled.p`
  text-decoration: none;
  word-wrap: break-word;
  text-align: center;
  color: #000;
`;
