import { Box, Text } from 'grommet';
import { StatusCritical, StatusGood } from 'grommet-icons';
import React, { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { log } from '../../../utils';
import { ClientesContext } from '../Context';
import { validateEntry } from '../sdk/managementAPI';
import FormLayout from './FormLayout';
import { useHistory } from 'react-router-dom';

function Form() {
  const viewHome = useHistory();
  const {
    current: [current],
  } = useContext(ClientesContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(

   function ({ data, correoCliente }) {
    if (!correoeCliente) {
      return validateEntry(data);
    }
  },

    {
      onSuccess: function () {
        log('Informacion', 'Credenciales validadas');
        queryClient.invalidateQueries('fetchClientes');
        viewHome.push(`/`);
      },
      onError: function (err) {
        console.error(err);
      },
      onSettled: function () {},
    }
  );

  const onSubmit = (values) => {
    console.log('valores enviados', values);

    const payload = {
      //casting de objetos text que en el backend son int
     ...values
    };
    console.log({ values, payload });

    mutation.mutate({ data: payload });
  };

  return (
    <Box pad="medium" elevation="medium" gap="small" width="large">
      {mutation.isError && (
        <Box direction="row" gap="medium">
          <Text color="accent-1">
            Las credenciales son erroneas. Verifique <StatusCritical color="accent-1" />
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
