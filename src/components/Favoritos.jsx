import React,{useState} from 'react'
import Card from './Card'

const Favoritos = () => {

  const [favs, setFavs] = useState(
  JSON.parse(localStorage.getItem('odontologosFavs') || '[]')
  )
 
const addToFavs = (odontolgo) => {
  let newFavs
  if (favs.some((fav) => fav.id === odontolgo.id)) {
      newFavs = favs.filter((fav) => fav.id !== odontolgo.id)
  } else {
      newFavs = [...favs, odontolgo]
  }
  setFavs(newFavs)
  localStorage.setItem('odontologosFavs', JSON.stringify(newFavs))
}
  
  return (
    <div className="flex justify-center items-center flex-col w-3/4 mx-auto gap-6 py-10">
        <h1 className="font-bold text-4xl text-center">¡Tus odontologos favoritos!</h1>
        <div className="flex flex-wrap gap-4 justify-center text-center">
          {favs.length > 0 ? <Card personas={favs} onClick={addToFavs} /> : <span> ops! parece que no tienes odontologos favoritos</span>}
        </div>
      
    </div>
  )
}

export default Favoritos