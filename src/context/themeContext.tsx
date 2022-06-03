import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({ theme: "", setTheme: (a: string) => {} });

const ThemeProvider = (props: any) => {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };

  return <ThemeContext.Provider value={value} {...props} />;
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
