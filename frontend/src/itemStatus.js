import {Create, SimpleForm, TextInput} from "react-admin";
import React from "react";
import { parse } from 'query-string';

export const ItemStatusCreate = props => {

  const { item_inventory_id: item_inventory_id_string } = parse(props.location.search);
  const item_inventory_id = item_inventory_id_string ? parseInt(item_inventory_id_string, 10) : '';

  return <Create {...props} title="Create item status">
    <SimpleForm
      defaultValue={{ item_inventory_id }}
    >
      <TextInput source="status" required={true}/>
    </SimpleForm>
  </Create>
}

