import React from 'react';
import { Box, Header } from 'grommet';

function PageFooter(props) {
  return (
    <Header background="brand" pad="medium">
      <Box justify="end">
          MYPEMALL, Demo Version
      </Box>
      
      <Box justify="end">
          Herbert Fernandez Tamayo, 2021
      </Box>
      
    </Header>
  );
}



export default PageFooter;
