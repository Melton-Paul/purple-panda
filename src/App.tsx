import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TranslateModal from "./components/TranslateModal/TranslateModal";
import { LanguageContext } from "./components/store/Language-context";
import Popular from "./components/Popular/Popular";
import Contact from "./components/Contact/Contact";

function App() {
  const languageCtx = React.useContext(LanguageContext);

  return (
    <div>
      <Navbar />
      {languageCtx.showLanguageModal && <TranslateModal />}
      <Hero />
      <Popular />
      <Contact />
    </div>
  );
}

export default App;
