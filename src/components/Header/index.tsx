import React from 'react';

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
  return (
    <Container>
      {isMenu ? (
        <IconMenu />
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
      <IconSearch />
    </Container>
  );
};

export default Header;
