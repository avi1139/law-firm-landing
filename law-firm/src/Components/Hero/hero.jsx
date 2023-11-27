import React from "react";
import styles from "./hero.module.css";
import heroimage from "../../assets/heroImage.png";

const hero = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.mid}>You don't have to Fight them Alone</p>
      </div>
      <div className={styles.heroimg}>
        <img src={heroimage} alt="heroimg" />
      </div>
    </div>
  );
};

export default hero;
