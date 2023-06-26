import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {

const params = useParams()
const [odontologo,setOdontologo] = useState([])
async function getOdontologo(){
    const response= await (await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)).json()
    setOdontologo(response)
}

useEffect(() => {
    getOdontologo()
},[])
console.log(odontologo)

  return (
    <div className='flex justify-center items-center flex-col w-3/4 mx-auto gap-6 py-10'>
        <h1 className="font-bold text-4xl text-center">{odontologo.name}</h1>
        <div className='w-52 h-52 bg-stone-400'></div>
        <div className='flex flex-col'>
            <span>{odontologo.email}</span>
            <span>{odontologo.phone}</span>
            <span>{odontologo.website}</span>
        </div>
    </div>
  )
}

export default Profile