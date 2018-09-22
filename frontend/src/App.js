import React from 'react';
import { Admin, Resource } from 'react-admin';
import postgrestProvider from './postgrestProvider';

import createAuthClient from './authClient';
import { ClientList, ClientCreate, ClientEdit } from './clients';
import { ItemList, ItemCreate, ItemEdit } from './items';

import httpClient from './httpClient';
import customRoutes from './customRoutes';
const dataProvider = postgrestProvider('/api', httpClient);

const authProvider = createAuthClient('/api');
const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    customRoutes={customRoutes}
  >
    <Resource
      name="clients"
      list={ClientList}
      create={ClientCreate}
      edit={ClientEdit}
    />

    <Resource
      name="item_inventory"
      list={ItemList}
      create={ItemCreate}
      edit={ItemEdit}
    />

    <Resource
      name="item_types"/>

    <Resource
      name="item_status"/>

    <Resource
      name="shopping_list_items"/>

    <Resource
      name="drop_locations"/>

    <Resource
      name="agencies"/>

  </Admin>
);

export default App;
