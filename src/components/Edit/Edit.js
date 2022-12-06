import React from "react";
import styles from "./Edit.module.css";
import { MenuContext } from "../store/Menu-context";

const Edit = () => {
  const menuCtx = React.useContext(MenuContext);
  const [special, setSpecial] = React.useState(menuCtx.special);
  const [menu, setMenu] = React.useState(menuCtx.menu);
  const [isDeleting, setIsDeleting] = React.useState("");
  const [isAdding, setIsAdding] = React.useState(false);

  const [newItem, setNewItem] = React.useState({
    name: "",
    price: "",
    img: "",
    hidden: "false",
  });

  function menuHandleChange(e, index) {
    const { name, value } = e.target;
    console.log(index);
    setMenu((prev) => {
      return prev.map((obj, i) => {
        if (i === index) {
          console.log(obj);
          console.log(name);
        }
        return i === index ? { ...obj, [name]: value } : obj;
      });
    });
  }

  function filterMenu(menuItem, e) {
    e.preventDefault();
    const temp = menu;
    const result = temp.filter((item) => item.name !== menuItem);
    setMenu(result);
    setIsDeleting("");
    // updateData();
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

  function addChange(e) {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  }

  function addReset() {
    setIsAdding(false);
    setNewItem({
      name: "",
      price: "",
      img: "",
    });
  }

  function addSubmit() {
    setMenu((prev) => [...prev, newItem]);
    addReset();
    // updateData();
  }

  // function updateData() {
  //   fetch("https://purplepanda-default-rtdb.firebaseio.com/.json", {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       menu,
  //       special,
  //     }),
  //   });
  // }

  React.useEffect(() => {
    setSpecial(menuCtx.special);
    setMenu(menuCtx.menu);
  }, [menuCtx]);

  React.useEffect(() => {
    fetch("https://purplepanda-default-rtdb.firebaseio.com/.json", {
      method: "PUT",
      body: JSON.stringify({
        menu,
        special,
      }),
    });
  }, [menu, special]);

  const menuHtml = menu.map((menuItem, index) => (
    <form className={styles.form}>
      <input
        value={menuItem.name}
        onChange={(e) => {
          menuHandleChange(e, index);
        }}
        name="name"
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
          name="img"
          onChange={(e) => {
            menuHandleChange(e, index);
          }}
          type="file"
          accept="image/*"
        />
      </div>
      <div className={styles["switch-field"]}>
        <input
          type="radio"
          id={"rad1" + menuItem.name}
          name="hidden"
          value="false"
          checked={menuItem.hidden === "false"}
          onChange={(e) => {
            menuHandleChange(e, index);
          }}
        />
        <label for={"rad1" + menuItem.name}>Shown On Menu</label>
        <input
          type="radio"
          id={"rad2" + menuItem.name}
          checked={menuItem.hidden === "true"}
          name="hidden"
          onChange={(e) => {
            menuHandleChange(e, index);
          }}
          value="true"
        />
        <label for={"rad2" + menuItem.name}>Hidden On Menu</label>
      </div>
      <div className={styles["button-container"]}>
        {/* <button onClick={handleSubmit}>Update</button> */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsDeleting(menuItem.name);
          }}
        >
          Remove Item
        </button>
      </div>
    </form>
  ));

  return (
    <div className={styles.edit}>
      {isDeleting && (
        <div className={styles["delete-module"]}>
          <div className={styles["delete-module--content"]}>
            Are you sure you want to delete this item, this action cannot be
            undone!
            <div className={styles["button-container"]}>
              <button onClick={(e) => filterMenu(isDeleting, e)}>Yes</button>
              <button onClick={() => setIsDeleting("")}>No</button>
            </div>
          </div>
        </div>
      )}
      {isAdding && (
        <div className={styles["delete-module"]}>
          <div className={styles["delete-module--content"]}>
            <input
              value={newItem.name}
              onChange={addChange}
              name="name"
              placeholder="Name"
              type="text"
            />
            <input
              onChange={addChange}
              value={newItem.price}
              placeholder="Price"
              name="price"
              type="text"
            />
            {/* <div className={styles["img-upload"]}>
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
            </div> */}
            <div className={styles["button-container"]}>
              <button onClick={addSubmit}>Add Item</button>
              <button onClick={addReset}>Cancel</button>
            </div>
          </div>
        </div>
      )}
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
      <button
        className={styles["add-button"]}
        onClick={() => setIsAdding(true)}
      >
        Add New Menu Item
      </button>
    </div>
  );
};
export default Edit;
