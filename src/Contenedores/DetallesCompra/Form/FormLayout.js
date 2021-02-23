import { Box, Button, DateInput, Form, FormField, TextInput } from 'grommet';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function FormLayout({ onSubmit, currentValues }) {
  const defaultValues = {
    ...currentValues,
  };

  const [value, setValue] = React.useState(defaultValues);
  const { idProd, nProd }  =  useParams();
  /* obtencion de info de la sesion */
  const { user } = useAuth0();
  const { email } = user;

  return (
    <Form
      value={value}
      onChange={(nextValue, { touched }) => {
        console.log('Change', nextValue, touched);
        setValue(nextValue);
      }}
      onReset={() => setValue(defaultValues)}
      onSubmit={(event) => {
        console.log('Submit', event.value, event.touched);
        onSubmit(event.value);
      }}
    >
    <div>
      <p>
            ID de la Compra: <b><i>{ idProd }</i></b><br />
            Nombre del Producto: <b><i>{ nProd }</i></b><br />
            Cliente: <b><i>{ email }</i></b><br />
      </p>
    </div>

      <FormField label="Fecha Compra" name="lblfechaCompra">
        <DateInput name="fechaCompra" format="yyyy-mm-dd" />
      </FormField>

      <FormField label="No Items" name="lblcantidadItemCompra">
        <TextInput name="cantidadItemCompra" />
      </FormField>

      <Box direction="row" justify="between" margin={{ top: 'medium' }}>
        <Button type="reset" label="Resetear" />
        <Button type="submit" label="Guardar" primary />
      </Box>
    </Form>
  );
}

export default FormLayout;
