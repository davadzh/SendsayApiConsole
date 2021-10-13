import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

import {useAppSelector} from '../store';
import AuthForm from '../components/AuthForm';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f7f7f7;
`;

const LogoStyled = styled.img`
  margin-bottom: 20px;
`;

const LoginPage = () => {
  const history = useHistory();

  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/console');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <Wrapper>
      <LogoStyled src="/icons/logo.svg" alt="" />
      <AuthForm />
    </Wrapper>
  );
};

export default LoginPage;
