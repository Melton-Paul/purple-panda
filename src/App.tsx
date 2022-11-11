import React from "react";
import Navbar from "./components/Navbar/Navbar";
import TranslateModal from "./components/TranslateModal/TranslateModal";
import { LanguageContext } from "./components/store/Language-context";
import OrderCard from "./components/Cards/OrderCard/OrderCard";
import MainPage from "./components/Pages/Main";
import { Route, Routes } from "react-router";
import Menu from "./components/Menu/Menu";

function App() {
  const languageCtx = React.useContext(LanguageContext);

  return (
    <main>
      <Navbar />
      {languageCtx.showLanguageModal && <TranslateModal />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
      <OrderCard />
    </main>
  );
}

export default App;
