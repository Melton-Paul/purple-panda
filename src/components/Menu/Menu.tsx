import React from "react";
import MenuCard from "../Cards/MenuCard/MenuCard";
import styles from "./Menu.module.css";
import { MenuContext } from "../store/Menu-context";
const logo = require("../../images/tPanda.png");
const temp = require("../../images/temp.jpg");

const Menu = () => {
  const menuCtx = React.useContext(MenuContext);
  const menuHtml = menuCtx.menu.map((menuItem) => {
    return (
      <div className={styles["menu-item"]}>
        <MenuCard
          name={menuItem.name}
          desc="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
          img={menuItem.img}
          price={menuItem.price}
        />
      </div>
    );
  });

  return (
    <div className={styles.menu}>
      <div className={styles["menu-card"]}>
        <div className={styles["menu-header"]}>
          <div className={styles["menu-logo__container"]}>
            <img src={logo} alt="" className={styles["menu-logo"]} />
          </div>
          <div className={styles["menu-header_info"]}>
            <a
              href="tel:417-791-1529"
              className={styles["menu-header_info--item"]}
            >
              <i className="fa-solid fa-phone"></i>
              417-791-1529
            </a>
            <a
              href="https://www.google.com/maps/dir//2166+State+Hwy+248,+Branson,+MO+65616/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x87cf04b7527403bf:0xe71d03b322d11c5?sa=X&ved=2ahUKEwjLhNKQ0aT7AhVRkmoFHU5uACwQwwV6BAgIEAI"
              target="_blank"
              rel="noreferrer"
              className={styles["menu-header_info--item"]}
            >
              <i className="fa-solid fa-location-dot"></i>
              2166 State Hwy. 248 Branson, MO 65616
            </a>
          </div>
        </div>
        <div className={styles["menu-section"]}>
          <h3 className={styles["menu-section__title"]}>Entrees</h3>
          <div className={styles["menu-section__items"]}>{menuHtml}</div>
        </div>
        <div className={styles["menu-section"]}>
          <h3 className={styles["menu-section__title"]}>Sauces</h3>
          <div className={styles["menu-section__items"]}>
            <div className={styles["menu-item"]}>
              <MenuCard
                name="Vinegar, Onion & Chili"
                moreInfo={false}
                img={temp}
                price={"5.99"}
              />
            </div>
            <div className={styles["menu-item"]}>
              <MenuCard
                name="Lechon Sauce"
                moreInfo={false}
                img={temp}
                price={"5.99"}
              />
            </div>
            <div className={styles["menu-item"]}>
              <MenuCard
                name="Panda Sauce"
                moreInfo={false}
                img={temp}
                price={"5.99"}
              />
            </div>
            <div className={styles["menu-item"]}>
              <MenuCard
                name="Soy & Lemon"
                img={temp}
                price={"5.99"}
                moreInfo={false}
              />
            </div>
          </div>
        </div>
        <div className={styles["menu-section"]}>
          <h3 className={styles["menu-section__title"]}>Drinks</h3>
          <ul
            className={
              styles["menu-drinks"] + " " + styles["menu-section__items"]
            }
          >
            <li>
              <div className={styles["menu-item"]}>
                <p>Water</p>
                <p>$1.00</p>
              </div>
            </li>
            <li>
              <div className={styles["menu-item"]}>
                <p>Lemon Tea</p> <p>$2.00</p>
              </div>
            </li>
            <li>
              <div className={styles["menu-item"]}>
                <p>Soda</p> <p>$2.00</p>
              </div>
            </li>
            <li>
              <div className={styles["menu-item"]}>
                <p>Mango Juice</p> <p>$2.00</p>
              </div>
            </li>
            <li>
              <div className={styles["menu-item"]}>
                <p>Coconut Water</p> <p>$2.50</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Menu;
