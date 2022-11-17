import React from "react";
import styles from "./Info.module.css";
import { Element } from "react-scroll";
import { LanguageContext } from "../store/Language-context";

const Info = () => {
  const languageCtx = React.useContext(LanguageContext);

  const languageObj = languageCtx.english
    ? {
        h2: "Our Info!",
        mn: "Monday",
        ts: "Tuesday",
        wd: "Wednesday",
        th: "Thursday",
        fr: "Friday",
        st: "Saturday",
        sn: "Sunday",
      }
    : {
        h2: "Aming Impormasyon!",
        mn: "Lunes",
        ts: "Martes",
        wd: "Miyerkules",
        th: "Huwebes",
        fr: "Biyernes",
        st: "Sabado",
        sn: "Linggo",
      };

  const { h2, mn, ts, wd, th, fr, st, sn } = languageObj;

  return (
    <Element name="info">
      <div className={styles["contact-section"]}>
        <div className="container">
          <h2 className="section-title">{h2}</h2>
          <div className={styles["contact-container"]}>
            <div className={styles["contact-container__text"]}>
              <ul className={styles["contact-list"]}>
                <li>
                  <p>{mn}</p>
                  <p>11:00 AM - 8:00 PM</p>
                </li>
                <li>
                  <p>{ts}</p>
                  <p>Closed</p>
                </li>
                <li>
                  <p>{wd}</p>
                  <p>Closed</p>
                </li>
                <li>
                  <p>{th}</p>
                  <p>11:00 AM - 8:00 PM</p>
                </li>
                <li>
                  <p>{fr}</p>
                  <p>11:00 AM - 8:00 PM</p>
                </li>
                <li>
                  <p>{st}</p>
                  <p>11:00 AM - 8:00 PM</p>
                </li>

                <li>
                  <p>{sn}</p>
                  <p>11:00 AM - 6:00 PM</p>
                </li>
              </ul>
              <div className={styles["contact-info__container"]}>
                <div className={styles["contact-info__section"]}>
                  <a href="tel:417-791-1529" className={styles["contact-info"]}>
                    <i className="fa-solid fa-phone"></i>
                    417-791-1529
                  </a>
                </div>
                <div className={styles["contact-info__section"]}>
                  <a
                    href="https://www.google.com/maps/dir//2166+State+Hwy+248,+Branson,+MO+65616/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x87cf04b7527403bf:0xe71d03b322d11c5?sa=X&ved=2ahUKEwjLhNKQ0aT7AhVRkmoFHU5uACwQwwV6BAgIEAI"
                    target="_blank"
                    rel="noreferrer"
                    className={styles["contact-info"]}
                  >
                    <i className="fa-solid fa-location-dot"></i>
                    2166 State Hwy. 248 Branson, MO 65616
                  </a>
                </div>
              </div>
            </div>
            <iframe
              className={styles["contact-map"]}
              title="purple panda location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.27003224407!2d-93.2511184492323!3d36.66800798273128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf03238e56137d%3A0xb89fb32b603ad226!2sPurple%20Panda%20Filipino%20Food!5e0!3m2!1sen!2sus!4v1668118915036!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Info;
