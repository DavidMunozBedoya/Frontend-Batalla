import * as Yup from 'yup';

export const inputSchema = Yup.object().shape({

   phoneNumber: Yup.string()
      .transform((value, originalValue) => {
         return originalValue === "" ? undefined : value;
      })
      .required('Debe ingresar un número de teléfono')
      .max(10, "Revisa tu teléfono debe contener diez digitos")
      .min(10, 'te faltan digitos')
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