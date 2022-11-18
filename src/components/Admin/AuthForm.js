import React from "react";
import { useNavigate } from "react-router";
import styles from "./AuthForm.module.css";
import AuthContext from "../store/auth-context";
import Button from "../UI/Button/Button";
import loadingGif from "../../images/loading1.gif";

export default function AuthForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [attempts, setAttempts] = React.useState(5);
  const [loading, setLoading] = React.useState(false);
  const authCtx = React.useContext(AuthContext);
  const navigate = useNavigate();

  const emailIsValid = email.includes("@");
  const passwordIsValid = password.length >= 6;

  const formValid = emailIsValid && passwordIsValid;

  function getErrorMessage() {
    return `Password Incorrect, ${attempts} remaining.`;
  }
  const style = {
    height:
      (error && !emailIsValid) || (error && !passwordIsValid)
        ? "660px"
        : "560px",
  };

  function passwordChange(e) {
    setPassword(e.target.value);
  }
  function emailChange(e) {
    setEmail(e.target.value);
  }

  function submitHandler(e) {
    if (!formValid) {
      return;
    }
    setError("");
    setLoading(true);
    e.preventDefault();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCHIzHdtLShe1-f-9jz619ufGxx1JzO7cE",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        navigate("/edit");
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.loginHandler(
          data.idToken,
          data.localId,
          expirationTime.toISOString()
        );
      })
      .catch((err) => {
        setError(err.message);
        setAttempts((prev) => prev - 1);
      });
  }

  return (
    <section
      className={styles.auth}
      style={style}
      data-aos="flip-up"
      data-aos-duration="1000"
    >
      <h1>Welcome Back</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.control}>
          <input
            type="email"
            id="email"
            onChange={emailChange}
            value={email}
            placeholder="Email Address"
            required
          />
        </div>
        <div className={styles.control}>
          <input
            type="password"
            value={password}
            onChange={passwordChange}
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div className={styles.actions}>
          {error && <p className={styles.invalid}>{getErrorMessage()}</p>}
          {!loading ? (
            <Button color="primary">Login</Button>
          ) : (
            <img
              className={styles.loading}
              src={loadingGif}
              alt="loading icon"
            />
          )}
        </div>
      </form>
    </section>
  );
}
