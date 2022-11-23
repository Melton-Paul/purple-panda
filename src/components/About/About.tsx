import React from "react";
import styles from "./About.module.css";
import { Element } from "react-scroll";
import { LanguageContext } from "../store/Language-context";
import MovingSection from "../MovingSection/MovingSection";
const temp = require("../../images/truck_lbrit7_c_scale,w_1600.jpg");

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
      <MovingSection img={temp} imgRight={true}>
        <h2 className="section-title">{h2}</h2>
        <p className={styles["about-text"]}>{body}</p>
      </MovingSection>
    </Element>
  );
};

export default About;
