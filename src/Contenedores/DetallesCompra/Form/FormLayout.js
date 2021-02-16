import { Box, Button, DateInput, Form, FormField, TextInput } from 'grommet';
import React from 'react';
import { useParams } from 'react-router-dom';

function FormLayout({ onSubmit, currentValues }) {
  const defaultValues = {
    ...currentValues,
  };

  const [value, setValue] = React.useState(defaultValues);
  const { idProd, nProd }  =  useParams();
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
        <p>ID de la Compra: <b><i>{ idProd }</i></b>
        , Nombre del Producto: <b><i>{ nProd }</i></b></p>
      </div>

      <FormField label="Codigo Compra" name="lblcodigoCompra">
        <TextInput name="codigoCompra" />
      </FormField>

      <FormField label="Fecha Compra" name="lblfechaCompra">
        <DateInput name="fechaCompra" format="yyyy-mm-dd" />
      </FormField>

      <FormField label="No Items" name="lblcantidadItemCompra">
        <TextInput name="cantidadItemCompra" />
      </FormField>

      <FormField label="Codigo Producto" name="lblcodigoProducto">
        <TextInput name="codigoProducto" />
      </FormField>      

      <FormField label="Codigo Cliente" name="lblcodigoCliente">
        <TextInput name="codigoCliente" />
      </FormField>

      <Box direction="row" justify="between" margin={{ top: 'medium' }}>
        <Button type="reset" label="Resetear" />
        <Button type="submit" label="Guardar" primary />
      </Box>
    </Form>
  );
}

export default FormLayout;
