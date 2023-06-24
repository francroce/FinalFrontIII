import React, {createContext} from 'react';

export const themes = {
    light: {
        font: 'text-tx-theme-light',
        background: 'bg-bg-theme-light'
    },
    dark: {
        font: 'text-tx-theme-dark',
        background: 'bg-bg-theme-dark'
    }
};
const ThemeContext = createContext(themes.light);
export default ThemeContext;