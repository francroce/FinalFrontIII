import { useState } from "react"
import { Routes,Route } from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Favoritos from "./components/Favoritos"
import Contacto from "./components/Contacto"
import Profile from "./components/Profile"
import Layout from "./components/Layout"
import ThemeProvider from "./context/ThemeContext"
import { ListProvider } from "./context/ListContext"


function App() {

  return (
    <>
      <ThemeProvider>
        <ListProvider>
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
        </ListProvider>
      </ThemeProvider>
    </>
  )
}

export default App
