import React from 'react';
import styled from 'styled-components';
import {useAppDispatch} from '../store';
import {setCurrentRequest} from '../store/actions';
import {ReactComponent as DotsIcon} from '../media/icons/dots.svg';
import {Colors} from '../helpers/constants/styleConstants';

const WrapperButton = styled.button`
  height: 30px;
  background: #ffffff;
  border-radius: 5px;
  width: fit-content;
  padding: 0 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  }
`;

type StatusCirclePropsType = {
  hasError: boolean;
};

const StatusCircle = styled.div<StatusCirclePropsType>`
  height: 10px;
  width: 10px;
  background: ${(props) => (props.hasError ? Colors.errorRed : '#30B800')};
  border: 1px solid ${Colors.translucentBlack};
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
  actionName: string;
  hasError: boolean;
  requestText: string;
};

const SavedRequest = ({actionName, hasError, requestText}: SavedRequestPropsType) => {
  const dispatch = useAppDispatch();

  const setRequestText = () => {
    dispatch(
      setCurrentRequest({
        currentRequest: requestText,
      })
    );
  };

  return (
    <WrapperButton className={'saved-request'} onClick={setRequestText}>
      <StatusCircle hasError={hasError} />
      <Title>{actionName}</Title>
      <Details>
        <DotsIcon />
      </Details>
    </WrapperButton>
  );
};

export default SavedRequest;
