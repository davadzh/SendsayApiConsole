import React, {ReactNode} from 'react';
import Loader from './Loader';
import styled from 'styled-components';
import {Colors} from '../helpers/constants/styleConstants';

type BlueButtonStyledProps = {
  isDisabled: boolean;
};

const BlueButtonStyled = styled.button<BlueButtonStyledProps>`
  background: linear-gradient(180deg, ${Colors.lightBlue} 0%, ${Colors.blue} 100%), ${Colors.lightGray};
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  min-width: 110px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  transition: 0.2s ease;

  &:not([disabled]) {
    &:hover {
      opacity: 0.85;
    }

    &:focus {
      border: 2px solid ${Colors.lightBlue};
    }

    &:active {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
        linear-gradient(180deg, ${Colors.lightBlue} 0%, ${Colors.blue} 100%), ${Colors.lightGray};
    }

    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 10;
    }
  }

  &:disabled {
    background: ${Colors.lightGray};
    cursor: default;
  }
`;

type BlueButtonPropsType = {
  isLoading: boolean;
  isDisabled: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode;
  clickHandler?: () => void;
};

const BlueButton = React.memo(({isLoading, isDisabled, type, children, clickHandler}: BlueButtonPropsType) => {
  return (
    <BlueButtonStyled isDisabled={isDisabled} onClick={clickHandler} type={type} disabled={isDisabled}>
      <span>{isLoading ? <Loader /> : children}</span>
    </BlueButtonStyled>
  );
});

export default BlueButton;
