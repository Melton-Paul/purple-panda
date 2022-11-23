import React from "react";
import { Link } from "react-router-dom";
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
  const width = window.innerWidth;

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
          offset: width < 768 ? -100 : -300,
        }),
      150
    );
  };

  const languageObj = languageCtx.english
    ? {
        home: "Home",
        location: "Our Info",
        contact: "Contact Us",
        about: "Our Journey",
        call: "Call",
      }
    : {
        home: "Bahay",
        location: "Lokasyon",
        contact: "Makipag-ugnayan",
        about: "Tungkol sa",
        call: "Tawag",
      };

  const { home, location, contact, about, call } = languageObj;

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-left"]}>
        <img
          className={styles["navbar-img"]}
          src={navImg}
          alt="home"
          onClick={() => goToHomeAndScroll("hero")}
        />
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
        <li
          className={styles["navbar-list__item"]}
          onClick={() => goToHomeAndScroll("hero")}
        >
          {home}
        </li>
        <li
          className={styles["navbar-list__item"]}
          onClick={() => goToHomeAndScroll("info")}
        >
          {location}
        </li>
        <li
          className={styles["navbar-list__item"]}
          onClick={() => goToHomeAndScroll("contact")}
        >
          {contact}
        </li>
        <li>
          <img
            className={`${styles["navbar-img"]} ${styles.bigDisplay}`}
            src={navImg}
            alt="home"
            onClick={() => goToHomeAndScroll("hero")}
          />
        </li>
        <li
          className={styles["navbar-list__item"]}
          onClick={() => {
            goToHomeAndScroll("about");
          }}
        >
          {about}
        </li>
        <Link to="/menu">
          <li className={styles["navbar-list__item"]}>Menu</li>
        </Link>
        <li className={styles["navbar-list__item"]}>
          <a
            href="tel:417-791-1529"
            className={`${styles.call} ${styles["call-primary"]}`}
          >
            <i className="fa-solid fa-phone"></i>
            <p>{call}</p>
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
