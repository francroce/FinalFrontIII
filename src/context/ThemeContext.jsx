import { useState } from 'react'
import { createContext } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = (props) => {

    const themes = {
        light: {
            font: 'text-tx-theme-light',
            background: 'bg-bg-theme-light'
        },
        dark: {
            font: 'text-tx-theme-dark',
            background: 'bg-bg-theme-dark'
        }
    };

    // const [theme, setTheme] = useState(
    //         (localStorage.getItem('themeSelected') || themes.dark)
    //     )

    // const handleChangeTheme = () => {
    //    if(theme.font === themes.dark.font){
    //         setTheme(themes.light)
    //         localStorage.setItem('themeSelected', JSON.stringify(themes.light))
    //    } else{
    //         setTheme(themes.dark)
    //         localStorage.setItem('themeSelected', JSON.stringify(themes.dark))
    //    } 
    //   };

    const [theme, setTheme] = useState(themes.dark)

    const handleChangeTheme = () => {
       {theme.font === themes.dark.font ? setTheme(themes.light) :setTheme(themes.dark)}}

const value={
    themes,
    theme,
    handleChangeTheme
}

  return (
    <ThemeContext.Provider value={value}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider