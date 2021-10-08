import React from 'react';
import styled from 'styled-components';
import BlueButton from '../BlueButton';
import {sendRequest, setCurrentRequest, setHasRequestSyntaxError} from '../../store/actions';
import {useAppDispatch, useAppSelector} from '../../store';

const Wrapper = styled.div`
  background: #FFFFFF;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

const GithubLink = styled.a`
  color: #999999;
  text-decoration: none;
`;

const FormatButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const FormatButtonTitle = styled.div`
  font-size: 16px;
  margin-left: 8px;
`;

const Footer = () => {
  const dispatch = useAppDispatch();
  const currentRequestValue = useAppSelector(state => state.requests.currentRequest);

  const sendRequestHandler = () => {
    dispatch(sendRequest(currentRequestValue));
  }

  const formatRequest = () => {
    try {
      let data = JSON.parse(currentRequestValue);
      dispatch(setCurrentRequest({
        currentRequest: JSON.stringify(data, null, 4)
      }))
    }
    catch (e) {
      dispatch(setHasRequestSyntaxError(true));
    }
  }

  return (
    <Wrapper>
      <BlueButton isLoading={false} isDisabled={false} type={'button'}  onClick={sendRequestHandler}>Отправить</BlueButton>
      <GithubLink href={"https://github.com/davadzh"}>@davadzh</GithubLink>
      <FormatButton onClick={formatRequest}>
        <img src='/icons/format.svg' alt='' />
        <FormatButtonTitle>Форматировать</FormatButtonTitle>
      </FormatButton>
    </Wrapper>
  );
};

export default Footer;