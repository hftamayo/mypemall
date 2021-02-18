import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, DataTable, Text } from 'grommet';
import { Actions, Gift } from 'grommet-icons';

function Table({ productos, setCurrent, deleteProducto }) {
  const addComprar = useHistory();
  return (
    <DataTable
    columns={[
      { property: 'codigoProducto', primary: true, header: <Text>Cod Producto</Text> },
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
                onClick={() => 
                  addComprar.push(`/detallecompra/${row.id}/${row.nombreProducto}`)
                }
                icon={<Gift color="accent-2" />}
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