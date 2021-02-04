import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

import { ListBooks } from '../dtos/books';

interface BookContextData {
  book: ListBooks;
  requestBooks(query: string, pageSize: number): void;
  requestDetailsBook(query: string): void;
  books: ListBooks[];
}

const AuthContext = createContext<BookContextData>({} as BookContextData);

const BookProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ListBooks[]>([] as ListBooks[]);

  const [bookState, setBookState] = useState<ListBooks>({} as ListBooks);

  const requestBooks = useCallback(async (query: string, pageSize: number) => {
    const { data: response } = await api.get(
      `?q=${query}&startIndex=${pageSize}&maxResults=12`,
    );

    setData((prevState) => [...prevState, ...response.items]);
  }, []);

  const requestDetailsBook = useCallback(async (query: string) => {
    const { data: response } = await api.get(`/${query}`);

    setBookState(response);
  }, []);

  return (
    <AuthContext.Provider
      value={{ book: bookState, requestBooks, books: data, requestDetailsBook }}
    >
      {children}
    </AuthContext.Provider>
  );
};
function useBooks(): BookContextData {
  const context = useContext(AuthContext);

  return context;
}
export { BookProvider, useBooks };
