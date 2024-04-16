import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { themes } from '../../../public/themes';

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes);
  console.log("themeProvider",theme)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
   children: PropTypes.any.isRequired
}
