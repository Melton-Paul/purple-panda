import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { scroller } from "react-scroll";
import { LanguageContext } from "../store/Language-context";
import { useNavigate } from "react-router-dom";
const navImg = require("../../images/tPanda.png");

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const languageCtx = React.useContext(LanguageContext);
  const navigate = useNavigate();
  const useScroller = scroller;

  function toggleCollapsed() {
    setIsCollapsed((prev) => !prev);
  }
  function closeMenu() {
    setIsCollapsed(true);
  }

  const goToHomeAndScroll = async (location: string) => {
    await navigate("/");
    await setTimeout(
      () =>
        useScroller.scrollTo(location, {
          duration: 75,
          smooth: true,
          offset: -300,
        }),
      150
    );
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-left"]}>
        <NavLink to="/" onClick={closeMenu}>
          <img className={styles["navbar-img"]} src={navImg} alt="home" />
        </NavLink>
        {isCollapsed && (
          <a
            href="tel:417-791-1529"
            className={`${styles.call}`}
            style={{ color: "black", fontWeight: "bold", letterSpacing: "2px" }}
          >
            <i className="fa-solid fa-phone"></i>
            <p>417-791-1529</p>
          </a>
        )}
      </div>
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
        onClick={closeMenu}
      >
        <NavLink to="/">
          <li className={styles["navbar-list__item"]}>
            {languageCtx.english ? "Home" : "Hogar"}
          </li>
        </NavLink>
        <li
          className={styles["navbar-list__item"]}
          onClick={() => goToHomeAndScroll("info")}
        >
          {languageCtx.english ? "Location" : "Ubicación"}
        </li>
        <li
          className={styles["navbar-list__item"]}
          onClick={() => goToHomeAndScroll("contact")}
        >
          {languageCtx.english ? "Contact" : "Contacto"}
        </li>
        <li>
          <NavLink to="/">
            <img
              className={`${styles["navbar-img"]} ${styles.bigDisplay}`}
              src={navImg}
              alt="home"
            />
          </NavLink>
        </li>
        <li
          className={styles["navbar-list__item"]}
          onClick={() => {
            goToHomeAndScroll("about");
          }}
        >
          {languageCtx.english ? "About Us" : "Comprar"}
        </li>
        <NavLink to="/menu">
          <li className={styles["navbar-list__item"]}>
            {languageCtx.english ? "Menu" : "Menú"}
          </li>
        </NavLink>
        <li className={styles["navbar-list__item"]}>
          <a
            href="tel:417-791-1529"
            className={`${styles.call} ${styles["call-primary"]}`}
          >
            <i className="fa-solid fa-phone"></i>
            <p>Call</p>
          </a>
        </li>
      </ul>
      <div className={styles["navbar-language__container"]}>
        <button
          className={styles["navbar-language"]}
          onClick={() =>
            languageCtx.toggleEnglish(languageCtx.english ? false : true)
          }
        >
          {languageCtx.english ? "Tingnan Sa Filipino" : "View In English"}
        </button>
      </div>
    </nav>
  );
}
