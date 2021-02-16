import { Box, Button, DateInput, Form, FormField, TextInput } from 'grommet';
import React from 'react';

function FormLayout({ onSubmit, currentValues }) {
  const defaultValues = {
    ...currentValues,
  };

  const [value, setValue] = React.useState(defaultValues);

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
      <FormField label="Codigo Afiliado" name="lblcodigoCliente">
        <TextInput name="codigoCliente" />
      </FormField>


      <FormField label="Apellidos" name="lblapellidosCliente">
        <TextInput name="apellidosCliente" />
      </FormField>

      <FormField label="Nombres" name="lblnombresCliente">
        <TextInput name="nombresCliente" />
      </FormField>

      <FormField label="Correo Electronico" name="lblcorreoeCliente">
        <TextInput name="correoeCliente" />
      </FormField>

      <FormField label="Fecha Nacimiento" name="lblfnaCliente">
        <DateInput name="fnaCliente" format="yyyy-mm-dd" />
      </FormField>

      <FormField label="Clave" name="lblclaveCliente">
        <TextInput name="claveCliente" />
      </FormField>

      <FormField label="Confirmar Clave" name="lblcclaveCliente">
        <TextInput name="cclaveCliente" />
      </FormField>

      <Box direction="row" justify="between" margin={{ top: 'medium' }}>
        <Button type="reset" label="Resetear" />
        <Button type="submit" label="Guardar" primary />
      </Box>
    </Form>
  );
}

export default FormLayout;
