import React, {useEffect, useState} from 'react';
import {withRouter, useHistory} from 'react-router-dom';
import styled from 'styled-components';

import {useAppDispatch, useAppSelector} from '../store';
import {authenticate} from 'src/store/actions';
import BlueButton from '../components/BlueButton';
import Input from '../components/Input';
import AuthForm from '../components/AuthForm';



const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #F7F7F7;
`;


const LogoStyled = styled.img`
  margin-bottom: 20px;
`;

const LoginPage = () => {
  const history = useHistory();

  const isLoading = useAppSelector(state => state.auth.loading);
  const isLoggedIn = useAppSelector(state => !!state.auth.sessionKey?.length);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/console');
    }
  }, [isLoggedIn]);

  return (
    <Wrapper>
      <LogoStyled src='/icons/logo.svg' alt='' />
      <AuthForm isLoading={isLoading}/>
    </Wrapper>
  );
}

export default LoginPage;
