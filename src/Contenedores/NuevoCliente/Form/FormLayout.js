import { Box, Button, Form, FormField } from 'grommet';
//import React, { useState } from 'react';
import React from 'react';
//import { useParams } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";

function FormLayout({ onSubmit, currentValues }) {
  const formik = useFormik({
    initialValues: {
      codigoCliente: "",
      apellidosCliente: "",
      nombresCliente: "",
      fnaCliente: "",
      correoeCliente: "",
      claveCliente: "",
      cclaveCliente: ""
    },
    validationSchema: Yup.object({
      codigoCliente: Yup.string()
      .required("Requerido"),
      apellidosCliente: Yup.string()
      .min(3, "Minimo 3 caracteres")
      .max(15, "Maximo 15 caracteres")
      .required("Requerido"),
      nombresCliente: Yup.string()
      .min(3, "Minimo 3 caracteres")
      .max(15, "Maximo 15 caracteres")
      .required("Requerido"),      
      fnaCliente: Yup.date()
      .min(new Date('1970-01-01'))
      .max(new Date('2004-01-01'))
      .required("Requerido"),
      correoeCliente: Yup.string()
      .email("Formato de correo invalido")
      .required("Requerido"),
      claveCliente: Yup.string()
      .min(8, "minimo 8 caracteres")
      .required("Requerido"),
      cclaveCliente: Yup.string()
      .oneOf([Yup.ref("claveCliente")], "La clave debe coincidir")
      .required("Requerido")
    }),

    onSubmit: (values) =>{
      onSubmit(values);
    }

  });
  const defaultValues = {
    ...currentValues,
  };
  const [value, setValue] = React.useState(defaultValues);
  
  return (
    <Form
      value={value}
      onReset={() => setValue(defaultValues)}
      onSubmit={formik.handleSubmit}
    >
      <FormField label="Codigo Afiliado" name="lblcodigoCliente">
        <input
        type="text" 
        name="codigoCliente" 
        value={formik.values.codigoCliente}
        onChange={formik.handleChange}
        />
        {formik.errors.codigoCliente && formik.touched.codigoCliente && (
          <p style={{color:"red"}}>{formik.errors.codigoCliente}</p>
        )}
      </FormField>


      <FormField label="Apellidos" name="lblapellidosCliente">
        <input
        type="text" 
        name="apellidosCliente" 
        value={formik.values.apellidosCliente}
        onChange={formik.handleChange}
        />
        {formik.errors.apellidosCliente && formik.touched.apellidosCliente && (
          <p style={{color:"red"}}>{formik.errors.apellidosCliente}</p>
        )}
      </FormField>

      <FormField label="Nombres" name="lblnombresCliente">
      <input
        type="text" 
        name="nombresCliente" 
        value={formik.values.nombresCliente}
        onChange={formik.handleChange}
        />
        {formik.errors.nombresCliente && formik.touched.nombresCliente && (
          <p style={{color:"red"}}>{formik.errors.nombresCliente}</p>
        )}        
      </FormField>

      <FormField label="Correo Electronico" name="lblcorreoeCliente">
        <input
        type="email"
        name="correoeCliente"
        value={formik.values.correoeCliente}
        onChange={formik.handleChange}
        />
        {formik.errors.correoeCliente && formik.touched.correoeCliente && 
        (<p style={{color:"red"}}>{formik.errors.correoeCliente}</p>)}
      </FormField>

      <FormField label="Fecha Nacimiento" name="lblfnaCliente">
        <input 
        type="date"
        name="fnaCliente"
        value={formik.values.fnaCliente}
        onChange={formik.handleChange}
        />
        {formik.errors.fnaCliente && formik.touched.fnaCliente && 
        (<p style={{color:"red"}}>{formik.errors.fnaCliente}</p>)}        
      </FormField>

      <FormField label="Clave" name="lblclaveCliente">
        <input 
        type="password"
        name="claveCliente"
        value={formik.values.claveCliente}
        onChange={formik.handleChange}
        />
        {formik.errors.claveCliente && formik.touched.claveCliente && (
          <p style={{color:"red"}}>{formik.errors.claveCliente}</p>
        )}
      </FormField>

      <FormField label="Confirmar Clave" name="lblcclaveCliente">
      <input 
        type="password"
        name="cclaveCliente"
        value={formik.values.cclaveCliente}
        onChange={formik.handleChange}
        />
        {formik.errors.cclaveCliente && formik.touched.cclaveCliente && (
          <p style={{color:"red"}}>{formik.errors.cclaveCliente}</p>
        )}
      </FormField>

      <Box direction="row" justify="between" margin={{ top: 'medium' }}>
        <Button type="reset" label="Resetear" />
        <Button type="submit" label="Guardar" primary />
      </Box>
    </Form>
  );
}

export default FormLayout;
