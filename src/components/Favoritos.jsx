import React,{useContext, useState} from 'react'
import Card from './Card'
import { ListContext } from '../context/ListContext'

const Favoritos = () => {
  
const {favs, addToFavs} = useContext(ListContext)  

return (
    <div className="flex justify-center items-center flex-col w-3/4 mx-auto gap-6 py-10">
        <h1 className="font-bold text-4xl text-center">¡Tus odontologos favoritos!</h1>
        <div className="flex flex-wrap gap-4 justify-center text-center">
          {favs.length > 0 ? <Card dentists={favs} onClick={addToFavs} /> : <span> ops! parece que no tienes odontologos favoritos</span>}
        </div>
    </div>
  )
}

export default Favoritos