import React from "react";
import styles from "./OrderCard.module.css";
import { OrderCardContext } from "../../store/Cart-context";

const OrderCard = () => {
  const cardCtx = React.useContext(OrderCardContext);

  function closeModal() {
    cardCtx.changeView({ name: "", desc: "", img: "", price: "" });
  }

  React.useEffect(() => {
    if (cardCtx.inView.name !== "") {
      document.querySelector("body")!.style.overflow = "hidden";
    } else {
      document.querySelector("body")!.style.overflow = "auto";
    }
  }, [cardCtx.inView.name]);

  return (
    <>
      {cardCtx.inView.name !== "" && (
        <>
          <div
            className={styles["modal-background"]}
            onClick={closeModal}
          ></div>
          <section className={styles.modal} onClick={closeModal}>
            <img
              className={styles["modal-img"]}
              src={cardCtx.inView.img}
              alt=""
            />
            <div className={styles["modal-body"]}>
              <h3 className={styles.name}>{cardCtx.inView.name}</h3>
              <p>{cardCtx.inView.desc}</p>
              <p className={styles.price}>${cardCtx.inView.price}</p>

              <button className={styles["btn-cancel"]} onClick={closeModal}>
                X
              </button>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default OrderCard;
