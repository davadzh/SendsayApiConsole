import React from 'react';
import loader from "../../media/icons/loader.svg";
import styles from "./styles.module.scss";

const Loader = () => {
  return (
    <>
      <img src={loader} alt="Loading" className={styles.loader}/>
    </>
  );
};

export default Loader;