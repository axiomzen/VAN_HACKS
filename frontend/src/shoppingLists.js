import React from 'react';
import {
  Filter,
  List,
  Edit,
  Create,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  DisabledInput,
  LongTextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from 'react-admin';

export const ShoppingListsList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <EditButton basePath="/shopping_list_items" />
    </Datagrid>
  </List>
);

export const ShoppingListsEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <LongTextInput source="item_category" />
    </SimpleForm>
  </Edit>
);
