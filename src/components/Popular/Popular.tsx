import React from "react";
import styles from "./Popular.module.css";
import { Link } from "react-router-dom";
import { MenuContext } from "../store/Menu-context";
import { LanguageContext } from "../store/Language-context";

const Popular = () => {
  const menuCtx = React.useContext(MenuContext);
  const languageCtx = React.useContext(LanguageContext);

  const languageObj = languageCtx.english
    ? {
        h2: "Today's Special",
        cta: "Get it quick, it's bound to run out!",
        call: "Call Ahead",
        menu: "See Full Menu",
      }
    : {
        h2: "Espesyal ng araw",
        cta: "Bilisan mo, mauubos na!",
        call: "Tumawag sa Ahead",
        menu: "Tingnan ang Buong Menu",
      };

  const { cta, call, menu, h2 } = languageObj;

  return (
    <div className={styles["popular-section"]}>
      <img
        src={menuCtx.special.img}
        alt="Todays special"
        className={styles["popular-section__img"]}
      />
      <div className={styles["popular-title__container"]}>
        <h2 className={`section-title ${styles["popular-title"]}`}>{h2}</h2>
        <p className={styles["popular-name"]}>
          {menuCtx.special.name}{" "}
          <span className={styles["popular-price"]}>
            {menuCtx.special.price}$
          </span>
        </p>
        <p>{cta}</p>
        <a href="tel:417-791-1529" className={styles["popular-section__btn"]}>
          {call}
        </a>
        <Link to="/menu" className={styles["popular-section__btn"]}>
          {menu}
        </Link>
      </div>
    </div>
  );
};

export default Popular;
