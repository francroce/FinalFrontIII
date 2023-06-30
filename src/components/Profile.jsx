import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {

const params = useParams()
const [dentist,setDentist] = useState([])
async function getDentist(){
    const response= await (await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)).json()
    setDentist(response)
}

useEffect(() => {
  getDentist()
},[])

  return (
    <div className='flex justify-center items-center flex-col w-3/4 mx-auto gap-6 pt-10 pb-20'>
        <h1 className="font-bold text-4xl text-center">{dentist.name}</h1>
        <div className='w-52 h-52 bg-stone-400'></div>
        <div className='flex flex-col'>
            <span>{dentist.email}</span>
            <span>{dentist.phone}</span>
            <span>{dentist.website}</span>
        </div>
    </div>
  )
}

export default Profile