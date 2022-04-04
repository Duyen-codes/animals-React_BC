import React from "react";
import Button from "./Button";
import styles from "./AnimalCard.module.css";

const AnimalCard = ({ name, likes, click, remove, dislikes, dislikeClick }) => {
  // console.log("Animal", props.likes);
  return (
    <li className={`${styles["card"]}`}>
      <button className={styles["cross-btn"]} onClick={remove}>
        X
      </button>
      <img
        className="img"
        src={`https://source.unsplash.com/1600x900/?${name}`}
        alt=""
      />

      <div className={styles["card-content"]}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.likes}>
          <span> 👍 {likes}</span>
          <Button likes={likes} name={name} click={click} />
        </div>
      </div>
    </li>
  );
};

export default AnimalCard;
