import React from 'react';
import styled from 'styled-components';
import {useAppSelector} from '../store';

const RightPaneStyled = styled.div`
  min-width: 400px;
`;

type ResponseLabelPropsType = {
  hasError: boolean;
};

const ResponseLabel = styled.div<ResponseLabelPropsType>`
  height: 20px;
  display: flex;
  color: ${(props) => (props.hasError ? '#CF2C00' : '#999999')};
  transition: color 0.2s ease;
  font-size: 12px;
`;

type ResponseWrapperPropsType = {
  hasError: boolean;
};

const ResponseWrapper = styled.div<ResponseWrapperPropsType>`
  border: 1px solid ${(props) => (props.hasError ? '#CF2C00' : 'rgba(0, 0, 0, 0.2)')};
  box-shadow: ${(props) => (props.hasError ? '0px 0px 5px rgba(207, 44, 0, 0.5)' : 'none')};
  //TODO из-за анимации поля ввода при перетаскивании начинают "плыть"
  //transition-property: border, box-shadow;
  //transition: all 0.2s ease;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  height: calc(100% - 20px);
`;

const ResponseText = styled.pre`
  margin: 0;
  padding: 10px;
  white-space: break-spaces;
  word-break: break-all;
`;

type RightPanePropsType = {
  leftPaneWidth: string;
};

export const RightPane = ({leftPaneWidth}: RightPanePropsType) => {
  const currentResponseValue = useAppSelector((state) => state.requests.currentResponse);
  const hasResponseError = useAppSelector((state) => state.requests.hasResponseError);

  return (
    <RightPaneStyled style={{width: `calc(100% - ${leftPaneWidth})`}}>
      <ResponseLabel hasError={hasResponseError}>Ответ:</ResponseLabel>
      <ResponseWrapper hasError={hasResponseError}>
        <ResponseText>{currentResponseValue}</ResponseText>
      </ResponseWrapper>
    </RightPaneStyled>
  );
};
