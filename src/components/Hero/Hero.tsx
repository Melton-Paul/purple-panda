import React from "react";
import { useNavigate } from "react-router";
import styles from "./Hero.module.css";
import { LanguageContext } from "../store/Language-context";
const food = require("../../images/food1.jpg");
const truck = require("../../images/truck.jpg");

export default function Hero() {
  const calllines = [
    {
      title: "Purple Panda",
      cta: "2166 State Hwy. 248 Branson, MO 65616",
      ctaBtn: "417.791.1529",
      ctaAct: "tel:417-791-1529",
      ctaLoc: "",
      background: truck,
    },
    {
      title: "Authentic Food",
      cta: "Genuinely Filipino.",
      ctaBtn: "Menu",
      ctaAct: "",
      ctaLoc: "/Menu",
      background: food,
    },
  ];
  const [counter, setCounter] = React.useState(0);
  const navigate = useNavigate();
  const languageCtx = React.useContext(LanguageContext);

  React.useEffect(() => {
    setInterval(() => {
      setCounter((prev) => {
        if (prev === calllines.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 9000);
  }, [calllines.length]);

  function buttonClick() {
    if (calllines[counter].ctaLoc) {
      navigate(calllines[counter].ctaLoc);
    } else if (calllines[counter].ctaAct) {
      window.open(calllines[counter].ctaAct);
    }
  }

  function changeSlide(dir: string) {
    setCounter((prev) => {
      if (dir === "forward") {
        if (prev === calllines.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      } else {
        if (prev === 0) {
          return calllines.length - 1;
        } else {
          return prev - 1;
        }
      }
    });
  }

  return (
    <section className={styles.hero}>
      <img
        src={calllines[counter].background}
        className={styles["hero-img"]}
        alt=""
      />
      <div className={styles["hero-overlay"]}>
        <div className={styles["hero-overlay__center"]}>
          <h1 className={styles["hero-title"]}>{calllines[counter].title}</h1>
          <p className={styles.cta}>{calllines[counter].cta}</p>
          <button onClick={buttonClick} className={styles["cta-button"]}>
            {calllines[counter].ctaBtn}
          </button>
          <i
            className={`${styles.forward} ${styles.arrow} fa-solid fa-arrow-right`}
            onClick={() => changeSlide("forward")}
          ></i>
          <i
            className={`${styles.back} ${styles.arrow} fa-solid fa-arrow-left`}
            onClick={() => changeSlide("back")}
          ></i>
        </div>
        <div className={styles["hero-brands"]}>
          <p className={styles["hero-brands__title"]}>Follow Us!</p>
          <div>
            <a
              href="https://www.facebook.com/purplepandafilipinofood"
              target="_blank"
              rel="noreferrer"
              className={styles["hero-brands__link"]}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/purplepandafilipinofood"
              target="_blank"
              rel="noreferrer"
              className={styles["hero-brands__link"]}
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
