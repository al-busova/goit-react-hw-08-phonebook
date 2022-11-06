import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { selectIsLoadingAuth } from 'redux/auth/selectorsAuth';

 const Login = () => {
  const loginId = nanoid();
     const passwordIdLogg = nanoid();
     const isLoading = useSelector(selectIsLoadingAuth);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().min(7).max(16).required(),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(logIn({ email: values.email, password: values.password }));
    actions.resetForm();
  };
  return (
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor={loginId}>
            Login/Email
            <Field type="text" name="email" id={loginId} placeholder='enter your login'/>
            <ErrorMessage name="email" component="div" />
          </label>
          <label htmlFor={passwordIdLogg}>
            Password
            <Field type="password" name="password" id={passwordIdLogg} placeholder='enter password'/>
            <ErrorMessage name="password" component="div" />
          </label>

          <button type="submit">{isLoading ? <>Loading...</> : <>Go in</>}</button>
        </Form>
      </Formik>
    </main>
  );
};
export default Login;