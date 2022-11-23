import React from "react";
import styles from "./MovingSection.module.css";

const MovingSection: React.FC<{
  children: React.ReactNode;
  img: string;
  imgRight: boolean;
}> = ({ img, children, imgRight }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const width = window.innerWidth;

  const imgStyle = {
    transform: !isHovered
      ? imgRight
        ? "translate(-2rem, 2rem)"
        : "translate(2rem, 2rem)"
      : "none",
    order: width < 768 ? "1" : imgRight ? "2" : "1",
  };
  const textStyle = {
    transform: !isHovered
      ? imgRight
        ? "translate(2rem, -2rem)"
        : "translate(-2rem, -2rem)"
      : "none",
    order: width < 768 ? "2" : imgRight ? "1" : "2",
  };

  return (
    <div
      className={styles.container}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.grid}>
        <img
          src={img}
          alt="The owner smiling and waving while leaning out of the food truck window"
          className={styles.img}
          style={imgStyle}
        />
        <div className={styles["text-container"]} style={textStyle}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MovingSection;
