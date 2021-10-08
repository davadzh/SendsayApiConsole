import React, {useContext} from 'react';
import SplitPaneContext from '../SplitPane/splitPaneContext';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DividerButton = styled.button`
  border: none;
  cursor: col-resize;
  width: 10px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PanesDivider = () => {
  const {onMouseHoldDown} = useContext(SplitPaneContext);

  return (
    <DividerButton onMouseDown={onMouseHoldDown}>
      <img src='/icons/dots.svg' alt='' draggable={false}/>
    </DividerButton>
  );
};