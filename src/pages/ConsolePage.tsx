import React from 'react';
import Header from 'src/components/Header';
import styled from 'styled-components';
import RequestHistory from '../components/RequestHistory';
import Footer from '../components/Footer';
import SplitPane from '../components/SplitPane';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ConsolePage = () => {
  return (
    <Wrapper>
      <Header />
      <RequestHistory />
      <SplitPane />
      <Footer />
    </Wrapper>
  );
};

export default ConsolePage;
