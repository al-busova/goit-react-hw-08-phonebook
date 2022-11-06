import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export const Login = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup.string().email(),
    password: yup.string().min(7).max(16).required(),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(logIn({ email: values.email, password: values.password }));
    toast('Loggined!');
    actions.resetForm();
    console.log(values);
  };
  return (
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor="email">
            Login/Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label htmlFor="password">
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </label>

          <button type="submit">Зайти</button>
        </Form>
      </Formik>
    </main>
  );
};
