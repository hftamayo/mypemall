import { Box } from 'grommet';
import React from 'react';
import VerCarritoProvider from './Context';
import List from './List';

function VerCarrito() {
  return (
    <VerCarritoProvider>
      <Box direction="row" pad="medium" gap="medium">
        <List />
      </Box>
    </VerCarritoProvider>
  );
}

export default VerCarrito;
