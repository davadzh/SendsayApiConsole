import React from 'react';
import styled from 'styled-components';
import SavedRequest from './SavedRequest';
import {useAppDispatch, useAppSelector} from '../store';
import {clearRequests} from '../store/actions';

const RequestHistoryStyled = styled.div`
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Requests = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 0 0 15px;
  position: relative;
  overflow-x: scroll;

  //TODO найти полифил
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ClearRequests = styled.div`
  display: flex;
  flex-direction: row;
`;

const ClearRequestsButton = styled.button`
  height: 48px;
  cursor: pointer;
  background: #f6f6f6;
  border: none;
  z-index: 2;
  min-width: 50px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ClearRequestsGradient = styled.div`
  height: 48px;
  width: 15px;
  z-index: 2;
  position: fixed;
  right: 50px;
  background: linear-gradient(269.93deg, #f6f6f6 0.06%, rgba(246, 246, 246, 0) 99.93%);
`;

const RequestHistory = () => {
  const dispatch = useAppDispatch();
  const savedRequests = useAppSelector((state) => state.requests.requestsHistory);

  return (
    <RequestHistoryStyled>
      <Requests>
        {savedRequests.map((request) => {
          return (
            <SavedRequest key={request.id} actionName={request.actionName} hasError={request.hasError} requestText={request.requestText} />
          );
        })}
      </Requests>

      <ClearRequests>
        <ClearRequestsGradient />
        <ClearRequestsButton onClick={() => dispatch(clearRequests())}>
          {/*//TODO переделать в svg*/}
          <img src="/icons/cross.svg" alt="" />
        </ClearRequestsButton>
      </ClearRequests>
    </RequestHistoryStyled>
  );
};

export default RequestHistory;
