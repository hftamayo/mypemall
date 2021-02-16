import { Box } from 'grommet';
import React from 'react';
import ComprarProvider from './Context';
import List from './List';

function Comprar() {
  return (
    <ComprarProvider>
      <Box direction="row" pad="medium" gap="medium">
        <List />
      </Box>
    </ComprarProvider>
  );
}

export default Comprar;
