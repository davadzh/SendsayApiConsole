import React from 'react';
import styled from 'styled-components';
import failureFace from '../media/icons/failure-face.svg';
import {useAppSelector} from '../store';
import {Colors} from '../helpers/constants/styleConstants';
import {staticTexts} from '../helpers/constants/namingConstants';

const LoginErrorNotificationStyled = styled.div`
  background: rgba(207, 44, 0, 0.1);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;

  & > img {
    margin-right: 8px;
    margin-top: 3px;
  }
`;

const FailureTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > h2 {
    margin: 0;
    display: block;
    color: ${Colors.errorRed};
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
  }

  & > p {
    margin: 0;
    display: block;
    color: ${Colors.errorRed};
    opacity: 0.5;
    font-size: 12px;
    word-break: break-all;
    line-height: 20px;
  }
`;

const LoginErrorNotification = React.memo(() => {
  const errorMessage = useAppSelector((state) => state.error.authErrorMessage);

  return (
    <LoginErrorNotificationStyled>
      <img src={failureFace} alt="" />
      <FailureTextWrapper>
        <h2>{staticTexts.LOGIN_FAILURE}</h2>
        <p>{errorMessage}</p>
      </FailureTextWrapper>
    </LoginErrorNotificationStyled>
  );
});

export default LoginErrorNotification;
