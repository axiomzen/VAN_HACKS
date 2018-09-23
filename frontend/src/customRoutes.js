import React from 'react';
import { Route } from 'react-router-dom';

import Confirmation from './confirmation';
import WishList from './WishList';

const confirmation = (
  <Route exact path="/confirmation/:id" component={Confirmation} />
);

const wishList = <Route exact path="/wishlist/:id" component={WishList} />;

export default [confirmation, wishList];
