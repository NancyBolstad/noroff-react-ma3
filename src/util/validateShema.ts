import * as yup from 'yup';

const schema: yup.ObjectSchema = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().min(4, 'At least four characters'),
});

export default schema;
