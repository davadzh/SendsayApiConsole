import React, {createContext, Dispatch, MouseEventHandler, SetStateAction, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {PanesDividerButton} from './PanesDividerButton';
import {LeftPane} from './LeftPane';
import {RightPane} from './RightPane';

type SplitPaneContextType = {
  clientWidth: number | null;
  setClientWidth: Dispatch<SetStateAction<number | null>>;
  onMouseHoldDown: MouseEventHandler<HTMLButtonElement>;
};

export const SplitPaneContext = createContext({} as SplitPaneContextType);

const SplitPaneStyled = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 10px 15px 15px 15px;
  background: #ffffff;
  overflow: scroll;
`;

const SplitPane = () => {
  const [clientWidth, setClientWidth] = useState<number | null>(null);
  const [leftPaneWidth, setLeftPaneWidth] = useState<string>('400px');
  const xDividerPos = useRef<number | null>(null);

  const onMouseHoldDown = (e: any) => {
    xDividerPos.current = e.clientX;
  };

  const onMouseHoldUp = () => {
    xDividerPos.current = null;
  };

  const onMouseHoldMove = (e: any) => {
    if (!xDividerPos.current || !clientWidth) {
      return;
    }

    setClientWidth(clientWidth + e.clientX - xDividerPos.current);

    xDividerPos.current = e.clientX;
  };

  useEffect(() => {
    document.addEventListener('mouseup', onMouseHoldUp);
    document.addEventListener('mousemove', onMouseHoldMove);

    return () => {
      document.removeEventListener('mouseup', onMouseHoldUp);
      document.removeEventListener('mousemove', onMouseHoldMove);
    };
  });

  return (
    <SplitPaneStyled>
      <SplitPaneContext.Provider
        value={{
          clientWidth,
          setClientWidth,
          onMouseHoldDown,
        }}
      >
        <LeftPane setLeftPaneWidth={setLeftPaneWidth} />
        <PanesDividerButton />
        <RightPane leftPaneWidth={leftPaneWidth} />
      </SplitPaneContext.Provider>
    </SplitPaneStyled>
  );
};

export default SplitPane;
