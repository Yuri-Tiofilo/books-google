import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import { useBooks } from '../../hooks/books';

const Home: React.FC = () => {
  const { book, requestBooks, books } = useBooks();
  console.log(books);

  const [query, setQuery] = useState<string>('harrypotter');

  return (
    <Container>
      <h1>Home</h1>
      <Link to={`/list/${query}`}>
        <button type="button">Acessa listagem</button>
      </Link>
    </Container>
  );
};

export default Home;
