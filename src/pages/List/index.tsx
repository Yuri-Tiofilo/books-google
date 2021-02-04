import React, { useCallback, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { useBooks } from '../../hooks/books';
import { ListBooks } from '../../dtos/books';

import { Container } from './styles';

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
    <Container>
      <h1>List</h1>
      {books.length !== 0 ? (
        <div>
          {books.map((element: ListBooks) => (
            <Link to={`/book/${element.id}`} key={element.id}>
              <li>
                <img
                  src={element.volumeInfo?.imageLinks?.thumbnail}
                  alt="books"
                />
              </li>
            </Link>
          ))}
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => {
          loadMoreBooks();
        }}
      >
        Load More
      </button>
    </Container>
  );
};

export default List;
