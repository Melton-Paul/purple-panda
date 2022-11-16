import React from "react";
import styles from "./Popular.module.css";
import { Link } from "react-router-dom";
import { MenuContext } from "../store/Menu-context";

const Popular = () => {
  const menuCtx = React.useContext(MenuContext);
  return (
    <div className={styles["popular-section"]}>
      <img
        src={menuCtx.special.img}
        alt="Todays special"
        className={styles["popular-section__img"]}
      />
      <div className={styles["popular-title__container"]}>
        <h2 className={"section-title"}>Today's Special</h2>
        <p className={styles["popular-name"]}>
          {menuCtx.special.name}{" "}
          <span className={styles["popular-price"]}>
            {menuCtx.special.price}$
          </span>
        </p>
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
