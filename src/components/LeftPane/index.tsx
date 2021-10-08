import React, {createRef, useContext, useEffect, useState} from 'react';
import SplitPaneContext from '../SplitPane/splitPaneContext';
import styled from 'styled-components';
import {useAppDispatch, useAppSelector} from '../../store';
import {setCurrentRequest} from '../../store/actions';

const Wrapper = styled.div`
  //width: 100%
`;

const LeftPaneTextarea = styled.textarea`
  resize: none;
  border: 1px solid ${props => props.color};
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  min-width: 400px;
  height: calc(100% - 20px);
  outline: none;
  //max-width: 60%;
`;

const WindowName = styled.label`
  color: ${props => props.color};
  height: 20px;
  display: flex;
  width: 100%;
  font-size: 12px;
`;

export const LeftPane = () => {
  const dispatch = useAppDispatch();
  const leftPaneRef = createRef<HTMLTextAreaElement>();
  const {clientLeftWidth, setClientLeftWidth} = useContext(SplitPaneContext);
  const currentRequestValue = useAppSelector(state => state.requests.currentRequest);
  const hasRequestSyntaxError = useAppSelector(state => state.requests.hasRequestSyntaxError);
  console.log(hasRequestSyntaxError);


  useEffect(() => {
    if (leftPaneRef?.current) {
      if (!clientLeftWidth) {
        setClientLeftWidth(leftPaneRef.current.clientWidth);
        return;
      }

      leftPaneRef.current.style.width = clientLeftWidth + 'px';
    }
  }, [clientLeftWidth]);

  return (
    <Wrapper>
      <WindowName color={hasRequestSyntaxError ? "#CF2C00" : "#999999"}>Запрос:</WindowName>
      <LeftPaneTextarea ref={leftPaneRef}
                        value={currentRequestValue}
                        onChange={(e) => dispatch(setCurrentRequest({currentRequest: e.target.value}))}
                        color={hasRequestSyntaxError ? "#CF2C00" : "rgba(0, 0, 0, 0.2)"}/>
    </Wrapper>
  );
};
