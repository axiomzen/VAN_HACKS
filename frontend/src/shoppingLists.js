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
      <TextField source="task" />
      <EditButton basePath="/shopping_list" />
    </Datagrid>
  </List>
);

export const ShoppingListsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <LongTextInput source="task" />
    </SimpleForm>
  </Create>
);

export const ShoppingListsEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <LongTextInput source="task" />
    </SimpleForm>
  </Edit>
);
