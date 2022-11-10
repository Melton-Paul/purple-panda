import React from "react";

export const LanguageContext = React.createContext({
  english: true,
  toggleEnglish: (boolean: boolean) => {},
  showLanguageModal: true,
});

const LanguageContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [english, setEnglish] = React.useState(true);
  const [showLanguageModal, setShowLanguageModal] = React.useState(
    localStorage.getItem("english") ? false : true
  );

  function toggleEnglish(boolean: boolean) {
    setEnglish(boolean);
    setShowLanguageModal(false);
  }

  React.useEffect(() => {
    if (localStorage.getItem("english")) {
      setEnglish(localStorage.getItem("english") === "false" ? false : true);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("english", JSON.stringify(english));
  }, [english]);

  const valueObject = {
    english,
    toggleEnglish,
    showLanguageModal,
  };
  return (
    <LanguageContext.Provider value={valueObject}>
      {children}
    </LanguageContext.Provider>
  );
};
export default LanguageContextProvider;
