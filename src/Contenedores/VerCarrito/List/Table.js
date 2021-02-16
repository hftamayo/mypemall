import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, DataTable, Text } from 'grommet';
import { Actions, Aid } from 'grommet-icons';

function Table({ productos, setCurrent, deleteProducto }) {
  const addComprar = useHistory();
  return (
    <DataTable
    columns={[
      { property: 'codigoCliente', primary: true, header: <Text>Cod Cliente</Text> },
      { property: 'codigoProducto', header: <Text>Cod Producto</Text> },
      { property: 'cantidadItemCompra', header: <Text># Items</Text> },
    ]}
    data={productos}
    />
  );
}

export default Table;