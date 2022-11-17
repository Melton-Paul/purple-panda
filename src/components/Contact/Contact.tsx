import React from "react";
import EmailForm from "./EmailForm";
import styles from "./Contact.module.css";
import Button from "../UI/Button/Button";
import ToolTip from "../UI/ToolTip/ToolTip";
import { LanguageContext } from "../store/Language-context";
import { Element } from "react-scroll";

export default function Contact() {
  const languageCtx = React.useContext(LanguageContext);

  const languageObj = languageCtx.english
    ? {
        h2: "Get In Touch!",
        h3: "Contact Options",
        call: "Give us a call",
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
          <h2 className="section-title">{languageObj.h2}</h2>
          <div className={styles["contact--options__container"]}>
            <EmailForm />
            <div className={styles["contact--options"]}>
              <h3 className={styles["contact--options__title"]}>
                {languageObj.h3}
              </h3>
              <ul className={styles["contact--options__tags"]}>
                <li>
                  <ToolTip content="Starts a phone call">
                    <Button
                      className={styles.link}
                      href="https://github.com/Melton-Paul"
                      target="_blank"
                      link={true}
                    >
                      {languageObj.call}
                    </Button>
                  </ToolTip>
                </li>
                <li>
                  <ToolTip content="Goes to our facebook">
                    <Button
                      className={styles.link}
                      href="https://www.linkedin.com/in/paul-m-999361237/"
                      target="_blank"
                      link={true}
                    >
                      Facebook
                    </Button>
                  </ToolTip>
                </li>
                <li>
                  <ToolTip content="Attempts to open your logged in email service">
                    <Button
                      className={styles.link}
                      href="mailto: melton.paul@hotmail.com"
                      target="_blank"
                      link={true}
                    >
                      Email
                    </Button>
                  </ToolTip>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </Element>
  );
}
