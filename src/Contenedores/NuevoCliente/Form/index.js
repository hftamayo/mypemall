import { Box, Text } from 'grommet';
import { StatusCritical, StatusGood } from 'grommet-icons';
import React, { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { log } from '../../../utils';
import { ClientesContext } from '../Context';
import { createEntry } from '../sdk/managementAPI';
import FormLayout from './FormLayout';
import { useHistory } from 'react-router-dom';

function Form() {
  const viewHome = useHistory();
  const {
    current: [current],
  } = useContext(ClientesContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(

   function ({ data, codigoCliente }) {
    if (!codigoCliente) {
      return createEntry(data);
    } else {
      //return updateEntry(idMedcert, data);
    }
  },

    {
      onSuccess: function () {
        log('Informacion', 'Accion completada');
        queryClient.invalidateQueries('fetchClientes');
        viewHome.push(`/`);
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
     codigoCliente: parseInt(values.idMedCert, 10),
    };
    delete payload.cclaveCliente;
    delete payload.id;

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
            El perfil del cliente ha sido creado! <StatusGood color="brand" />
          </Text>
        </Box>
      )}

      {mutation.isError && (
        <Box direction="row" gap="medium">
          <Text color="accent-1">
            Ha ocurrido un error en la creacion del perfil <StatusCritical color="accent-1" />
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
