import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: "", setTheme: (a: string) => {} });

// checks if device has dark mode enabled
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

const initialTheme = prefersDark ? "dark" : "light";

const ThemeProvider = (props: any) => {
  // sets theme to previously chosen theme or device mode
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || initialTheme
  );
  const value = { theme, setTheme };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={value} {...props} />;
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
