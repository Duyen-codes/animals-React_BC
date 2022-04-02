import React from "react";
import Button from "./Button";
import styles from "./AnimalCard.module.css";

const AnimalCard = (props) => {
  return (
    <li className={`${styles["card"]}`}>
      <img
        className="img"
        src={`https://source.unsplash.com/1600x900/?${props.name}`}
        alt=""
      />

      <div className={styles["card-content"]}>
        <h3 className={styles.name}>{props.name}</h3>
        <div className={styles.likes}>
          <span> 👍 {props.likes}</span>
          <Button onClick={props.onClick} />
        </div>
      </div>
    </li>
  );
};

export default AnimalCard;
