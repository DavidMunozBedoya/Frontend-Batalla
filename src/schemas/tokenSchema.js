import * as Yup from 'yup';

export const tokenSchema = Yup.object().shape({
   token: Yup.number()
   .trim()
});