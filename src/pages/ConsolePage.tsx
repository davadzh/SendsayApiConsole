import React, {useState} from 'react';
import {useAppDispatch} from '../store';
import {logout} from '../store/actions';
import {useHistory} from 'react-router-dom';
import Header from 'src/components/Header';
import styled from 'styled-components';
import RequestHistory from '../components/RequestHistory';
import Footer from '../components/Footer';
import SplitPane from '../components/SplitPane';
import {PanesDivider} from '../components/PanesDivider';
import {sendRequest} from '../store/actions/requests';

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
      <Footer/>
    </Wrapper>
  );
};

export default ConsolePage;