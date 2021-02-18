import React from 'react';
//import { useHistory } from 'react-router-dom';
import { Box, Button, DataTable, Text } from 'grommet';
import { Actions, FormClose, FormEdit } from 'grommet-icons';
import { DateTime } from 'luxon';

function Table({ clientes, setCurrent, deleteCliente }) {
  //const addCliente = useHistory();
  return (
    <DataTable
    columns={[
      { property: 'codigoCliente', primary: true, header: <Text>Afiliado</Text> },
      { property: 'apellidosCliente', header: <Text>Apellidos</Text> },
      { property: 'nombresCliente', header: <Text>Nombres</Text> },
      {
        property: 'fnaCliente',
        header: <Text>Fecha de Nac.</Text>,
        render: (row) => {
          return DateTime.fromISO(row.fnaCliente).toLocaleString(
            DateTime.DATE_FULL
          );
        },
      },
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
                onClick={() => deleteCliente(row.id)}
                icon={<FormClose color="accent-2" />}
                plain
              />
            </Box>
          );
        },
      },
    ]}
    data={clientes}
    />
  );
}

export default Table;