import { Box, Text } from 'grommet';
import { StatusCritical, StatusGood } from 'grommet-icons';
import React, { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { log } from '../../../utils';
import { ClientesContext } from '../Context';
import { createEntry, updateEntry } from '../sdk/managementAPI';
import FormLayout from './FormLayout';

function Form() {
  const {
    current: [current],
  } = useContext(ClientesContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(

   function ({ data, codigoCliente }) {
    if (!codigoCliente) {
      return createEntry(data);
    } else {
      console.log("Actualizar datos del cliente: " + codigoCliente);
      return updateEntry(codigoCliente, data);
    }
  },

    {
      onSuccess: function () {
        log('confirmacion', 'La accion fue ejecutada satisfactoriamente');
        queryClient.invalidateQueries('fetchClientes');
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
     codigoCliente: parseInt(values.codigoCliente, 10),
    };
    //este objeto debe eliminarse del payload puesto que no existe en el backend
    delete payload.cclaveCliente;
    console.log({ values, payload });

    if (isAddMode) {
      mutation.mutate({ data: payload });
    } else {
      mutation.mutate({ data: payload, codigoCliente: current.id});
    }
  };

  return (
    <Box pad="medium" elevation="medium" gap="small" width="large">
      {mutation.isSuccess && (
        <Box direction="row" gap="medium">
          <Text color="brand">
            Perfil del Cliente creado satisfactoriamente... <StatusGood color="brand" />
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
