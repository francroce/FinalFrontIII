import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import {CloudArrowDownIcon} from '@heroicons/react/24/solid'

const Footer = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`w-full flex flex-col gap-3 md:justify-between md:flex-row h-full px-20 py-12 text-center font-medium sticky bottom-0 ${theme.background} z-50`}>
        <span>powered by Franco Croce</span>
        <div className="flex justify-evenly w-full md:w-36 items-center">
            <CloudArrowDownIcon className="w-5 h-5"/>
            <CloudArrowDownIcon className="w-5 h-5"/>
            <CloudArrowDownIcon className="w-5 h-5"/>
        </div>
    </div>
  )
}

export default Footer