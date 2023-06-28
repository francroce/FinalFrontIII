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

  const [dentists,setDentists] = useState([])

  async function getDentists(){
      const response= await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
      setDentists(response)
  }

  useEffect(()=>{
    getDentists()
  },[])


  const value = {
    favs,
    addToFavs,
    dentists
  }

  return (
    <ListContext.Provider value={value}>
      {props.children}
    </ListContext.Provider>
  )
}