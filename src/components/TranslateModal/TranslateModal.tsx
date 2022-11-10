import React from "react";
import styles from "./TranslateModal.module.css";
import { LanguageContext } from "../store/Language-context";

export default function TranslateModal() {
  const LanguageCtx = React.useContext(LanguageContext);

  return (
    <>
      <div className={styles["modal-background"]}></div>
      <div className={styles.modal}>
        <div className={styles["modal-title"]}>
          <h2>What language would you like to view this page in?</h2>
          <span>( ¿En qué idioma le gustaría ver esta página? )</span>
        </div>
        <div className={styles["modal-btn__container"]}>
          <button onClick={() => LanguageCtx.toggleEnglish(true)}>
            English
          </button>
          <span>OR</span>
          <button onClick={() => LanguageCtx.toggleEnglish(false)}>
            Filipino
          </button>
        </div>
      </div>
    </>
  );
}
