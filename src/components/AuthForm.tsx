import React from 'react';
import * as yup from 'yup';
import {useFormik} from 'formik';
import Input from './Input';
import BlueButton from './BlueButton';
import styled from 'styled-components';
import {login} from '../store/actions';
import {useAppDispatch, useAppSelector} from '../store';
import LoginErrorNotification from './LoginErrorNotification';

const Form = styled.form`
  max-width: 520px;
  background: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 40px 30px;
`;

const Title = styled.h1`
  color: #0d0d0d;
  font-size: 24px;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 20px;
`;

const validationSchema = yup.object({
  login: yup.string().email('Некорректный email').required('Обязательное поле'),
  sublogin: yup.string(),
  password: yup.string().required('Обязательное поле'),
});

const AuthForm = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((state) => state.auth.isLoading);
  const errorMessage = useAppSelector((state) => state.error.authErrorMessage);

  const formik = useFormik({
    initialValues: {
      login: '' as string,
      sublogin: '' as string,
      password: '' as string,
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      dispatch(
        login({
          login: formik.values.login,
          sublogin: formik.values.sublogin,
          password: formik.values.password,
        })
      );
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Title>API-консолька</Title>
      {errorMessage && <LoginErrorNotification />}
      <Input
        type={'email'}
        name={'login'}
        label={'Логин'}
        value={formik.values.login}
        changeHandler={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasError={!!(formik.touched.login && formik.errors.login)}
      />
      <Input
        type={'text'}
        name={'sublogin'}
        label={'Сублогин'}
        value={formik.values.sublogin}
        changeHandler={formik.handleChange}
        handleBlur={formik.handleBlur}
        isOptional={true}
      />
      <Input
        type={'password'}
        name={'password'}
        label={'Пароль'}
        value={formik.values.password}
        changeHandler={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasError={!!(formik.touched.password && formik.errors.password)}
      />

      <BlueButton
        type={'submit'}
        isDisabled={formik.values.login.length === 0 || formik.values.password.length === 0}
        isLoading={isLoading}
      >
        Войти
      </BlueButton>
    </Form>
  );
};

export default AuthForm;
