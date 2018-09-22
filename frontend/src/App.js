import React from 'react';
import { Admin, Resource } from 'react-admin';
import postgrestProvider from './postgrestProvider';

import createAuthClient from './authClient';
import { ClientList, ClientCreate, ClientEdit } from './clients';
import { ItemList, ItemCreate, ItemEdit } from './items';

import httpClient from './httpClient';
import customRoutes from './customRoutes';
import fakeDataProvider from 'ra-data-fakerest';
// const dataProvider = postgrestProvider('/api', httpClient);

const dataProvider = fakeDataProvider({
  item_types: [
    { id: 0, description: 'test' },
  ],
  item_inventory: [
    { id: 0, item_type: 0 }
  ]
})

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
  </Admin>
);

export default App;
