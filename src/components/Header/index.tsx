import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useBooks } from '../../hooks/books';

import InputSeach from '../InputSeach';
import Drawer from '../Drawer';

import {
  Container,
  IconSearch,
  IconMenu,
  IconArrowLeft,
  TitleHeader,
} from './styles';

interface PropsHeader {
  isMenu: boolean;
  functionOnClick(): void;
}

const Header: React.FC<PropsHeader> = ({ isMenu, functionOnClick }) => {
  const history = useHistory();
  const { requestBooks } = useBooks();
  const [searchIsActive, setSearchIsActive] = useState(false);
  const [stateInputSearch, setStateInputSearch] = useState('');

  const handleSubmit = useCallback(() => {
    requestBooks(stateInputSearch, 1);
    history.push(`/list/${stateInputSearch}?`);
  }, [history, stateInputSearch, requestBooks]);

  const handleInputBlur = useCallback(() => {
    handleSubmit();
  }, [handleSubmit]);

  return (
    <Container>
      {isMenu ? (
        <Drawer />
      ) : (
        <IconArrowLeft
          onClick={() => {
            functionOnClick();
          }}
        />
      )}
      <TitleHeader>
        <div>Design Books</div>
      </TitleHeader>

      <IconSearch
        isActive={searchIsActive}
        onClick={() => {
          setSearchIsActive(!searchIsActive);
        }}
      />
      <form
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <InputSeach
          functionOnClikIcon={() => {
            setSearchIsActive(!searchIsActive);
          }}
          isActive={searchIsActive}
          placeholder="Pesquise por algo"
          value={stateInputSearch}
          onChange={(text) => {
            setStateInputSearch(text.target.value);
          }}
          onBlur={handleInputBlur}
        />
      </form>
    </Container>
  );
};

export default Header;
