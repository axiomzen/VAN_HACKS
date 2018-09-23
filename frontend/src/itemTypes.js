import React from 'react';
import {
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  EditButton,
  DisabledInput,
  SimpleForm,
  TextInput
} from 'react-admin';

export const ItemTypesList = props => (
  <List {...props} title="Item types">
    <Datagrid>
      <TextField source="id" />
      <TextField source="item_category" />
      <TextField source="description" />
      <EditButton basePath="/item_types" />
    </Datagrid>
  </List>
);

export const ItemTypesCreate = props => (
  <Create {...props} title="Create item type">
    <SimpleForm>
      <TextInput source="item_category" required={true}/>
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);

export const ItemTypesEdit = props => (
  <Edit {...props} title="Edit item type">
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="item_category" required={true} />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);
