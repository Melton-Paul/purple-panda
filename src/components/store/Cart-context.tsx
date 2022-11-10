import React from "react";

export const CartContext = React.createContext({
  size: 0,
  items: [],
  inView: {
    name: "",
    desc: "",
    img: "",
    price: 0,
  },
  changeView: (obj: {
    name: string;
    desc: string;
    img: string;
    price: number;
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
    price: 0,
  });

  function changeView(obj: {
    name: string;
    desc: string;
    img: string;
    price: number;
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
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
