import React from "react";
import styles from "./Popular.module.css";
import { Link } from "react-router-dom";
import MenuCard from "../Cards/MenuCard/MenuCard";
const test = require("../../images/test.webp");

const Popular = () => {
  return (
    <div className={styles["popular-section"]}>
      <h2 className="section-title">Most Popular Items</h2>
      <div className={styles["popular-section__cards"]}>
        <MenuCard
          name="Garlic Noodles"
          desc="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
          img={test}
          price={5.99}
        />
        <MenuCard
          name="Garlic Noodles"
          desc="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
          img={test}
          price={5.99}
        />
        <MenuCard
          name="Garlic Noodles"
          desc="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
          img={test}
          price={5.99}
        />
        <MenuCard
          name="Garlic Noodles"
          desc="Savory and garlicky pan-friend noodles topped with shaved Parmesan cheese, spicy sesame aiolo, scallions, and cilantro."
          img={test}
          price={5.99}
        />
      </div>
      <Link to="/menu">
        <button className={styles["popular-section__btn"]}>
          View Full Menu
        </button>
      </Link>
    </div>
  );
};

export default Popular;
