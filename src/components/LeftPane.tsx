import React, {createRef, useContext, useEffect} from 'react';

import styled from 'styled-components';
import {useAppDispatch, useAppSelector} from '../store';
import {setCurrentRequest} from '../store/actions';
import {SplitPaneContext} from './SplitPane';

const LeftPaneStyled = styled.div`
  max-width: calc(100% - 410px);
  min-width: 400px;
`;

type RequestWrapperPropsType = {
  hasError: boolean;
};

const RequestWrapper = styled.textarea<RequestWrapperPropsType>`
  resize: none;
  border: 1px solid ${(props) => (props.hasError ? '#CF2C00' : 'rgba(0, 0, 0, 0.2)')};
  box-shadow: ${(props) => (props.hasError ? '0px 0px 5px rgba(207, 44, 0, 0.5)' : 'none')};
  //TODO из-за анимации поля ввода при перетаскивании начинают "плыть"
  //transition-property: border, box-shadow;
  //transition: all 0.2s ease;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  min-width: 400px;
  max-width: 100%;
  height: calc(100% - 20px);
  outline: none;
`;

type WindowNamePropsType = {
  hasError: boolean;
};

const WindowName = styled.label<WindowNamePropsType>`
  color: ${(props) => (props.hasError ? '#CF2C00' : '#999999')};
  transition: color 0.2s ease;
  height: 20px;
  display: flex;
  width: 100%;
  font-size: 12px;
`;

type LeftPanePropsType = {
  setLeftPaneWidth: React.Dispatch<React.SetStateAction<string>>;
};

export const LeftPane = ({setLeftPaneWidth}: LeftPanePropsType) => {
  const dispatch = useAppDispatch();
  const leftPaneRef = createRef<HTMLTextAreaElement>();
  const {clientWidth, setClientWidth} = useContext(SplitPaneContext);

  const currentRequestValue = useAppSelector((state) => state.requests.currentRequest);
  const hasRequestSyntaxError = useAppSelector((state) => state.requests.hasRequestSyntaxError);

  useEffect(() => {
    if (leftPaneRef?.current) {
      if (!clientWidth) {
        setClientWidth(leftPaneRef.current.clientWidth);
        return;
      }

      leftPaneRef.current.style.width = clientWidth + 'px';
      setLeftPaneWidth(clientWidth + 'px');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientWidth]);

  return (
    <LeftPaneStyled>
      <WindowName hasError={hasRequestSyntaxError}>Запрос:</WindowName>
      <RequestWrapper
        ref={leftPaneRef}
        value={currentRequestValue}
        onChange={(e) => dispatch(setCurrentRequest({currentRequest: e.target.value}))}
        hasError={hasRequestSyntaxError}
      />
    </LeftPaneStyled>
  );
};
