import React from "react";
import styles from "./OrderCard.module.css";
import { CartContext } from "../../store/Cart-context";

const OrderCard = () => {
  const cartCtx = React.useContext(CartContext);

  function closeModal() {
    cartCtx.changeView({ name: "", desc: "", img: "", price: "" });
  }

  React.useEffect(() => {
    if (cartCtx.inView.name !== "") {
      document.querySelector("body")!.style.overflow = "hidden";
    } else {
      document.querySelector("body")!.style.overflow = "auto";
    }
  }, [cartCtx.inView.name]);

  return (
    <>
      {cartCtx.inView.name !== "" && (
        <>
          <div
            className={styles["modal-background"]}
            onClick={closeModal}
          ></div>
          <div className={styles.modal} onClick={closeModal}>
            <img
              className={styles["modal-img"]}
              src={cartCtx.inView.img}
              alt=""
            />
            <div className={styles["modal-body"]}>
              <h3 className={styles.name}>{cartCtx.inView.name}</h3>
              <p>{cartCtx.inView.desc}</p>
              <p className={styles.price}>${cartCtx.inView.price}</p>

              <button className={styles["btn-cancel"]} onClick={closeModal}>
                X
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default OrderCard;
