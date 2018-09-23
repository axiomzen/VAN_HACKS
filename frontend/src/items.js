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
  AutocompleteInput,
  TextInput,
  ReferenceField
} from 'react-admin';

export const ItemList = props => (
  <List {...props} title="Items">
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="Type" source="item_type" reference="item_types">
        <TextField source="item_category"/>
      </ReferenceField>
      <TextField source="added_by" />
      <EditButton basePath="/item_inventory" />
    </Datagrid>
  </List>
);

export const ItemCreate = props => (
  <Create {...props} title="Create item">
    <SimpleForm>
      <ReferenceInput required={true} label="Type" source="item_type" reference="item_types">
        <SelectInput optionText="item_category"/>
      </ReferenceInput>
      {/* TODO:
      <ReferenceInput label="Status" source="item_status" reference="item_status">
        <SelectInput optionText="status"/>
      </ReferenceInput>
      */}
      <TextInput source="added_by" required={true}/>
    </SimpleForm>
  </Create>
);

export const ItemEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput required={true} label="Type" source="item_type" reference="item_types">
        <SelectInput optionText="item_category"/>
      </ReferenceInput>
      <TextInput source="added_by" required={true}/>
    </SimpleForm>
  </Edit>
);
