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
  BooleanInput
} from 'react-admin';

export const ReferralsFormFieldsList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="task" />
      <EditButton basePath="/shopping_list" />
    </Datagrid>
  </List>
);

export const ReferralsFormFieldsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="label name" />
      <SelectInput source="type" choices={[
        { id: 'shortAnswer', name: 'Short answer' },
        { id: 'paragraph', name: 'Paragraph' },
        { id: 'multipleChoices', name: 'Multiple choice' },
        { id: 'checkboxes', name: 'Checkbox' },
        { id: 'dropDown ', name: 'Drop-down' },
      ]} />
      <BooleanInput label="Optional" source="commentable" />
    </SimpleForm>
  </Create>
);

export const ReferralsFormFieldsEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <LongTextInput source="task" />
    </SimpleForm>
  </Edit>
);
