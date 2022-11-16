import React, { ReactNode } from "react";
import styles from "./ToolTip.module.css";

const ToolTip: React.FC<{ children: ReactNode; content: string }> = (props) => {
  const [hovered, setHovered] = React.useState(false);
  let timeout: any;

  function showTip() {
    timeout = setTimeout(() => {
      setHovered(true);
    }, 250);
  }

  function hideTip() {
    clearTimeout(timeout);
    setHovered(false);
  }

  return (
    <div
      className={styles["Tooltip-wrapper"]}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {hovered && (
        <div className={styles["Tooltip-tip"] + " " + styles.top}>
          {props.content}
        </div>
      )}
      {props.children}
    </div>
  );
};

export default ToolTip;
