import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { LanguageContext } from "../store/Language-context";
const navImg = require("../../images/tPanda.png");

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const languageCtx = React.useContext(LanguageContext);

  function toggleCollapsed() {
    setIsCollapsed((prev) => !prev);
  }

  return (
    <nav className={styles.navbar}>
      <NavLink to="/">
        <img className={styles["navbar-img"]} src={navImg} alt="home" />
      </NavLink>
      <i
        className={`fa-solid ${isCollapsed ? "fa-bars" : "fa-x"} ${
          styles["navbar-toggle"]
        }`}
        onClick={toggleCollapsed}
      ></i>
      <ul
        className={`${styles["navbar-list"]} ${
          isCollapsed && styles.collapsed
        }`}
      >
        <NavLink to="/">
          <li className={styles["navbar-list__item"]}>
            {languageCtx.english ? "Home" : "Hogar"}
          </li>
        </NavLink>
        <NavLink to="/menu">
          <li className={styles["navbar-list__item"]}>
            {languageCtx.english ? "Menu" : "Menú"}
          </li>
        </NavLink>
        <NavLink to="/contact">
          <li className={styles["navbar-list__item"]}>
            {languageCtx.english ? "Contact" : "Contacto"}
          </li>
        </NavLink>
        <NavLink to="/">
          <img
            className={`${styles["navbar-img"]} ${styles.bigDisplay}`}
            src={navImg}
            alt="home"
          />
        </NavLink>
        <NavLink to="/about">
          <li className={styles["navbar-list__item"]}>
            {languageCtx.english ? "Order Online" : "Comprar Online"}
          </li>
        </NavLink>
        <NavLink to="/location">
          <li className={styles["navbar-list__item"]}>
            {languageCtx.english ? "Location" : "Ubicación"}
          </li>
        </NavLink>
        <NavLink to="/location">
          <li className={styles["navbar-list__item"]}>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}
