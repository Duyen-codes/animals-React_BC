import React from "react";
import styles from "./Button.module.css";

const Button = ({ likes, click }) => {
  return (
    <button className={styles.button} onClick={click}>
      Add likes
    </button>
  );
};

export default Button;
