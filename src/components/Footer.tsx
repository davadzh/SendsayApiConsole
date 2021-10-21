import React, {useCallback} from 'react';
import styled from 'styled-components';
import BlueButton from './BlueButton';
import {sendRequest, setCurrentRequest, setHasRequestSyntaxError} from '../store/actions';
import {useAppDispatch, useAppSelector} from '../store';
import {ReactComponent as FormatIcon} from '../media/icons/format.svg';
import {Colors} from '../helpers/constants/styleConstants';
import {staticTexts} from '../helpers/constants/namingConstants';

const FooterStyled = styled.div`
  background: #ffffff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${Colors.translucentBlack};
`;

const GithubLink = styled.a`
  color: #999999;
  text-decoration: none;
`;

const FormatButton = styled.button`
  background: none;
  border: 2px solid #ffffff;
  box-sizing: content-box;
  cursor: pointer;
  display: flex;
  align-items: center;

  & > svg {
    path {
      transition: 0.2s ease;
    }
  }

  & > div {
    transition: 0.2s ease;
  }

  &:hover {
    & > svg {
      path {
        stroke: ${Colors.blue};
      }
    }

    & > div {
      color: ${Colors.blue};
    }
  }

  &:focus {
    border: 2px solid ${Colors.lightBlue};
    border-radius: 7px;
  }
`;

const FormatButtonTitle = styled.div`
  font-size: 16px;
  margin-left: 8px;
`;

const Footer = () => {
  const dispatch = useAppDispatch();
  const {currentRequest, isLoading} = useAppSelector((state) => state.requests);

  const sendRequestHandler = useCallback(() => {
    dispatch(sendRequest(currentRequest));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRequest]);

  const formatRequest = useCallback(() => {
    try {
      let data = JSON.parse(currentRequest);
      dispatch(
        setCurrentRequest({
          currentRequest: JSON.stringify(data, null, 4),
        })
      );
    } catch (e) {
      dispatch(setHasRequestSyntaxError({hasRequestSyntaxError: true}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRequest]);

  return (
    <FooterStyled>
      <BlueButton isLoading={isLoading} isDisabled={false} type={'button'} clickHandler={sendRequestHandler}>
        {staticTexts.SEND}
      </BlueButton>
      <GithubLink href={'https://github.com/davadzh'}>@davadzh</GithubLink>
      <FormatButton onClick={formatRequest}>
        <FormatIcon />
        <FormatButtonTitle>{staticTexts.FORMAT}</FormatButtonTitle>
      </FormatButton>
    </FooterStyled>
  );
};

export default Footer;
