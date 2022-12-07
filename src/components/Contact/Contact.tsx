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
        body: "Get in touch to find out more about offerings, menus, catering and special events.  We specialize in caterings and bring the Philippines right to your front door! No mess, no stress!",
      }
    : {
        h2: "Makipag-ugnayan!",
        h3: "Iba pang paraan",
        call: "Tawagan mo kami",
        body: "Makipag-ugnayan para malaman ang higit pa tungkol sa mga alok, menu, catering at mga espesyal na kaganapan. Dalubhasa kami sa mga catering at dinadala ang Pilipinas sa iyong harapan! Walang gulo, walang stress!",
      };

  return (
    <Element name="contact">
      <div className={styles["contact-background"]}>
        <section className={`${styles.contact} container`}>
          <div className={styles["contact--options__container"]}>
            <div className={styles["contact--options"]}>
              <h3 className="section-title">{languageObj.h3}</h3>
              <div className={styles["contact-body"]}>
                <p>{languageObj.body}</p>
                <a
                  href="mailto:purplepandafilipinofood@gmail.com"
                  className={`${styles.email} ${styles.link}`}
                  style={{ fontSize: ".9rem" }}
                >
                  purplepandafilipinofood@gmail.com
                </a>
                <a
                  href="tel:417-791-1529"
                  className={`${styles.phone} ${styles.link}`}
                  style={{ fontSize: "1.4rem" }}
                >
                  417.791.1529
                </a>
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
        </section>
      </div>
    </Element>
  );
}
