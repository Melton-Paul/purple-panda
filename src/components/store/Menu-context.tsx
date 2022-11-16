import React from "react";

interface menuItem {
  name: "";
  img: "";
  price: "";
}

export const MenuContext = React.createContext({
  menu: [{ name: "", img: "", price: "" }],
  special: { name: "", img: "", price: "" },
});

const MenuContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [menu, setMenu] = React.useState<menuItem[]>([]);
  const [special, setSpecial] = React.useState({
    name: "",
    img: "",
    price: "",
  });

  React.useEffect(() => {
    fetch("https://purplepanda-default-rtdb.firebaseio.com/.json")
      .then((res) => res.json())
      .then((data) => {
        setSpecial(data.special);
        for (let menuItem in data.menu) {
          if (menuItem !== "0") {
            setMenu((prev) => [...prev, data.menu[menuItem]]);
          }
        }
      });
  }, []);

  const contextValue = {
    menu,
    special,
  };
  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};

export default MenuContextProvider;