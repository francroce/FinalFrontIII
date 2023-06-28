import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"
import {XMarkIcon,Bars3BottomRightIcon,MoonIcon,SunIcon} from '@heroicons/react/24/solid'


const Navbar = () => {

const {theme, handleChangeTheme} = useContext(ThemeContext)
const [isOpen,SetIsOpen] = useState(false)

  return (   
        <div className={`shadow-md w-full relative top-0 left-0`}>
                <div className={`md:flex items-center ${theme.background} ${theme.font} justify-between py-4 md:px-10 px-7`}>
  
                    <div className='font-bold text-xl cursor-pointer flex items-center gap-1'>
                        <Link to={"/"}>                      
                            <svg width="44" height="54" viewBox="0 0 44 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.5 24.2998H24.75V21.5998C24.75 20.8838 24.4603 20.197 23.9445 19.6907C23.4288 19.1843 22.7293 18.8998 22 18.8998C21.2707 18.8998 20.5712 19.1843 20.0555 19.6907C19.5397 20.197 19.25 20.8838 19.25 21.5998V24.2998H16.5C15.7707 24.2998 15.0712 24.5843 14.5555 25.0906C14.0397 25.597 13.75 26.2837 13.75 26.9998C13.75 27.7159 14.0397 28.4027 14.5555 28.909C15.0712 29.4153 15.7707 29.6998 16.5 29.6998H19.25V32.3998C19.25 33.1159 19.5397 33.8026 20.0555 34.309C20.5712 34.8153 21.2707 35.0998 22 35.0998C22.7293 35.0998 23.4288 34.8153 23.9445 34.309C24.4603 33.8026 24.75 33.1159 24.75 32.3998V29.6998H27.5C28.2293 29.6998 28.9288 29.4153 29.4445 28.909C29.9603 28.4027 30.25 27.7159 30.25 26.9998C30.25 26.2837 29.9603 25.597 29.4445 25.0906C28.9288 24.5843 28.2293 24.2998 27.5 24.2998ZM42.9825 4.45489C42.6646 4.20288 42.2939 4.02305 41.8969 3.92829C41.4999 3.83353 41.0865 3.82619 40.6863 3.9068C37.7472 4.51698 34.7118 4.5282 31.7681 3.93977C28.8244 3.35133 26.0351 2.17578 23.573 0.485907C23.1117 0.169612 22.5626 0 22 0C21.4374 0 20.8883 0.169612 20.427 0.485907C17.9652 2.17636 15.1759 3.35227 12.2321 3.94072C9.28833 4.52917 6.2528 4.51763 3.31375 3.9068C2.91318 3.82442 2.49894 3.83087 2.10123 3.92566C1.70352 4.02046 1.33238 4.20121 1.01487 4.45474C0.697359 4.70827 0.441487 5.02818 0.265915 5.39115C0.0903417 5.75411 -0.000504632 6.15097 2.10833e-06 6.55279V26.6839C0.00414199 30.5513 0.946409 34.3621 2.7488 37.8009C4.5512 41.2396 7.16189 44.2074 10.3648 46.4587L20.4023 53.4975C20.8685 53.8243 21.4271 54 22 54C22.5729 54 23.1315 53.8243 23.5978 53.4975L33.6353 46.4587C36.8384 44.2078 39.4494 41.24 41.2518 37.8012C43.0542 34.3623 43.9963 30.5514 44 26.6839V6.55009C43.9996 6.14858 43.908 5.75221 43.732 5.38978C43.556 5.02736 43.3 4.70799 42.9825 4.45489ZM38.5 26.6839C38.4968 29.6913 37.7643 32.6547 36.3632 35.329C34.962 38.0033 32.9325 40.3116 30.4425 42.0631L22 47.9815L13.5575 42.0658C11.0673 40.3139 9.03765 38.0051 7.63652 35.3303C6.23539 32.6556 5.50303 29.6917 5.5 26.6839V9.67398C11.2661 10.166 17.0426 8.85119 22 5.91829C26.9574 8.85119 32.7339 10.166 38.5 9.67398V26.6839Z" fill="url(#paint0_linear_561_19)"/>
                                <defs>
                                <linearGradient id="paint0_linear_561_19" x1="-4.16216" y1="60.907" x2="65.5649" y2="51.7425" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#A32A2A"/>
                                <stop offset="1" stop-color="#DE3838"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </Link>
                    </div>
                    <div onClick={()=>SetIsOpen(!isOpen)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                        {isOpen ? <XMarkIcon/>: <Bars3BottomRightIcon/>}
                    </div>
                    <ul className={`md:flex md:items-center gap-4 flex flex-col md:flex-row md:pb-0 pb-12 absolute ${theme.background} ${theme.font} md:static md:gap-6 md:z-auto z-30 left-0 w-full md:w-auto md:pl-0 pl-9 ${isOpen ? 'top-24' : 'top-[-200px]'}`}>
                        <Link to='./'>Inicio</Link>
                        <Link to='./favoritos'>favoritos</Link>
                        <Link to='./contacto'><button className='btn bg-gradient-to-r from-[#A32A2A] to-[#DE3838] text-white font-semibold px-3 py-1 rounded duration-500 md:static'>Contacto</button></Link>
                        <button onClick={handleChangeTheme} className="w-7 h-7">{theme.background === "bg-bg-theme-light" ?  <MoonIcon/> : <SunIcon/>}</button>
                    </ul>
                </div>
        </div>
  )
}

export default Navbar

