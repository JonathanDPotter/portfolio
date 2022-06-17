import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "",
  setTheme: (a: string) => {},
  themesOpen: false,
  setThemesOpen: (a: boolean) => {},
});

// checks if device has dark mode enabled
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

const initialTheme = prefersDark ? "dark" : "light";

const ThemeProvider = (props: any) => {
  // initializes theme to previously chosen theme or device mode
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || initialTheme
  );
  // state for if theme modal is open
  const [themesOpen, setThemesOpen] = useState(false);
  const value = { theme, setTheme, themesOpen, setThemesOpen };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={value} {...props} />;
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
