import React from "react";
import styles from "./Popular.module.css";
import { Link } from "react-router-dom";
const test = require("../../images/test.webp");

const Popular = () => {
  return (
    <div className={styles["popular-section"]}>
      <Link to="/menu">
        <img
          src={test}
          alt="Todays special"
          className={styles["popular-section__img"]}
        />
      </Link>
      <div className={styles["popular-title__container"]}>
        <h2 className={styles["popular-title"]}>Today's Special</h2>
        <p className={styles["popular-name"]}>Lobster Rangu </p>
        <p>Get it quick, it's bound to run out!</p>
        <Link to="/menu" className={styles["popular-section__btn"]}>
          Call Ahead
        </Link>
        <Link to="/menu" className={styles["popular-section__btn"]}>
          See Full Menu
        </Link>
      </div>
    </div>
  );
};

export default Popular;
