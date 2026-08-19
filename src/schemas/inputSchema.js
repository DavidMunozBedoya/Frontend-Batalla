import * as Yup from 'yup';

export const inputSchema = Yup.object().shape({

   phoneNumber: Yup.string()
      .transform((value, originalValue) => {
         return originalValue === "" ? undefined : value;
      })
      .required('Debe ingresar un número de teléfono')
      .matches(/^[0-9]+$/, 'Ingresa solo números y debe contener minímo 10 digitos')
   ,
   comments: Yup.string()
      .transform((value, originalValue) => {
         return originalValue === "" ? undefined : value;
      })
      .trim()
      .lowercase()
      .matches(
         /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
         'El contenido debe ser solo letras'
      )
   ,
});