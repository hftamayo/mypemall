import { Box } from 'grommet';
import React from 'react';
import ClientesProvider from './Context';
import Form from './Form';

function VerificarCliente() {
  return (
    <ClientesProvider>
      <Box direction="row" pad="medium" gap="medium">
        <Form />
      </Box>
    </ClientesProvider>
  );
}

export default VerificarCliente;
