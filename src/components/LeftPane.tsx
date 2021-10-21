import React, {createRef, useContext, useEffect} from 'react';

import styled from 'styled-components';
import {useAppDispatch, useAppSelector} from '../store';
import {setCurrentRequest} from '../store/actions';
import {SplitPaneContext} from './SplitPane';
import {BoxShadows, Colors} from '../helpers/constants/styleConstants';
import {staticTexts} from '../helpers/constants/namingConstants';

const LeftPaneStyled = styled.div`
  max-width: calc(100% - 410px);
  min-width: 400px;
`;

type RequestWrapperPropsType = {
  hasError: boolean;
};

const RequestWrapper = styled.textarea<RequestWrapperPropsType>`
  resize: none;
  border: 1px solid ${(props) => (props.hasError ? Colors.errorRed : Colors.translucentBlack)};
  box-shadow: ${(props) => (props.hasError ? BoxShadows.default : 'none')};
  //TODO wrapper is getting jelly effect because of transition
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
  color: ${(props) => (props.hasError ? Colors.errorRed : Colors.gray)};
  transition: color 0.2s ease;
  height: 20px;
  display: flex;
  width: 100%;
  font-size: 12px;
`;

type LeftPanePropsType = {
  setLeftPaneWidth: React.Dispatch<React.SetStateAction<string>>;
};

export const LeftPane = React.memo(({setLeftPaneWidth}: LeftPanePropsType) => {
  const dispatch = useAppDispatch();
  const leftPaneRef = createRef<HTMLTextAreaElement>();
  const {clientWidth, setClientWidth} = useContext(SplitPaneContext);

  const {currentRequest, hasRequestSyntaxError} = useAppSelector((state) => state.requests);

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
      <WindowName hasError={hasRequestSyntaxError}>{staticTexts.REQUEST}</WindowName>
      <RequestWrapper
        ref={leftPaneRef}
        value={currentRequest}
        onChange={(e) => dispatch(setCurrentRequest({currentRequest: e.target.value}))}
        hasError={hasRequestSyntaxError}
      />
    </LeftPaneStyled>
  );
});
