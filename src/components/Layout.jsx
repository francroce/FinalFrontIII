import React,{useContext} from 'react'
import ThemeContext from '../context/context'

const Layout = ({children}) => {

const {theme} = useContext(ThemeContext);

  return (
    <div className={`${theme.background} ${theme.font} min-h-screen`}>
        {children}
    </div>
  )
}

export default Layout