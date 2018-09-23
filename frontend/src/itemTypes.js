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
  TextInput,
  Toolbar,
  SaveButton,
  AutocompleteInput
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
      <TextInput source="item_category" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);

export const ItemTypesEdit = props => (
  <Edit {...props} title="Edit item type">
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="item_category" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);
