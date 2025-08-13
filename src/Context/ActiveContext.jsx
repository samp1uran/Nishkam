import { createContext, useContext, useState, useEffect } from "react";

const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [active, setActive] = useState(() => {
    return localStorage.getItem("activeMenu") || "HOME";
  });

  useEffect(() => {
    localStorage.setItem("activeMenu", active);
  }, [active]);

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
};

export const useActive = () => useContext(ActiveContext);
