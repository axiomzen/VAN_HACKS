import React from 'react';
import { Route } from 'react-router-dom';

import Confirmation from './confirmation';
import ShoppingList from './ShoppingList';
import Pickup from './Pickup';

const confirmation = (
  <Route exact path="/confirmation" component={Confirmation} />
);

const shoppingList = (
  <Route exact path="/shopping-list/:id" component={ShoppingList} />
);

const pickup = <Route exact path="/pickup" component={Pickup} />;

export default [confirmation, shoppingList, pickup];
