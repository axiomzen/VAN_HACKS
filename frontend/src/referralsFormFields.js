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
  BooleanInput,
  BooleanField,
  SelectField
} from 'react-admin';

const inputTypes = [
  { id: 'TextInput', name: 'Short answer' },
  { id: 'LongTextInput', name: 'Paragraph' },
  { id: 'BooleanInput', name: 'Checkbox' },
  { id: 'FileInput', name: 'File' },
];

export const ReferralsFormFieldsList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <SelectField source="type" choices={inputTypes} />
      {/*<BooleanField source="optional" />*/}
      <EditButton basePath="/referrals_form_inputs" />
    </Datagrid>
  </List>
);

export const ReferralsFormFieldsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Label name" source="name" />
      <SelectInput label="Type" source="type" choices={inputTypes} />
      {/*<BooleanInput label="Optional" source="optional" />*/}
    </SimpleForm>
  </Create>
);

export const ReferralsFormFieldsEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label="Label name" source="name" />
      <SelectInput label="Type" source="type" choices={inputTypes} />
      {/*<BooleanInput label="Optional" source="optional" />*/}
    </SimpleForm>
  </Edit>
);
