import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import OrderCartContextProvider from "./components/store/Cart-context";
import LanguageContextProvider from "./components/store/Language-context";
import ScrollToTop from "./components/scrollToTop";
import MenuContextProvider from "./components/store/Menu-context";
import { AuthContextProvider } from "./components/store/auth-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <LanguageContextProvider>
    <OrderCartContextProvider>
      <AuthContextProvider>
        <MenuContextProvider>
          <BrowserRouter>
            <ScrollToTop />
            <App />
          </BrowserRouter>
        </MenuContextProvider>
      </AuthContextProvider>
    </OrderCartContextProvider>
  </LanguageContextProvider>
);
