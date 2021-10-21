import React, {useContext} from 'react';
import styled from 'styled-components';
import {SplitPaneContext} from './SplitPane';
import {ReactComponent as DividerIcon} from '../media/icons/dots.svg';

const PanesDividerButtonStyled = styled.button`
  border: none;
  cursor: col-resize;
  width: 10px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    min-width: 10px;
    circle {
      transition: 0.2s ease;
    }
  }

  &:hover {
    & > svg {
      circle {
        fill-opacity: 0.3;
      }
    }
  }
`;

export const PanesDividerButton = () => {
  const {onMouseHoldDown} = useContext(SplitPaneContext);

  return (
    <PanesDividerButtonStyled onMouseDown={onMouseHoldDown}>
      <DividerIcon />
    </PanesDividerButtonStyled>
  );
};
