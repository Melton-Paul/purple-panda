import React from "react";
import styles from "./Popular.module.css";
import { Link } from "react-router-dom";
import { MenuContext } from "../store/Menu-context";
import { LanguageContext } from "../store/Language-context";
import MovingSection from "../MovingSection/MovingSection";

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
    <MovingSection img={menuCtx.special.img} imgRight={false}>
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
    </MovingSection>
  );
};

export default Popular;
