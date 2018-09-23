import React from 'react';
import { Admin, Resource } from 'react-admin';
import postgrestProvider from './postgrestProvider';
import createAuthClient from './authClient';
import { ClientList, ClientCreate, ClientEdit } from './clients';
import { ShoppingListsList, ShoppingListsEdit } from './shoppingLists';
import {
  ReferralsFormFieldsList,
  ReferralsFormFieldsCreate,
  ReferralsFormFieldsEdit
} from './referralsFormFields';
import { ItemList, ItemCreate, ItemEdit } from './items';

// TODO: re-enable later
// import httpClient from './httpClient';
import customRoutes from './customRoutes';
import { ItemTypesCreate, ItemTypesEdit, ItemTypesList } from './itemTypes';

import './App.css';

// TODO: re-enable later
// const dataProvider = postgrestProvider('/api', httpClient);
const dataProvider = postgrestProvider('/api');

// TODO: re-enable later
// const authProvider = createAuthClient('/api');
const App = () => (
  <Admin
    dataProvider={dataProvider}
    // TODO: re-enable later
    // authProvider={authProvider}
    customRoutes={customRoutes}
  >
    <Resource
      options={{ label: 'Clients form' }}
      name="referrals_form_inputs"
      list={ReferralsFormFieldsList}
      create={ReferralsFormFieldsCreate}
      edit={ReferralsFormFieldsEdit}
    />
    <Resource
      name="clients"
      list={ClientList}
      create={ClientCreate}
      edit={ClientEdit}
    />

    <Resource
      options={{ label: 'Items' }}
      name="item_inventory"
      list={ItemList}
      create={ItemCreate}
      edit={ItemEdit}
    />

    <Resource
      options={{ label: 'Items types' }}
      name="item_types"
      list={ItemTypesList}
      create={ItemTypesCreate}
      edit={ItemTypesEdit}
    />

    <Resource name="item_status" />

    <Resource
      name="shopping_list_items"
      options={{ label: 'Shopping lists' }}
      list={ShoppingListsList}
      edit={ShoppingListsEdit}
    />

    <Resource name="drop_locations" />

    <Resource name="agencies" />
  </Admin>
);

export default App;
