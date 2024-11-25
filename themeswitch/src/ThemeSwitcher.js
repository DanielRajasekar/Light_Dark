// src/ThemeSwitcher.js
import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ padding: '20px' }}>
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;