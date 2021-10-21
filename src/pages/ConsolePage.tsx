import React from 'react';
import Header from 'src/components/Header';
import styled from 'styled-components';
import RequestHistory from '../components/RequestHistory';
import Footer from '../components/Footer';
import SplitPane from '../components/SplitPane';
import {FullScreen, useFullScreenHandle} from 'react-full-screen';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ConsolePage = () => {
  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle} className={'fullscreen-custom'}>
      <Wrapper>
        <Header fullScreenHandler={handle} />
        <RequestHistory />
        <SplitPane />
        <Footer />
      </Wrapper>
    </FullScreen>
  );
};

export default ConsolePage;
