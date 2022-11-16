import React, { ReactNode } from "react";
import styles from "./Button.module.css";

const Button: React.FC<{
  className?: string;
  children: ReactNode;
  onClick?: any;
  disabled?: boolean;
  link?: boolean;
  href?: string;
  target?: string;
}> = (props) => {
  if (props.link) {
    return (
      <a
        className={styles.button + " " + props.className}
        href={props.href}
        target={props.target || ""}
      >
        {props.children}
      </a>
    );
  }
  return (
    <button className={styles.button + " " + props.className}>
      {props.children}
    </button>
  );
};
export default Button;
