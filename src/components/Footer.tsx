import React from 'react';
import styled from 'styled-components';
import BlueButton from './BlueButton';
import {sendRequest, setCurrentRequest, setHasRequestSyntaxError} from '../store/actions';
import {useAppDispatch, useAppSelector} from '../store';
import {ReactComponent as FormatIcon} from '../media/icons/format.svg';

const FooterStyled = styled.div`
  background: #ffffff;
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
  border: 2px solid #fff;
  box-sizing: content-box;
  cursor: pointer;
  display: flex;
  align-items: center;

  & > svg {
    transition: 0.2s ease;
  }

  & > div {
    transition: 0.2s ease;
  }

  &:hover {
    & > svg {
      //TODO fill не отрабатывает
      fill: #0055fb;
    }

    & > div {
      color: #0055fb;
    }
  }

  &:focus {
    border: 2px solid #45a5ff;
    border-radius: 7px;
  }
`;

const FormatButtonTitle = styled.div`
  font-size: 16px;
  margin-left: 8px;
`;

const Footer = () => {
  const dispatch = useAppDispatch();
  const currentRequestValue = useAppSelector((state) => state.requests.currentRequest);
  const isLoading = useAppSelector((state) => state.requests.isLoading);
  console.log(isLoading);

  const sendRequestHandler = () => {
    dispatch(sendRequest(currentRequestValue));
  };

  const formatRequest = () => {
    try {
      let data = JSON.parse(currentRequestValue);
      dispatch(
        setCurrentRequest({
          currentRequest: JSON.stringify(data, null, 4),
        })
      );
    } catch (e) {
      dispatch(setHasRequestSyntaxError({hasRequestSyntaxError: true}));
    }
  };

  return (
    <FooterStyled>
      <BlueButton isLoading={isLoading} isDisabled={false} type={'button'} clickHandler={sendRequestHandler}>
        Отправить
      </BlueButton>
      <GithubLink href={'https://github.com/davadzh'}>@davadzh</GithubLink>
      <FormatButton onClick={formatRequest}>
        {/* TODO как преобразовывать иконку в svg компонент?
            без этого не отрабатывает fill */}
        <FormatIcon />
        <FormatButtonTitle>Форматировать</FormatButtonTitle>
      </FormatButton>
    </FooterStyled>
  );
};

export default Footer;
