import { Box } from 'grommet';
import React from 'react';
import ClientesProvider from './Context';
import Form from './Form';

function NuevoCliente() {
  return (
    <ClientesProvider>
      <Box direction="row" pad="medium" gap="medium" alignSelf="center">
        <Form />
      </Box>
    </ClientesProvider>
  );
}

export default NuevoCliente;
