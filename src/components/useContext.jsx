import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {}, //função vazia
});
//Provider envolve todos os componentes
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      return setTheme("dark");
    }
    return setTheme("light");
  };

  return (
    // Arvore de Componentes
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      {/* {console.log(children)} Pega as funções filhos dentro do ThemeContextProvider*/}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
