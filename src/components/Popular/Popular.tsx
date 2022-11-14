import React from "react";
import styles from "./Popular.module.css";
import { Link } from "react-router-dom";
const test = require("../../images/test.webp");

const Popular = () => {
  return (
    <div className={styles["popular-section"]}>
      <img
        src={test}
        alt="Todays special"
        className={styles["popular-section__img"]}
      />
      <div className={styles["popular-title__container"]}>
        <h2 className={styles["popular-title"]}>Today's Special</h2>
        <p>Lobster Rangu </p>
        <p>Get it quick, it's bound to run out!</p>
        <button className={styles["popular-section__btn"]}>
          <Link to="/menu">Call Ahead</Link>
        </button>
      </div>
    </div>
  );
};

export default Popular;
