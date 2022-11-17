import React from "react";
import styles from "./About.module.css";
import { Element } from "react-scroll";
import { LanguageContext } from "../store/Language-context";
const temp = require("../../images/truck.jpg");

const About = () => {
  const languageCtx = React.useContext(LanguageContext);

  const languageObj = languageCtx.english
    ? {
        h2: "Our Journey",
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        voluptates odio deleniti ad harum ducimus, et libero similique,
        atque perspiciatis incidunt, rem id repudiandae soluta! Fugiat,
        ullam excepturi, placeat qui itaque asperiores minus quibusdam
        praesentium recusandae repudiandae facilis fuga quaerat minima
        similique voluptate inventore. Ipsam sint incidunt tempora
        repellat fuga.`,
      }
    : {
        h2: "Espesyal ng araw",
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        voluptates odio deleniti ad harum ducimus, et libero similique,
        atque perspiciatis incidunt, rem id repudiandae soluta! Fugiat,
        ullam excepturi, placeat qui itaque asperiores minus quibusdam
        praesentium recusandae repudiandae facilis fuga quaerat minima
        similique voluptate inventore. Ipsam sint incidunt tempora
        repellat fuga.`,
      };

  const { h2, body } = languageObj;
  return (
    <Element name="about">
      <div className={styles["about-container"]}>
        <div className={styles.about}>
          <img
            src={temp}
            alt="The owner smiling and waving while leaning out of the food truck window"
            className={styles["about-img"]}
          />
          <div className={styles["about-text__container"]}>
            <h2 className="section-title">{h2}</h2>
            <p className={styles["about-text"]}>{body}</p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
