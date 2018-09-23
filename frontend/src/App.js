import React from 'react';
import { Admin, Resource } from 'react-admin';
import postgrestProvider from './postgrestProvider';

import createAuthClient from './authClient';
import { ClientList, ClientCreate, ClientEdit } from './clients';
import { ItemList, ItemCreate, ItemEdit } from './items';

import httpClient from './httpClient';
import customRoutes from './customRoutes';
import {ItemTypesCreate, ItemTypesEdit, ItemTypesList} from "./itemTypes";
const dataProvider = postgrestProvider('/api', httpClient);

// TODO:
// const authProvider = createAuthClient('/api');
const App = () => (
  <Admin
    dataProvider={dataProvider}
    // TODO: re-enable later
    // authProvider={authProvider}
    customRoutes={customRoutes}
  >
    <Resource
      name="clients"
      list={ClientList}
      create={ClientCreate}
      edit={ClientEdit}
    />

    <Resource
      options={{label: "Items"}}
      name="item_inventory"
      list={ItemList}
      create={ItemCreate}
      edit={ItemEdit}
    />

    <Resource
      options={{label: "Items types"}}
      name="item_types"
      list={ItemTypesList}
      create={ItemTypesCreate}
      edit={ItemTypesEdit}
      />

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
