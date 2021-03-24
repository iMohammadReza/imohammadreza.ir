import {
  createContext, useState, useContext, useCallback,
} from 'react';
import PropTypes from 'prop-types';

import booleanStorage from '../services/booleanStorage';
import { isClientSide } from '../utils';

export const ThemeContext = createContext();
const localStorageKey = 'THEME_SETTING_IS_DARK';

const initialValue = booleanStorage.getItem(localStorageKey);

export const useThemeSetting = () => useContext(ThemeContext);

export function ThemeSettingProvider({ children }) {
  const [value, setTheme] = useState(initialValue);

  if (isClientSide()) {
    if (value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  const toggleTheme = useCallback(() => {
    const newValue = !value;
    setTheme(newValue);
    booleanStorage.setItem(localStorageKey, newValue);
  }, [value]);
  const contextValue = {
    value,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeSettingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
