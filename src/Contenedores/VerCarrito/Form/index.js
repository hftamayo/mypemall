import { Box, Text } from 'grommet';
import { StatusCritical, StatusGood } from 'grommet-icons';
import React, { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { log } from '../../../utils';
import { ProductosContext } from '../Context';
import { createEntry, updateEntry } from '../sdk/managementAPI';
import FormLayout from './FormLayout';

function Form() {
  const {
    current: [current],
  } = useContext(ProductosContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(

   function ({ data, codigoProducto }) {
    if (!codigoProducto) {
      return createEntry(data);
    } else {
      console.log("Actualizar datos del producto: " + codigoProducto);
      return updateEntry(codigoProducto, data);
    }
  },

    {
      onSuccess: function () {
        log('confirmacion', 'La accion fue ejecutada satisfactoriamente');
        queryClient.invalidateQueries('fetchProductos');
      },
      onError: function (err) {
        console.error(err);
      },
      onSettled: function () {},
    }
  );

  const isAddMode = !current.id;

  const onSubmit = (values) => {
    console.log('valores enviados', values);

    const payload = {
      //casting de objetos text que en el backend son int
     ...values,
     codigoProducto: parseInt(values.codigoProducto, 10),
     precioVentaProducto: parseInt(values.precioVentaProducto, 10),
     cantidadProducto: parseInt(values.cantidadProducto, 10),
    };
    console.log({ values, payload });

    if (isAddMode) {
      mutation.mutate({ data: payload });
    } else {
      mutation.mutate({ data: payload, codigoProducto: current.id});
    }
  };

  return (
    <Box pad="medium" elevation="medium" gap="small" width="large">
      {mutation.isSuccess && (
        <Box direction="row" gap="medium">
          <Text color="brand">
            Perfil del Producto creado satisfactoriamente... <StatusGood color="brand" />
          </Text>
        </Box>
      )}

      {mutation.isError && (
        <Box direction="row" gap="medium">
          <Text color="accent-1">
            Error en el proceso de creacion del perfil... <StatusCritical color="accent-1" />
          </Text>
        </Box>
      )}

      <FormLayout
        onSubmit={onSubmit}
        currentValues={current}
        key={current.id}
      />
    </Box>
  );
}

export default Form;
