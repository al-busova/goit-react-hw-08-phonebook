import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from 'redux/auth/authOperations';
import { selectIsLoadingAuth } from 'redux/auth/selectorsAuth';
import {
  Label,
  Button,
  FormFormik,
  InputFormik,
  ErrorText,
} from 'components/commonStyles';

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
        <FormFormik autoComplete="off">
          <Label htmlFor={nameIdReg}>
            <span>Name</span>
            <InputFormik
              id={nameIdReg}
              type="text"
              name="name"
              placeholder="Create name"
            />
          </Label>
          <ErrorText name="name" component="p" />
          <Label htmlFor={emailIdReg}>
            <span>Email</span>
            <InputFormik
              id={emailIdReg}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </Label>
          <ErrorText name="email" component="p" />
          <Label htmlFor={passwordIdReg}>
            <span>Password</span>
            <InputFormik
              id={passwordIdReg}
              type="password"
              name="password"
              placeholder="Create password"
            />
          </Label>
          <ErrorText name="password" component="p" />
          <Button type="submit">
            {isLoading ? <>Loading...</> : <>Register</>}
          </Button>
        </FormFormik>
      </Formik>
    </main>
  );
};
export default Registration;
