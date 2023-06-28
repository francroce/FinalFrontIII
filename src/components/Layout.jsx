import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Layout = ({children}) => {

const {theme} = useContext(ThemeContext);

  return (
    <div className={`${theme.background} ${theme.font} min-h-screen relative`}>
        {children}
    </div>
  )
}

export default Layout