import React from "react";
import EmailForm from "./EmailForm";
import styles from "./Contact.module.css";
import Button from "../UI/Button/Button";
import ToolTip from "../UI/ToolTip/ToolTip";
import { Element } from "react-scroll";

export default function Contact() {
  return (
    <Element name="contact">
      <div className={styles["contact-background"]}>
        <article className={`${styles.contact} container`}>
          <h2 className="section-title">Get In Touch!</h2>
          <div className={styles["contact--options__container"]}>
            <EmailForm />
            <div className={styles["contact--options"]}>
              <h3 className={styles["contact--options__title"]}>
                Contact Us In <br /> Other Ways
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
                      Give us a Call
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
