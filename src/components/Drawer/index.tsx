import React, { useState, createRef } from 'react';

import { Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import {
  AreaDrawer,
  IconMenu,
  AreaIconMenu,
  IconHome,
  AreaName,
  AreaIcons,
  AreaItens,
  Itens,
  ButtonMenu,
} from './styles';

interface ListMenu {
  id: string;
  route: string;
  name: string;
  icon?: string;
}

interface ArrayListMenu {
  options: Array<ListMenu>;
}

const TemporaryDrawer: React.FC = () => {
  const [state, setState] = useState<boolean>(false);

  const [listMenu, setListMenu] = useState<ArrayListMenu>({
    options: [
      {
        id: '1',
        name: 'Home',
        route: '/',
        icon: 'Home',
      },
    ],
  });

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  const returnIcon = (iconName: string | undefined): any => {
    if (iconName === 'Home') {
      return <IconHome />;
    }
  };

  const ListMenu: React.FC = () => (
    <AreaDrawer onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {listMenu.options.map((text) => (
          <AreaItens key={text.id}>
            <Link
              to={text.route}
              style={{ textDecoration: 'none', width: '100%', height: '100%' }}
            >
              <Itens>
                <AreaIcons>{returnIcon(text.icon)}</AreaIcons>
                <AreaName>{text.name}</AreaName>
              </Itens>
            </Link>
          </AreaItens>
        ))}
      </List>
    </AreaDrawer>
  );

  return (
    <div ref={createRef}>
      <ButtonMenu onClick={toggleDrawer(true)}>
        <AreaIconMenu>
          <IconMenu />
        </AreaIconMenu>
      </ButtonMenu>
      <Drawer open={state} onClose={toggleDrawer(false)}>
        <ListMenu />
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
