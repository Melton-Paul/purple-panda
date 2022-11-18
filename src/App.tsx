import React from "react";
import Navbar from "./components/Navbar/Navbar";
import TranslateModal from "./components/TranslateModal/TranslateModal";
import { LanguageContext } from "./components/store/Language-context";
import OrderCard from "./components/Cards/OrderCard/OrderCard";
import MainPage from "./components/Pages/Main";
import { Route, Routes } from "react-router";
import Menu from "./components/Menu/Menu";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Footer from "./components/Footer/Footer";
import AuthForm from "./components/Admin/AuthForm";
import AuthContext from "./components/store/auth-context";
import Edit from "./components/Edit/Edit";

function App() {
  const languageCtx = React.useContext(LanguageContext);
  const [scrollVal, setScrollVal] = React.useState(0);
  const authCtx = React.useContext(AuthContext);

  function handleScroll() {
    setScrollVal(window.scrollY);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <Navbar />
      {languageCtx.showLanguageModal && <TranslateModal />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<MainPage />} />
        <Route path="/admin" element={<AuthForm />} />
        {authCtx.isLoggedIn && <Route path="/edit" element={<Edit />} />}
      </Routes>
      <OrderCard />
      {scrollVal > 400 && <ScrollTop />}
      <Footer />
    </main>
  );
}

export default App;
