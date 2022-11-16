import React from "react";
import styles from "./MenuCard.module.css";
import { CartContext } from "../../store/Cart-context";

const MenuCard: React.FC<{
  name: string;
  desc?: string;
  img?: string;
  price: string;
  moreInfo?: boolean;
}> = ({ name, desc = "", img = "", price, moreInfo = true }) => {
  const cartCtx = React.useContext(CartContext);

  return (
    <div
      className={styles["menu-card"]}
      onClick={() => cartCtx.changeView({ name, desc, img, price })}
    >
      <img src={img} alt="" className={styles["menu-card-img"]} />
      <div className={styles["menu-card__info"]}>
        <h3 className={styles["menu-card__name"]}>
          {name} <span className={styles["menu-card__price"]}>{price}$</span>
        </h3>
        <p className={styles["menu-card__desc"]}>{desc}</p>
        {moreInfo && (
          <span className={styles.tip}>
            <i className="fa-solid fa-hand-pointer"></i>
            More Info
          </span>
        )}
      </div>
    </div>
  );
};

export default MenuCard;
