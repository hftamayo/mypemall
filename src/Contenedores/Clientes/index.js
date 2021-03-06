import { Box } from 'grommet';
import React from 'react';
import ClientesProvider from './Context';
import Form from './Form';
import List from './List';

function Clientes() {
  return (
    <ClientesProvider>
      <Box direction="row" pad="medium" gap="medium">
        <List />
        <Form />
      </Box>
    </ClientesProvider>
  );
}

export default Clientes;
