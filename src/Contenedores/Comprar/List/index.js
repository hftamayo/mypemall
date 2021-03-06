import { Box, Text } from 'grommet';
import { Refresh, StatusCritical } from 'grommet-icons';
import React, { useContext } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { log } from '../../../utils';
import { ComprarContext } from '../Context';
import { getEntries } from '../sdk/deliveryAPI';
import { deleteEntry } from '../sdk/managementAPI';
import Table from './Table';

function List() {
  const {
    current: [, setCurrent],
  } = useContext(ComprarContext);

  const { data, isFetching, error, isLoading } = useQuery(
    'fetchProductos',
    function () {
      return getEntries();
    }
  );

  const queryClient = useQueryClient();

  const deleteMutation = useMutation(
    function (id) {
      return deleteEntry(id);
    },
    {
      onSuccess: function () {
        log('informacion', 'Accion ejecutada satisfactoriamente');
        queryClient.invalidateQueries('fetchProductos');
      },
      onError: function (err) {
        console.error(err);
      },
      onSettled: function () {},
    }
  );

  const deleteProducto = (id) => {
    deleteMutation.mutate(id);
  };

  const setCurrentProducto = (producto) => {
    setCurrent(producto);
  };

  if (isLoading) {
    return (
      <Box direction="row" gap="medium">
        <Text color="accent-1">
          Cargando... <Refresh color="accent-1" />
        </Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box direction="row" gap="medium">
        <Text color="accent-2">
          Error en el proceso de carga... <StatusCritical color="accent-2" />
        </Text>
      </Box>
    );
  }

  return (
    <Box pad="medium" elevation="medium" fill gap="small">
      {isFetching && (
        <Box direction="row" gap="medium">
          <Text color="accent-2">
            Obteniendo los datos... <Refresh color="accent-2" />
          </Text>
        </Box>
      )}

      <Table
        productos={data}
        setCurrent={setCurrentProducto}
        deleteProducto={deleteProducto}
      />
    </Box>
  );
}

export default List;