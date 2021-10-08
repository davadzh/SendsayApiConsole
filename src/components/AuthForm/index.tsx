import React from 'react';
import * as yup from 'yup';
import {useFormik} from 'formik';
import Input from '../Input';
import BlueButton from '../BlueButton';
import styled from 'styled-components';
import {authenticate} from '../../store/actions';
import {useDispatch} from 'react-redux';
import {useAppDispatch} from '../../store';


const Form = styled.form`
  max-width: 520px;
  background: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 40px 30px;
`;

const Title = styled.h1`
  color: #0D0D0D;
  font-size: 24px;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 20px;
`;

const validationSchema = yup.object({
  login: yup.string().email("Некорректный email").required("Обязательное поле"),
  sublogin: yup.string(),
  password: yup.string().required("Обязательное поле"),
});

type AuthFormPropsType = {
  isLoading: boolean,
}

const AuthForm = ({isLoading}: AuthFormPropsType) => {

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      login: '' as string,
      sublogin: '' as string,
      password: '' as string,
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      dispatch(
        authenticate({
          login: formik.values.login,
          sublogin: formik.values.sublogin,
          password: formik.values.password,
        }),
      );
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Title>API-консолька</Title>
      <Input name={"login"} value={formik.values.login} label={"Логин"} changeHandler={formik.handleChange} />
      <Input name={"sublogin"} value={formik.values.sublogin} label={"Сублогин"} changeHandler={formik.handleChange} />
      <Input name={"password"} value={formik.values.password} label={"Пароль"} changeHandler={formik.handleChange} />
      <BlueButton type={'submit'} isDisabled={false} isLoading={isLoading}>Войти</BlueButton>
    </Form>
  );
};

export default AuthForm;