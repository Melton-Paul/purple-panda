import React from "react";
import styles from "./Edit.module.css";

const Edit = () => {
  const [special, setSpecial] = React.useState({
    name: "",
    price: "",
    // img: null,
  });

  function handleChange(e: any) {
    const { name, value } = e.target;
    setSpecial((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    fetch("https://purplepanda-default-rtdb.firebaseio.com/special.json", {
      method: "PUT",
      body: JSON.stringify(special),
    });
  }

  return (
    <div className={styles.edit}>
      <h2 className="section-title">Edit Today's Special</h2>
      <form className={styles.form}>
        <input
          value={special.name}
          onChange={handleChange}
          name="name"
          placeholder="Name"
          type="text"
        />
        <input
          onChange={handleChange}
          value={special.price}
          placeholder="Price"
          name="price"
          type="text"
        />
        <div className={styles["img-upload"]}>
          <label htmlFor="img">Image upload:</label>
          <input
            id="img"
            name="img"
            onChange={handleChange}
            type="file"
            accept="image/*"
          />
        </div>
        <button onClick={handleSubmit}>Update</button>
      </form>
    </div>
  );
};
export default Edit;
