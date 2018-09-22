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

export const ItemList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <EditButton basePath="/item_inventory" />
    </Datagrid>
  </List>
);

export const ItemCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput label="Type" source="item_type" reference="item_types">
        <AutocompleteInput optionText="description"/>
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const ItemEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
    </SimpleForm>
  </Edit>
);
