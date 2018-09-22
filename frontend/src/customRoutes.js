import React from 'react';
import { Route } from 'react-router-dom';

import Confirmation from './confirmation';

const confirmation = (
  <Route exact path="/confirmation/:id" component={Confirmation} />
);

export default [confirmation];
