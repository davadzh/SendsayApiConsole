import React, {createRef, useContext, useEffect} from 'react';
import styled from 'styled-components';
import SplitPaneContext from '../SplitPane/splitPaneContext';
import {useAppSelector} from '../../store';

const Wrapper = styled.div`
  min-width: 400px;
`;

const WindowName = styled.div`
  height: 20px;
  display: flex;
  width: 100%;
  color: #999999;
  font-size: 12px;
`;

const ResponseWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  height: calc(100% - 20px);
  //min-width: 400px;
`;

const ResponseText = styled.pre`
  margin: 0;
  padding: 10px;
  white-space: break-spaces;
  word-break: break-all;
`;

export const RightPane = () => {
  const { clientLeftWidth } = useContext(SplitPaneContext);
  const currentResponseValue = useAppSelector(state => state.requests.currentResponse);

  return (
    <Wrapper style={{width: `calc(100% - ${clientLeftWidth}px)`}}>
      <WindowName>Ответ:</WindowName>
      <ResponseWrapper>
        <ResponseText>{currentResponseValue}</ResponseText>
      </ResponseWrapper>
    </Wrapper>
  );
};