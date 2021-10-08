import React, {ReactNode} from 'react';
import styles from "./styles.module.scss";
import Loader from '../Loader';

type BlueButtonPropsType = {
  isLoading: boolean,
  isDisabled: boolean,
  type: "button" | "submit" | "reset" | undefined,
  children: ReactNode,
  onClick?: () => void
}

const BlueButton = ({isLoading, isDisabled, type, children, onClick}: BlueButtonPropsType) => {
  return (
    <button onClick={onClick}
            type={type}
            disabled={isDisabled}
            className={!isDisabled ? styles.blue__button : styles.blue__button__disabled}>
      <span className={styles.blue__button_children}>{isLoading ? <Loader /> : children}</span>
    </button>
  );
};

export default BlueButton;