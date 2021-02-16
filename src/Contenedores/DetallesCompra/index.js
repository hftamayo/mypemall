import { Box } from 'grommet';
import React from 'react';
import DetallesCompraProvider from './Context';
import Form from './Form';

function DetallesCompra() {
  return (
    <DetallesCompraProvider>
      <Box direction="row" pad="medium" gap="medium">
        <Form />
      </Box>
    </DetallesCompraProvider>
  );
}

export default DetallesCompra;
