import React from 'react'
import { Admin, Resource } from 'react-admin'
import postgrestProvider from 'aor-postgrest-client'
import createAuthClient from './authClient'
import { TodosList } from './todos';
import httpClient from "./httpClient";

const dataProvider = postgrestProvider('/api', httpClient);
const authProvider = createAuthClient('/api');
const App = () => <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
>
    <Resource name="todos" list={TodosList} />
</Admin>;

export default App;