import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import {CloudArrowDownIcon} from '@heroicons/react/24/solid'

const Footer = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`w-full px-20 py-6 text-center font-medium fixed left-0 bottom-0 ${theme.background} z-50`}>
        <span>powered by <strong>Franco Croce</strong></span>
    </div>
  )
}

export default Footer