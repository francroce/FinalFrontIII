import { useEffect, useState } from "react"
import Card from "./Card"


const Home = () => {

const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem('odontologosFavs') || '[]')
    )

const [personas,setPersonas] = useState([])

async function getPersons(){
    const response= await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
    setPersonas(response)
}
 
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

console.log(favs)

useEffect(() => {
    getPersons()
},[])

  return (
    <div className="flex justify-center items-center flex-col w-3/4 mx-auto gap-6 py-10 z-[-2]">
        <h1 className="font-bold text-4xl text-center">¡Encontrá tu odontolgo ideal!</h1>
        <div className="flex flex-wrap gap-4 justify-center">
            <Card 
            personas={personas}
            onClick={addToFavs}/>
        </div>
    </div>
  )
}

export default Home