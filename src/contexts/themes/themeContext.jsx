import { createContext } from "react";
import { useState } from "react"
import PropTypes from "prop-types"
import Themes from "./themes";

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState(Themes)

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         {children}
      </ThemeContext.Provider>
   )

}

ThemeProvider.propTypes = {
   children: PropTypes.any.isRequired
}