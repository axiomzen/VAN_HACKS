import React from 'react';
import { Admin, Resource } from 'react-admin';
import postgrestProvider from './postgrestProvider';

import createAuthClient from './authClient';
import { ClientList, ClientCreate, ClientEdit } from './clients';
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
  </Admin>
);

export default App;
