import React from "react";
import styles from "./Popular.module.css";
import MenuCard from "../Cards/MenuCard/MenuCard";
const test = require("../../images/test.webp");

const Popular = () => {
  return (
    <div className={styles["popular-section"]}>
      <h2 className="section-title">Most Popular Items</h2>
      <div className={styles["popular-section__cards"]}>
        <MenuCard
          name="Garlic Noodles"
          description="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
          img={test}
        />
        <MenuCard
          name="Garlic Noodles"
          description="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
          img={test}
        />
        <MenuCard
          name="Garlic Noodles"
          description="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
          img={test}
        />
        <MenuCard
          name="Garlic Noodles"
          description="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
          img={test}
        />
      </div>
      <button className={styles["popular-section__btn"]}>Order Now</button>
    </div>
  );
};

export default Popular;
