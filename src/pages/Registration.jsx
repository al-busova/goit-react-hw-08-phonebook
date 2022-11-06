import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/authOperations';

export const Registration = () => {

  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
    password: yup.string().min(7).max(16).required(),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(registration({ name: values.name, email: values.email, password: values.password }));
    toast('Registered!');
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
          <label htmlFor="name">
            Name
            <Field
              type="text"
              name="name"
            />
            <ErrorMessage name="name" />
          </label>

          <label htmlFor="email">
            Email
            <Field
              type="email"
              name="email"
            />
            <ErrorMessage name="email" component="div" />
          </label>

          <label htmlFor="password">
            Password
            <Field
              type="password"
              name="password"
            />
            <ErrorMessage name="password" />
          </label>
          <button type="submit">Зайти</button>
        </Form>
      </Formik>
    </main>
  );
};
