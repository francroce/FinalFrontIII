import { useEffect, useState } from 'react'
import { createContext } from 'react'

export const ListContext = createContext({})

export const ListProvider = (props) => {

  const [favs, setFavs] = useState(
        JSON.parse(localStorage.getItem('odontologosFavs') || '[]')
        )

  const addToFavs = (odontologo) => {
    let newFavs
    if (favs.some((fav) => fav.id === odontologo.id)) {
        newFavs = favs.filter((fav) => fav.id !== odontologo.id)
    } else {
        newFavs = [...favs, odontologo]
    
    }
    setFavs(newFavs)
    localStorage.setItem('odontologosFavs', JSON.stringify(newFavs))
    }

  const [personas,setPersonas] = useState([])

  async function getPersons(){
      const response= await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
      setPersonas(response)
  }

  useEffect(()=>{
    getPersons()
  },[])


  const value = {
    favs,
    addToFavs,
    personas
  }

  return (
    <ListContext.Provider value={value}>
      {props.children}
    </ListContext.Provider>
  )
}