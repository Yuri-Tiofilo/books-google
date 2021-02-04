import React, { useEffect, useState } from 'react';
import ReactStars from 'react-stars';
import { useParams, useHistory } from 'react-router-dom';

import { useBooks } from '../../hooks/books';

import Header from '../../components/Header';

import {
  Container,
  IconFavorite,
  ButtonFavorite,
  HeaderPage,
  ContentLeft,
  ContentRight,
  Title,
  Author,
  ContainerPriceWithRating,
  Price,
  ContainerBuyWithFavorite,
  ButtonBuy,
  Description,
  Content,
  ContentHeader,
} from './styles';

interface PropsRoute {
  bookId?: string | undefined;
}

const DetailsBook: React.FC = () => {
  const { bookId } = useParams<PropsRoute>();
  const history = useHistory();
  const { requestDetailsBook, book } = useBooks();
  const [rating, setRating] = useState<number>(0);
  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    if (bookId) {
      requestDetailsBook(bookId);
    }
  }, []);

  const ratingChanged = (newRating: number): void => {
    setRating(newRating);
  };

  const backPage = (): void => {
    history.goBack();
  };

  return (
    <>
      <Header
        isMenu={false}
        functionOnClick={() => {
          backPage();
        }}
      />
      <Container>
        {book ? (
          <Content>
            <HeaderPage>
              <ContentHeader>
                <ContentLeft>
                  <img
                    src={book.volumeInfo?.imageLinks?.thumbnail}
                    alt={book.id}
                  />

                  <span>{`${book.volumeInfo?.pageCount} pages`}</span>
                </ContentLeft>

                <ContentRight>
                  <Title>{`${book.volumeInfo?.title}`}</Title>

                  <Author>
                    {`by ${book.volumeInfo?.authors.map((author) => author)}`}
                  </Author>

                  <ContainerPriceWithRating>
                    {book?.saleInfo?.saleability !== 'NOT_FOR_SALE' ? (
                      <Price>{`$ ${book?.saleInfo?.listPrice?.amount}`}</Price>
                    ) : null}

                    <ReactStars
                      count={5}
                      size={24}
                      color2="#ffd700"
                      onChange={ratingChanged}
                      value={rating}
                    />
                  </ContainerPriceWithRating>

                  <ContainerBuyWithFavorite>
                    <a href={book.saleInfo?.buyLink}>
                      <ButtonBuy type="button">BUY</ButtonBuy>
                    </a>

                    <ButtonFavorite
                      type="button"
                      onClick={() => {
                        setFavorite(!favorite);
                      }}
                      isFavorite={favorite}
                    >
                      <IconFavorite isFavorite={favorite} />
                    </ButtonFavorite>
                  </ContainerBuyWithFavorite>
                </ContentRight>
              </ContentHeader>
            </HeaderPage>

            <Description>{`${book.volumeInfo?.description}`}</Description>
          </Content>
        ) : null}
      </Container>
    </>
  );
};

export default DetailsBook;
