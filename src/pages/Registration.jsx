import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from 'redux/auth/authOperations';
import { selectIsLoadingAuth } from 'redux/auth/selectorsAuth';

 const Registration = () => {
  const nameIdReg = nanoid();
  const emailIdReg = nanoid();
     const passwordIdReg = nanoid();
     const isLoading = useSelector(selectIsLoadingAuth);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(7).max(16).required(),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(
      registration({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
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
          <label htmlFor={nameIdReg}>
            Name
            <Field id={nameIdReg} type="text" name="name" placeholder ='create name' />
            <ErrorMessage name="name" />
          </label>

          <label htmlFor={emailIdReg}>
            Email
            <Field id={emailIdReg} type="email" name="email" placeholder ='enter email' />
            <ErrorMessage name="email" component="div" />
          </label>

          <label htmlFor={passwordIdReg}>
            Password
            <Field id={passwordIdReg} type="password" name="password" placeholder ='create password'  />
            <ErrorMessage name="password" />
          </label>
          <button type="submit">{isLoading ? <>Loading...</> : <>Зарегестрироваться</>}</button>
        </Form>
      </Formik>
    </main>
  );
};
export default Registration;