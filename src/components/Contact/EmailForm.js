import { useForm, ValidationError } from "@formspree/react";
import styles from "./EmailForm.module.css";
import Button from "../UI/Button/Button";
import React from "react";
import { LanguageContext } from "../store/Language-context";

export default function EmailForm() {
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [state, handleSubmit] = useForm("xnqrwwde");
  const languageCtx = React.useContext(LanguageContext);

  function submitHandler(e) {
    e.preventDefault();
    handleSubmit(e);
  }

  const languageObj = languageCtx.english
    ? {
        name: "Name",
        message: "Message",
        submit: "Submit",
        h3: "Your Email Was Sent!",
        confirm: "Thank you for contacting us, we will be in touch shortly!",
      }
    : {
        name: "Pangalan",
        message: "Mensahe",
        submit: "Ipasa",
        h3: "Naipadala ang Iyong Email!",
        confirm:
          "Salamat sa pakikipag-ugnayan sa amin, makikipag-ugnayan kami sa ilang sandali!",
      };

  const { name, message, submit, h3, confirm } = languageObj;

  React.useEffect(() => {
    if (!state.succeeded) {
      return;
    }
    setShowConfirmation(true);
    const timer = setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [state.succeeded]);

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      {showConfirmation ? (
        <div className={styles["form-success__container"]}>
          <h3>{h3}</h3>
          <p>{confirm}</p>
        </div>
      ) : (
        <>
          <div className={styles["input--section"]}>
            <label htmlFor="name">{name}:</label>
            <input id="name" type="text" name="name" maxLength={40} />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className={styles["input--section"]}>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" maxLength={70} />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className={styles["input--section"]}>
            <label htmlFor="message">{message}:</label>
            <textarea
              rows={4}
              className={styles.textarea}
              id="message"
              name="message"
              maxLength={1000}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <Button className={styles.button} disabled={state.submitting}>
            {submit}
          </Button>
        </>
      )}
    </form>
  );
}
