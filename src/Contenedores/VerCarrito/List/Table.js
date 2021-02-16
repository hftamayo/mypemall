import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, DataTable, Text } from 'grommet';
import { Actions, FormClose, FormEdit } from 'grommet-icons';

function Table({ productos, setCurrent, deleteProducto }) {
  const addProducto = useHistory();
  return (
    <DataTable
    columns={[
      { property: 'codigoProducto', primary: true, header: <Text>Afiliado</Text> },
      { property: 'nombreProducto', header: <Text>Producto</Text> },
      { property: 'precioVentaProducto', header: <Text>Precio</Text> },
      { property: 'cantidadProducto', header: <Text>Cantidad</Text> },
      {
        property: 'actions',
        header: <Actions />,
        render: (row) => {
          return (
            <Box direction="row">
              <Button
                type="button"
                onClick={() => setCurrent(row)}
                icon={<FormEdit color="brand" />}
                plain
              />
              <Button
                type="button"
                onClick={() => deleteProducto(row.id)}
                icon={<FormClose color="accent-2" />}
                plain
              />
            </Box>
          );
        },
      },
    ]}
    data={productos}
    />
  );
}

export default Table;