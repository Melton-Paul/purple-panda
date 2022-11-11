import React from "react";
import MenuCard from "../Cards/MenuCard/MenuCard";
import styles from "./Menu.module.css";
const logo = require("../../images/tPanda.png");
const temp = require("../../images/temp.jpg");

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles["menu-card"]}>
        <div className={styles["menu-logo__container"]}>
          <img src={logo} alt="" className={styles["menu-logo"]} />
        </div>
        <div className={styles["menu-section"]}>
          <h3 className={styles["menu-section__title"]}>Entrees</h3>
          <div className={styles["menu-item"]}>
            <MenuCard
              name="Garlic Noodles"
              desc="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
              img={temp}
              price={5.99}
            />
          </div>
          <div className={styles["menu-item"]}>
            <MenuCard
              name="Garlic Noodles"
              desc="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
              img={temp}
              price={5.99}
            />
          </div>
          <div className={styles["menu-item"]}>
            <MenuCard
              name="Garlic Noodles"
              desc="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
              img={temp}
              price={5.99}
            />
          </div>
          <div className={styles["menu-item"]}>
            <MenuCard
              name="Garlic Noodles"
              desc="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
              img={temp}
              price={5.99}
            />
          </div>
          <div className={styles["menu-item"]}>
            <MenuCard
              name="Garlic Noodles"
              desc="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
              img={temp}
              price={5.99}
            />
          </div>
          <div className={styles["menu-item"]}>
            <MenuCard
              name="Garlic Noodles"
              desc="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
              img={temp}
              price={5.99}
            />
          </div>
          <div className={styles["menu-item"]}>
            <MenuCard
              name="Garlic Noodles"
              desc="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
              img={temp}
              price={5.99}
            />
          </div>
          <div className={styles["menu-item"]}>
            <MenuCard
              name="Garlic Noodles"
              desc="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
              img={temp}
              price={5.99}
            />
          </div>
          <div className={styles["menu-item"]}>
            <MenuCard
              name="Garlic Noodles"
              desc="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
              img={temp}
              price={5.99}
            />
          </div>
          <div className={styles["menu-item"]}>
            <MenuCard
              name="Garlic Noodles"
              desc="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
              img={temp}
              price={5.99}
            />
          </div>
          <div className={styles["menu-item"]}>
            <MenuCard
              name="Garlic Noodles"
              desc="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
              img={temp}
              price={5.99}
            />
          </div>
        </div>
        <div className={styles["menu-section"]}>
          <h3 className={styles["menu-section__title"]}>Sauces</h3>
          <div className={styles["menu-item"]}>
            <MenuCard
              name="Vinegar, Onion & Chili"
              desc=""
              img={temp}
              price={5.99}
            />
          </div>
          <div className={styles["menu-item"]}>
            <MenuCard name="Lechon Sauce" desc="" img={temp} price={5.99} />
          </div>
          <div className={styles["menu-item"]}>
            <MenuCard name="Panda Sauce" desc="" img={temp} price={5.99} />
          </div>
          <div className={styles["menu-item"]}>
            <MenuCard name="Soy & Lemon" desc="" img={temp} price={5.99} />
          </div>
        </div>
        <div className={styles["menu-section"]}>
          <h3 className={styles["menu-section__title"]}>Drinks</h3>
          <ul className={styles["menu-drinks"]}>
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
