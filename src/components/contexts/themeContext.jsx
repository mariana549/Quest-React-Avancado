import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { themes } from '../../../public/themes';

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

ThemeProvider.propTypes = {
   children: PropTypes.any.isRequired
}
