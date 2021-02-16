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
      <FormField label="Codigo" name="lblcodigoProducto">
        <TextInput name="codigoProducto" />
      </FormField>


      <FormField label="Nombre" name="lblnombreProducto">
        <TextInput name="nombreProducto" />
      </FormField>

      <FormField label="Precio de Venta" name="lblprecioProducto">
        <TextInput name="precioVentaProducto" />
      </FormField>

      <FormField label="Unidades Disponibles" name="lblcantidadProducto">
        <TextInput name="cantidadProducto" />
      </FormField>

      <FormField label="Imagen" name="lblimagenProducto">
      <TextInput name="imagenProducto" />
      </FormField>

      <Box direction="row" justify="between" margin={{ top: 'medium' }}>
        <Button type="reset" label="Resetear" />
        <Button type="submit" label="Guardar" primary />
      </Box>
    </Form>
  );
}

export default FormLayout;
