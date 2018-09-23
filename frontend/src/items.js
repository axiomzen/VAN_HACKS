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
  TextInput,
  ReferenceField,
  Button
} from 'react-admin';
import ChatBubbleIcon from '../node_modules/@material-ui/icons/ChatBubble';
import { Link } from 'react-router-dom';

const CreateStatusButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: '/item_status/create',
      search: `?item_inventory_id=${record.id}`
    }}
    label="Create status"
  >
    <ChatBubbleIcon />
  </Button>
);

export const ItemList = props => (
  <List {...props} title="Items">
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="Type" source="item_type" reference="item_types">
        <TextField source="item_category" />
      </ReferenceField>
      <TextField source="added_by" />
      <TextField label="Status" source="item_status" />
      <EditButton basePath="/item_inventory" />
    </Datagrid>
  </List>
);

export const ItemCreate = props => (
  <Create {...props} title="Create item">
    <SimpleForm>
      <ReferenceInput
        required={true}
        label="Type"
        source="item_type"
        reference="item_types"
      >
        <SelectInput optionText="item_category" />
      </ReferenceInput>
      {/* TODO:
      <ReferenceInput label="Status" source="item_status" reference="item_status">
        <SelectInput optionText="status"/>
      </ReferenceInput>
      */}
      <TextInput source="added_by" required={true} defaultValue="Tom Willis" />
    </SimpleForm>
  </Create>
);

export const ItemEdit = props => (
  <Edit {...props} title="Edit item">
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput
        required={true}
        label="Type"
        source="item_type"
        reference="item_types"
      >
        <SelectInput optionText="item_category" />
      </ReferenceInput>
      <TextInput source="added_by" required={true} />
      <SelectInput
        source="item_status"
        choices={[
          { id: 'matched', name: 'matched' },
          { id: 'in-stock', name: 'in-stock' },
          { id: 'donated', name: 'donated' }
        ]}
      />
      <CreateStatusButton />
    </SimpleForm>
  </Edit>
);
