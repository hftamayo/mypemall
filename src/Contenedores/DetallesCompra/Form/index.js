import { Box, Text } from 'grommet';
import { StatusCritical, StatusGood } from 'grommet-icons';
import React, { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { log } from '../../../utils';
import { DetallesCompraContext } from '../Context';
import { createEntry, updateEntry } from '../sdk/managementAPI';
import FormLayout from './FormLayout';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Form() {
  const viewComprar = useHistory();
  const { nProd }  =  useParams();
  const { user } = useAuth0();
  const { email } = user;
  const {
    current: [current],
  } = useContext(DetallesCompraContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(

   function ({ data, codigoCompra }) {
    if (!codigoCompra) {
      return createEntry(data);
    } else {
      console.log("Actualizar datos del producto: " + codigoCompra);
      return updateEntry(codigoCompra, data);
    }
  },

    {
      onSuccess: function () {
        log('confirmacion', 'La accion fue ejecutada satisfactoriamente');
        queryClient.invalidateQueries('fetchProductos');
        viewComprar.push(`/comprar/`);        
      },
      onError: function (err) {
        console.error(err);
      },
      onSettled: function () {},
    }
  );

  const isAddMode = !current.id;

  const onSubmit = (values) => {
    //console.log('valores enviados', values);

    const min = 1;
    const max = 100;
    const tmpCodigo = Math.trunc(min + Math.random() * (max - min));

    const payload = {
     ...values,
     //codigoCompra: parseInt(values.codigoCompra, 10),
     cantidadItemCompra: parseInt(values.cantidadItemCompra, 10),
     codigoProducto: nProd,
     codigoCliente: email,
     codigoCompra: tmpCodigo,
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
            La compra fue realizada satisfactoriamente... <StatusGood color="brand" />
          </Text>
        </Box>
      )}

      {mutation.isError && (
        <Box direction="row" gap="medium">
          <Text color="accent-1">
            Error en el proceso de creacion de compra... <StatusCritical color="accent-1" />
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
