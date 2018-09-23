import React from 'react';
import { Route } from 'react-router-dom';

import Confirmation from './confirmation';
import ShoppingList from './ShoppingList';
import Pickup from './Pickup';

const confirmation = (
  <Route exact path="/confirmation/:id" component={Confirmation} />
);

const shoppingList = (
  <Route exact path="/shoppingList/:id" component={ShoppingList} />
);

const pickup = <Route exact path="/pickup/:id" component={Pickup} />;

export default [confirmation, shoppingList, pickup];
