import { Box, Button, Form, FormField } from 'grommet';
import React from 'react';
//import { useParams } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";

function FormLayout({ onSubmit, defaultValues }) {
  const formik = useFormik({
    initialValues: {
      ...defaultValues,
      correoeCliente: "",
      claveCliente: ""
    },
    validationSchema: Yup.object({
      correoeCliente: Yup.string()
      .email("Formato de correo invalido")
      .required("Requerido"),
      claveCliente: Yup.string()
      .min(8, "minimo 8 caracteres")
      .required("Requerido"),
    }),

    onSubmit: (values) => {
      onSubmit(values);
    }
  });

  const [value, setValue] = React.useState(defaultValues);
  
  return (
    <Form
      value={value}
      onReset={() => setValue(formik.initialValues)}
      onSubmit={formik.handleSubmit}
    >
      <FormField label="Correo Electronico" name="lblcorreoeCliente">
        <input 
        type="text"
        name="correoeCliente"
        value={formik.values.correoeCliente}
        onChange={formik.handleChange}
        />
        {
          formik.errors.correoeCliente && formik.touched.correoeCliente && (
            <p style={{color:"red"}}>{formik.errors.correoeCliente}</p>
          )}
      </FormField>

      <FormField label="Clave" name="lblclaveCliente">
      <input 
        type="password"
        name="claveCliente"
        value={formik.values.claveCliente}
        onChange={formik.handleChange}
        />
        {
          formik.errors.claveCliente && formik.touched.claveCliente && (
            <p style={{color:"red"}}>{formik.errors.claveCliente}</p>
          )}

      </FormField>

      <Box direction="row" justify="between" margin={{ top: 'medium' }}>
        <Button type="reset" label="Resetear" />
        <Button type="submit" label="Validar" primary />
      </Box>
    </Form>
  );
}

export default FormLayout;
