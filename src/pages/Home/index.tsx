import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Slick from '../../components/Slick';

import { useBooks } from '../../hooks/books';
import { ListBooks } from '../../dtos/books';

import { Container, HeaderShelf, TitleShelf, ButtonViewMore } from './styles';

interface PropsCategory {
  idCategory: number;
  name: string;
  data: ListBooks[];
}

const Home: React.FC = () => {
  const { requestBooks, books } = useBooks();

  const [categories, setCategories] = useState<PropsCategory>({
    idCategory: 1,
    name: 'tecnologia',
    data: [],
  });

  console.log(categories);

  useEffect(() => {
    requestBooks(categories.name, 1);
  }, []);

  useEffect(() => {
    setCategories({ ...categories, data: books });
  }, [books]);

  return (
    <>
      <Header
        isMenu
        functionOnClick={() => {
          console.log('veio aqui');
        }}
      />
      <Container>
        <HeaderShelf>
          <TitleShelf>{categories.name}</TitleShelf>
          <Link to={`/list/${categories.name}`}>
            <ButtonViewMore type="button">Ver mais</ButtonViewMore>
          </Link>
        </HeaderShelf>
        {categories.data ? (
          <div>
            <Slick data={categories.data} />
          </div>
        ) : null}

        <Slick />
      </Container>
    </>
  );
};

export default Home;
