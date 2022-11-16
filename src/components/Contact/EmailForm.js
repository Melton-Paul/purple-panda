import { useForm, ValidationError } from "@formspree/react";
import styles from "./EmailForm.module.css";
import Button from "../UI/Button/Button";
import React from "react";

export default function EmailForm() {
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [state, handleSubmit] = useForm("xnqrwwde");

  function submitHandler(e) {
    e.preventDefault();
    handleSubmit(e);
  }

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
          <h3>Your Email Was Sent!</h3>
          <p>Thank you for contacting us, we will be in touch shortly!</p>
        </div>
      ) : (
        <>
          <div className={styles["input--section"]}>
            <label htmlFor="name">Name:</label>
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
            <label htmlFor="message">Message:</label>
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
            Submit
          </Button>
        </>
      )}
    </form>
  );
}
