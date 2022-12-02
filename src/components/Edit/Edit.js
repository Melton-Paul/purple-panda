import React from "react";
import styles from "./Edit.module.css";
import { MenuContext } from "../store/Menu-context";

const Edit = () => {
  const menuCtx = React.useContext(MenuContext);
  const [special, setSpecial] = React.useState(menuCtx.special);
  const [menu, setMenu] = React.useState(menuCtx.menu);

  function menuHandleChange(e, index) {
    const { name, value } = e.target;
    setMenu((prev) => {
      return prev.map((obj, i) => {
        return i === index ? { ...obj, [name]: value } : obj;
      });
    });
  }
  function specialChange(e) {
    const { name, value } = e.target;
    setSpecial((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    menuCtx.update(special, menu);
    fetch("https://purplepanda-default-rtdb.firebaseio.com/.json", {
      method: "PUT",
      body: JSON.stringify({
        menu,
        special,
      }),
    });
  }

  React.useEffect(() => {
    setSpecial(menuCtx.special);
    setMenu(menuCtx.menu);
  }, [menuCtx]);

  const menuHtml = menu.map((menuItem, index) => (
    <form className={styles.form}>
      <input
        value={menuItem.name}
        onChange={(e) => {
          menuHandleChange(e, index);
        }}
        name={menuItem.name}
        placeholder="Name"
        type="text"
      />
      <input
        onChange={(e) => {
          menuHandleChange(e, index);
        }}
        value={menuItem.price}
        placeholder="Price"
        name="price"
        type="text"
      />
      <div className={styles["img-upload"]}>
        <label htmlFor={menuItem.name + "Img"}>
          Image upload:
          <img src={menuItem.img} alt={menuItem.name} />
        </label>
        <input
          id={menuItem.name + "Img"}
          name={menuItem.name + "Img"}
          onChange={(e) => {
            menuHandleChange(e, index);
          }}
          type="file"
          accept="image/*"
        />
      </div>
      <button onClick={handleSubmit}>Update</button>
    </form>
  ));

  return (
    <div className={styles.edit}>
      <h2 className="section-title">Edit Today's Special</h2>
      <form className={styles.form}>
        <input
          value={special.name}
          onChange={specialChange}
          name="name"
          placeholder="Name"
          type="text"
        />
        <input
          onChange={specialChange}
          value={special.price}
          placeholder="Price"
          name="price"
          type="text"
        />
        <div className={styles["img-upload"]}>
          <label htmlFor="img">
            Image upload:
            <img src={special.img} alt={special.name} />
          </label>
          <input
            id="img"
            name="img"
            onChange={specialChange}
            type="file"
            accept="image/*"
          />
        </div>

        <button onClick={handleSubmit}>Update</button>
      </form>
      <h2 className="section-title">Edit Menu</h2>
      <div className={styles["menu-container"]}>{menuHtml}</div>
    </div>
  );
};
export default Edit;
