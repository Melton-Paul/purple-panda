import React from "react";
import styles from "./OrderCard.module.css";
import { CartContext } from "../../store/Cart-context";

const OrderCard: React.FC<{
  name: string;
  description: string;
  img: string;
}> = ({ name, description, img }) => {
  const [quantity, setQuantity] = React.useState(1);
  const cartCtx = React.useContext(CartContext);

  function updateQuantity(up: boolean) {
    setQuantity((prev) => {
      if (up) {
        return prev + 1;
      } else if (prev <= 1) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  }
  function closeModal() {
    cartCtx.changeView({ name: "", desc: "", img: "", price: 0 });
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
          <div className={styles.modal}>
            <img className={styles["modal-img"]} src={img} alt="" />
            <div className={styles["modal-body"]}>
              <h3 className={styles.name}>{name}</h3>
              <p>{description}</p>
              <div className={styles["quantity-container"]}>
                <button
                  onClick={() => updateQuantity(false)}
                  disabled={quantity <= 1}
                  className={styles["quantity-btn"]}
                >
                  -
                </button>
                <span className={styles.quantity}>{quantity}</span>
                <button
                  onClick={() => updateQuantity(true)}
                  className={styles["quantity-btn"]}
                >
                  +
                </button>
              </div>
              <h4>How to get it</h4>
              <div className={styles.location}>
                <p>Store Pickup</p>
                <p>Purple Panda</p>
                <p>At 2166 State Highway 248, Branson, MO</p>
              </div>
              <div className={styles["btn-container"]}>
                <button className={styles["btn-cancel"]} onClick={closeModal}>
                  X
                </button>
                <button className={styles["btn-submit"]}>Add to Order</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default OrderCard;
