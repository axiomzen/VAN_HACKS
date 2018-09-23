import React from 'react';
import { Route } from 'react-router-dom';

import Confirmation from './confirmation';
import ShoppingList from './ShoppingList';

const confirmation = (
  <Route exact path="/confirmation/:id" component={Confirmation} />
);

const shoppingList = (
  <Route exact path="/shoppingList/:id" component={ShoppingList} />
);

export default [confirmation, shoppingList];
