import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { selectIsLoadingAuth } from 'redux/auth/selectorsAuth';
import {
  Button,
  FormFormik,
  InputFormik,
  Label,
  ErrorText,
} from 'components/commonStyles';

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

  const handleSubmit = ({email, password}) => {
    dispatch(logIn({ email, password }));
  };

  return (
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormFormik autoComplete="off">
          <Label htmlFor={loginId}>
            <span>Login/Email</span>
            <InputFormik
              type="text"
              name="email"
              id={loginId}
              placeholder="Enter your login"
            />
          </Label>
          <ErrorText name="email" component="p" />
          <Label htmlFor={passwordIdLogg}>
            <span>Password</span>
            <InputFormik
              type="password"
              name="password"
              id={passwordIdLogg}
              placeholder="Enter password"
            />
          </Label>
          <ErrorText name="password" component="p" />
          <Button type="submit">
            {isLoading ? <>Loading...</> : <>Login</>}
          </Button>
        </FormFormik>
      </Formik>
    </main>
  );
};
export default Login;
