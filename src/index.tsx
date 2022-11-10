import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LanguageContextProvider from "./components/store/Language-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <LanguageContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LanguageContextProvider>
);
