import * as yup from 'yup';

export const audioValidationSchema = yup.object().shape({
  file_path: yup.string().required(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
