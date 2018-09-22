import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

export const TodosList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="task" />
            <EditButton basePath="/todos" />
        </Datagrid>
    </List>
);