import React from 'react';
import styled from 'styled-components';

const LabelStyled = styled.label`
  font-size: 16px;

  & > span {
    float: right;
    color: #999999;
    font-size: 12px;
  }
`;

type InputStyledType = {
  hasError: boolean;
};

const InputStyled = styled.input<InputStyledType>`
  width: 100%;
  padding: 6px 10px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;

  border: ${(props) => (props.hasError ? '1px solid #CF2C00' : '1px solid rgba(0, 0, 0, 0.2)')};
  box-shadow: ${(props) => (props.hasError ? '0px 0px 5px rgba(207, 44, 0, 0.5)' : 'none')};

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 0 0.125rem rgb(0 0 0 / 20%);
  }
`;

type InputPropsType = {
  type: 'text' | 'email' | 'password';
  name: string;
  value: string;
  label: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isOptional?: boolean;
  hasError?: boolean;
  handleBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({type, name, value, label, changeHandler, isOptional = false, hasError = false, handleBlur}: InputPropsType) => {
  return (
    <>
      <LabelStyled>
        {label}
        {isOptional && <span>Опционально</span>}
      </LabelStyled>
      <InputStyled type={type} name={name} value={value} onChange={changeHandler} hasError={hasError} onBlur={handleBlur} />
    </>
  );
};

export default Input;
