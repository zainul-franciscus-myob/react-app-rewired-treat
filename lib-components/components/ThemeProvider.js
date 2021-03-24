import React, { createContext, useContext } from "react";
import { resolveStyles } from "treat";
import defaultTheme from "./defaultTheme.treat";

const TreatThemeContext = createContext(defaultTheme);

const useTheme = () => {
  return useContext(TreatThemeContext);
};

export const ThemeProvider = ({ theme, children }) => (
  <TreatThemeContext.Provider value={theme}>
    {children}
  </TreatThemeContext.Provider>
);

export const useStyles = (styles) => resolveStyles(useTheme(), styles);

export default ThemeProvider;
