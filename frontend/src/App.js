import React from 'react';
import { Admin, Resource } from 'react-admin';
import postgrestProvider from './postgrestProvider';
import createAuthClient from './authClient';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LabelIcon from '@material-ui/icons/Label';
import { ClientList, ClientCreate, ClientEdit } from './clients';
import {
  ShoppingListsList,
  ShoppingListsCreate,
  ShoppingListsEdit
} from './shoppingLists';
import {
  ReferralsFormFieldsList,
  ReferralsFormFieldsCreate,
  ReferralsFormFieldsEdit
} from './referralsFormFields';
import { ItemList, ItemCreate, ItemEdit } from './items';

// TODO: re-enable later
// import httpClient from './httpClient';
import customRoutes from './customRoutes';
import NavHeaderController from './NavHeaderController';
import {ItemTypesCreate, ItemTypesEdit, ItemTypesList} from "./itemTypes";
import {ItemStatusCreate} from "./itemStatus";

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
    <NavHeaderController />
    <Resource
      options={{ label: 'Clients form' }}
      name="referrals_form_inputs"
      list={ReferralsFormFieldsList}
      create={ReferralsFormFieldsCreate}
      edit={ReferralsFormFieldsEdit}
      icon={DescriptionIcon}
    />
    <Resource
      name="clients"
      list={ClientList}
      create={ClientCreate}
      edit={ClientEdit}
      icon={PersonIcon}
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
      icon={LabelIcon}
      />

    <Resource
      options={{label: "Item status"}}
      name="item_status"
      create={ItemStatusCreate}

    />

    <Resource
      name="shopping_list_items"
      options={{ label: 'Shopping lists' }}
      list={ShoppingListsList}
      create={ShoppingListsCreate}
      edit={ShoppingListsEdit}
      icon={ShoppingBasketIcon}
      />

    <Resource
      name="drop_locations"/>

    <Resource
      name="agencies"/>

  </Admin>
);

export default App;
