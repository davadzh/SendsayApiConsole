import React, {ReactNode} from 'react';
import styles from "./styles.module.scss";

type InputPropsType = {
  name: string
  value: string,
  label: string,
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  isOptional?: boolean,
}

const Input = ({name, value, label, changeHandler, isOptional = false}: InputPropsType) => {
  return (
    <>
      <label className={styles.label}>
        {label}
        {isOptional && <span>Опционально</span>}
      </label>
      <input name={name} value={value} onChange={changeHandler} className={styles.input} />
    </>
  );
};

export default Input;