import React from "react";

export const CartContext = React.createContext({
  size: 0,
  items: [],
  inView: {
    name: "",
    desc: "",
    img: "",
    price: "",
  },
  changeView: (obj: {
    name: string;
    desc: string;
    img: string;
    price: string;
  }) => {},
});

const CartContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [size, setSize] = React.useState(0);
  const [items, setItems] = React.useState([]);
  const [inView, setInView] = React.useState({
    name: "",
    desc: "",
    img: "",
    price: "",
  });

  function addItem() {
    setItems([]);
  }

  function changeView(obj: {
    name: string;
    desc: string;
    img: string;
    price: string;
  }) {
    setInView(obj);
  }

  React.useEffect(() => {
    setSize(items.length);
  }, [items.length]);

  const contextValue = {
    size,
    items,
    inView,
    changeView,
    addItem,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
