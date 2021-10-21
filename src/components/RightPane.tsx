import React from 'react';
import styled from 'styled-components';
import {useAppSelector} from '../store';
import {Colors} from '../helpers/constants/styleConstants';
import {staticTexts} from '../helpers/constants/namingConstants';

const RightPaneStyled = styled.div`
  min-width: 400px;
`;

type ResponseLabelPropsType = {
  hasError: boolean;
};

const ResponseLabel = styled.div<ResponseLabelPropsType>`
  height: 20px;
  display: flex;
  color: ${(props) => (props.hasError ? Colors.errorRed : Colors.gray)};
  transition: color 0.2s ease;
  font-size: 12px;
`;

type ResponseWrapperPropsType = {
  hasError: boolean;
};

const ResponseWrapper = styled.textarea<ResponseWrapperPropsType>`
  resize: none;
  border: 1px solid ${(props) => (props.hasError ? Colors.errorRed : Colors.translucentBlack)};
  box-shadow: ${(props) => (props.hasError ? '0px 0px 5px rgba(207, 44, 0, 0.5)' : 'none')};
  //TODO из-за анимации поля ввода при перетаскивании начинают "плыть"
  //transition-property: border, box-shadow;
  //transition: all 0.2s ease;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  min-height: calc(100% - 20px);
  padding: 10px;
  white-space: break-spaces;
  word-break: break-all;
  background: none;
  color: ${Colors.almostBlack};
`;

type RightPanePropsType = {
  leftPaneWidth: string;
};

export const RightPane = React.memo(({leftPaneWidth}: RightPanePropsType) => {
  const {currentResponse, hasResponseError} = useAppSelector((state) => state.requests);

  return (
    <RightPaneStyled style={{width: `calc(100% - ${leftPaneWidth})`}}>
      <ResponseLabel hasError={hasResponseError}>{staticTexts.RESPONSE}</ResponseLabel>
      <ResponseWrapper hasError={hasResponseError} disabled={true} defaultValue={currentResponse} />
    </RightPaneStyled>
  );
});
