import { Box, Button, Form, FormField, TextInput } from 'grommet';
import React from 'react';
//import { useParams } from 'react-router-dom';

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
      <FormField label="Correo Electronico" name="lblcorreoeCliente">
        <TextInput name="correoeCliente" />
      </FormField>

      <FormField label="Clave" name="lblclaveCliente">
        <TextInput name="claveCliente" />
      </FormField>

      <Box direction="row" justify="between" margin={{ top: 'medium' }}>
        <Button type="reset" label="Resetear" />
        <Button type="submit" label="Validar" primary />
      </Box>
    </Form>
  );
}

export default FormLayout;
