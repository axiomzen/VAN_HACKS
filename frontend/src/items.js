import React from 'react';
import {
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  EditButton,
  DisabledInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  AutocompleteInput
} from 'react-admin';

export const ItemList = props => (
  <List {...props} title="Items">
    <Datagrid>
      <TextField source="id" />
      <EditButton basePath="/item_inventory" />
    </Datagrid>
  </List>
);

export const ItemCreate = props => (
  <Create {...props} title="Create item">
    <SimpleForm>
      <ReferenceInput label="Type" source="item_type" reference="item_types">
        <AutocompleteInput optionText="description"/>
      </ReferenceInput>
      <ReferenceInput label="Status" source="item_status" reference="item_status">
        <SelectInput optionText="status"/>
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