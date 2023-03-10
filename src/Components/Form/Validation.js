import * as Yup from 'yup';

export const validationSchema = Yup.object({
  username: Yup.string().required('Username is required.'),
  password: Yup.string().min(6, 'Password must have at least 8 characters'),
});
