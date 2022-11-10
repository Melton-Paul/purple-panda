import React from "react";
import styles from "./MenuCard.module.css";
import { CartContext } from "../../store/Cart-context";

const MenuCard: React.FC<{
  name: string;
  desc: string;
  img: string;
  price: number;
}> = ({ name, desc, img, price }) => {
  const cartCtx = React.useContext(CartContext);

  return (
    <div
      className={styles["menu-card"]}
      onClick={() => cartCtx.changeView({ name, desc, img, price })}
    >
      <div>
        <h3 className={styles["menu-card__name"]}>{name}</h3>
        <p className={styles["menu-card__desc"]}>{desc}</p>
      </div>
      <img src={img} alt="" className={styles["menu-card-img"]} />
    </div>
  );
};

export default MenuCard;