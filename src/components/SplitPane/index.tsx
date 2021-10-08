import React, {createRef, ReactChild, useContext, useEffect, useRef, useState} from 'react';
import SplitPaneContext from './splitPaneContext';
import styled from 'styled-components';
import {PanesDivider} from '../PanesDivider';
import {LeftPane} from '../LeftPane';
import {RightPane} from '../RightPane';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 10px 15px 15px 15px;
  background: #ffffff;
  min-width: calc(100% - 800px);
  overflow: scroll;
`;

const SplitPane = () => {
  const [clientLeftWidth, setClientLeftWidth] = useState<number | null>(null);
  const xDividerPos = useRef<number | null>(null);

  const onMouseHoldDown = (e: any) => {
    xDividerPos.current = e.clientX;
  };

  const onMouseHoldUp = () => {
    xDividerPos.current = null;
  };

  const onMouseHoldMove = (e: any) => {
    if (!xDividerPos.current || !clientLeftWidth) {
      return;
    }

    // if (clientLeftWidth <= 800) {
      setClientLeftWidth(clientLeftWidth + e.clientX - xDividerPos.current);
    // }
    // else
    // {
    //   setClientLeftWidth(800);
    // }


    // setClientRightWidth(clientRightWidth + e.clientX - xDividerPos.current);

    xDividerPos.current = e.clientX;
  };

  useEffect(() => {
    document.addEventListener("mouseup", onMouseHoldUp);
    document.addEventListener("mousemove", onMouseHoldMove);

    return () => {
      document.removeEventListener("mouseup", onMouseHoldUp);
      document.removeEventListener("mousemove", onMouseHoldMove);
    };
  });

  return (
    <Wrapper>
      <SplitPaneContext.Provider
        value={{
          clientLeftWidth,
          setClientLeftWidth,
          onMouseHoldDown,
        }}
      >
        <LeftPane/>
        <PanesDivider />
        <RightPane />
      </SplitPaneContext.Provider>
    </Wrapper>
  );
};

export default SplitPane;






