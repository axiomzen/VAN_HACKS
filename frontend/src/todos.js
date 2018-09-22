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

export const TodosList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="task" />
      <EditButton basePath="/todos" />
    </Datagrid>
  </List>
);

export const TodoCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <LongTextInput source="task" />
    </SimpleForm>
  </Create>
);
