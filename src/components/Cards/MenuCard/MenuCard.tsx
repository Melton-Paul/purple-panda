import React from "react";
import styles from "./MenuCard.module.css";

const MenuCard: React.FC<{
  name: string;
  description: string;
  img: string;
}> = ({ name, description, img }) => {
  return (
    <div className={styles["menu-card"]}>
      <div>
        <h3 className={styles["menu-card__name"]}>{name}</h3>
        <p className={styles["menu-card__desc"]}>{description}</p>
      </div>
      <img src={img} alt="" className={styles["menu-card-img"]} />
    </div>
  );
};

export default MenuCard;
