import { useEffect, useState } from "react"
import Card from "./Card"
import { Link } from "react-router-dom"

const Home = () => {

const [personas,setPersonas] = useState([])
async function getPersons(){
    const response= await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
    setPersonas(response)
}

useEffect(() => {
    getPersons()
},[])

  return (
    <div className="flex justify-center items-center flex-col w-3/4 mx-auto gap-6 py-10">
        <h1 className="font-bold text-4xl text-center">¡Encontrá tu odontolgo ideal!</h1>
        <div className="flex flex-wrap gap-4 justify-center">
            {personas.map((person)=>(
                <Link key={person.id} to={`${person.id}`}>
                    <Card name={person.name} email={person.email}/>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Home