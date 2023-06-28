import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Footer = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`w-full h-24 px-20 py-20 text-center font-medium sticky bottom-0 ${theme.background} z-50`}>
        <span>powered by Franco Croce</span>
    </div>
  )
}

export default Footer