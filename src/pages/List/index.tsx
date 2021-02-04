import React, { useCallback, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';

import { useBooks } from '../../hooks/books';
import { ListBooks } from '../../dtos/books';

import {
  Container,
  ListBook,
  ButtonLoadMore,
  ContainerButtonLoadMore,
  ImageNotExist,
  TextImageExist,
  Content,
} from './styles';

interface PropsRoute {
  category?: string | undefined;
}

const List: React.FC = () => {
  const { category } = useParams<PropsRoute>();
  const { requestBooks, books } = useBooks();
  const [pageSize, setPageSize] = useState<number>(0);

  const requestBooksPage = useCallback(() => {
    if (category) {
      requestBooks(category, pageSize + 10);
    }
  }, [requestBooks, category, pageSize]);

  useEffect(() => {
    requestBooksPage();
  }, []);

  const loadMoreBooks = useCallback(() => {
    if (category) {
      requestBooks(category, pageSize);
      setPageSize((prevState) => prevState + 10);
    }
  }, [setPageSize, category, pageSize, requestBooks]);

  return (
    <>
      <Header isMenu functionOnClick={() => {}} />
      <Container>
        <Content>
          {books.length !== 0 ? (
            <ListBook>
              {books.map((element: ListBooks) => (
                <Link
                  to={`/book/${element.id}`}
                  key={element.id}
                  style={{ textDecoration: 'none' }}
                >
                  <li>
                    {element.volumeInfo?.imageLinks?.thumbnail ? (
                      <img
                        src={element.volumeInfo?.imageLinks?.thumbnail}
                        alt="books"
                      />
                    ) : (
                      <ImageNotExist>
                        <TextImageExist>Image not exist</TextImageExist>
                      </ImageNotExist>
                    )}
                  </li>
                </Link>
              ))}
            </ListBook>
          ) : null}
        </Content>

        <ContainerButtonLoadMore>
          <ButtonLoadMore
            type="button"
            onClick={() => {
              loadMoreBooks();
            }}
          >
            Load More
          </ButtonLoadMore>
        </ContainerButtonLoadMore>
      </Container>
    </>
  );
};

export default List;
