import { Box } from 'grommet';
import React from 'react';
import ProductosProvider from './Context';
import Form from './Form';
import List from './List';

function Productos() {
  return (
    <ProductosProvider>
      <Box direction="row" pad="medium" gap="medium">
        <List />
        <Form />
      </Box>
    </ProductosProvider>
  );
}

export default Productos;
