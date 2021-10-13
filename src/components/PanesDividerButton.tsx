import React, {useContext} from 'react';
import styled from 'styled-components';
import {SplitPaneContext} from './SplitPane';

const PanesDividerButtonStyled = styled.button`
  border: none;
  cursor: col-resize;
  width: 10px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PanesDividerButton = () => {
  const {onMouseHoldDown} = useContext(SplitPaneContext);

  return (
    <PanesDividerButtonStyled onMouseDown={onMouseHoldDown}>
      {/*//TODO переделать в svg*/}
      <img src="/icons/dots.svg" alt="" draggable={false} />
    </PanesDividerButtonStyled>
  );
};
