import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import List from '../pages/List';
import DetailsBook from '../pages/DetailsBook';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/list/:category" component={List} />
    <Route path="/book/:bookId" component={DetailsBook} />
  </Switch>
);

export default Routes;
