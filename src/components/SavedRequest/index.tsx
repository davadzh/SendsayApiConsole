import React from 'react';
import styled from 'styled-components';
import {bool} from 'yup';
import {useAppDispatch} from '../../store';
import {setCurrentRequest} from '../../store/actions';

const WrapperButton = styled.button`
  height: 30px;
  background: #FFFFFF;
  border-radius: 5px;
  width: fit-content;
  padding: 0 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const StatusCircle = styled.div`
  height: 10px;
  width: 10px;
  background: ${props => props.color};
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 16px;
  margin-left: 5px;
`;

const Details = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 10px;
  
`;

type SavedRequestPropsType = {
  actionName: string,
  hasError: boolean,
  requestText: string,
}

const SavedRequest = ({actionName, hasError, requestText}: SavedRequestPropsType) => {
  const dispatch = useAppDispatch();

  const setRequestText = () => {
    dispatch(setCurrentRequest({
      currentRequest: requestText
    }));
  }

  return (
    <WrapperButton className={"saved-request"} onClick={setRequestText}>
      <StatusCircle color={hasError ? "#CF2C00" : "#30B800"} />
      <Title>{actionName}</Title>
      <Details>
        <img src='/icons/dots.svg' alt='' />
      </Details>
    </WrapperButton>
  );
};

export default SavedRequest;