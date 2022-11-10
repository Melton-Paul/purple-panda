import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CartContextProvider from "./components/store/Cart-context";
import LanguageContextProvider from "./components/store/Language-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <LanguageContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>
  </LanguageContextProvider>
);