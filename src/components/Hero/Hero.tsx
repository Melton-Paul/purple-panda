import React from "react";
import { useNavigate } from "react-router";
import styles from "./Hero.module.css";
import { LanguageContext } from "../store/Language-context";
import { Element } from "react-scroll";
const food350 = require("../../images/food1_yldgkd_c_scale,w_350.jpg");
const food881 = require("../../images/food1_yldgkd_c_scale,w_881.jpg");
const food1273 = require("../../images/food1_yldgkd_c_scale,w_1273.jpg");
const food1600 = require("../../images/food1_yldgkd_c_scale,w_1600.jpg");
const truck350 = require("../../images/truck_lbrit7_c_scale,w_350.jpg");
const truck881 = require("../../images/truck_lbrit7_c_scale,w_925.jpg");
const truck1273 = require("../../images/truck_lbrit7_c_scale,w_1364.jpg");
const truck1600 = require("../../images/truck_lbrit7_c_scale,w_1600.jpg");

export default function Hero() {
  const languageCtx = React.useContext(LanguageContext);

  const imagesFood = (
    <img
      className={styles["hero-img"]}
      sizes="(max-width: 1600px) 100vw, 1600px"
      srcSet={`
        ${food350} 350w,
        ${food881} 881w,
        ${food1273} 1273w,
        ${food1600} 1600w
        `}
      src={food1600}
      alt=""
    />
  );
  const imagesTruck = (
    <img
      className={styles["hero-img"]}
      sizes="(max-width: 1600px) 100vw, 1600px"
      srcSet={`
      ${truck350} 350w,
      ${truck881} 881w,
      ${truck1273} 1273w,
      ${truck1600} 1600w
      `}
      src={truck1600}
      alt=""
    />
  );

  const calllines = [
    {
      title: "Purple Panda",
      cta: "2166 State Hwy. 248 Branson, MO 65616",
      ctaBtn: "417.791.1529",
      ctaAct: "tel:417-791-1529",
      ctaLoc: "",
      background: imagesTruck,
    },
    {
      title: languageCtx.english ? "Authentic Food" : "Tunay na Pagkain",
      cta: languageCtx.english ? "Genuinely Filipino." : "Filipino talaga.",
      ctaBtn: "Menu",
      ctaAct: "",
      ctaLoc: "/menu",
      background: imagesFood,
    },
  ];

  const [counter, setCounter] = React.useState(0);
  const navigate = useNavigate();

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
    <Element name="hero">
      <section
        className={styles.hero}
        data-aos="slide-right"
        data-aos-duration="900"
      >
        {calllines[counter].background}
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
            <p className={styles["hero-brands__title"]}>
              {languageCtx.english ? "Follow Us!" : "Sundan mo kami!"}
            </p>
            <div>
              <a
                href="https://www.instagram.com/purplepandafilipinofood/"
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
    </Element>
  );
}
