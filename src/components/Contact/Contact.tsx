import React from "react";
import EmailForm from "./EmailForm";
import styles from "./Contact.module.css";
import { LanguageContext } from "../store/Language-context";
import { Element } from "react-scroll";

export default function Contact() {
  const languageCtx = React.useContext(LanguageContext);

  const languageObj = languageCtx.english
    ? {
        h2: "Get In Touch!",
        h3: "Contact Us!",
        call: "Give us a call",
        body: "Get in touch to find out more about offerings, menus, catering and special events.  We specialize in caterings and bring the truck right to your front door! No mess, no stress, no clean up for you!",
      }
    : {
        h2: "Makipag-ugnayan!",
        h3: "Iba pang paraan",
        call: "Tawagan mo kami",
      };

  return (
    <Element name="contact">
      <div className={styles["contact-background"]}>
        <article className={`${styles.contact} container`}>
          <div className={styles["contact--options__container"]}>
            <div className={styles["contact--options"]}>
              <h3 className="section-title">{languageObj.h3}</h3>
              <div className={styles["contact-body"]}>
                <p>{languageObj.body}</p>
                <p className={styles.email}>
                  purplepandafilipinofood@gmail.com
                </p>
                <p className={styles.phone}>417.791.1529</p>
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
            <EmailForm />
          </div>
        </article>
      </div>
    </Element>
  );
}
