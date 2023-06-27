import { useState } from "react"
import { Routes,Route } from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Favoritos from "./components/Favoritos"
import Contacto from "./components/Contacto"
import Profile from "./components/Profile"
import Layout from "./components/Layout"
import ThemeContext, { themes } from './context/context'

function App() {

const [theme, setTheme] = useState(themes.dark);
const handleChangeTheme = () => {
  if (theme === themes.dark) setTheme(themes.light)
  if (theme === themes.light) setTheme(themes.dark)
}

  return (
    <>
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <Layout>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favoritos" element={<Favoritos/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/odontologos/:id" element={<Profile/>}/>    
            <Route path="favoritos/odontologos/:id" element={<Profile/>}/>    
          </Routes>
        <Footer/>
      </Layout>
    </ThemeContext.Provider>
    </>
  )
}

export default App
