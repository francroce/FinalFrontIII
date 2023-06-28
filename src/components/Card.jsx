import { useState, useEffect, useContext } from "react"
import {HeartIcon} from '@heroicons/react/24/solid'
import { Link } from "react-router-dom"
import { ListContext } from "../context/ListContext"

const Card = (props) => {

  const {favs} = useContext(ListContext)
  

  const [liked,setLiked]= useState({})
  const handleToggleLiked = (userId) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [userId]: !prevLiked[userId],
    }));
  };



useEffect(()=>{
  const initialValue= {}
  favs.forEach((user) => {
    initialValue[user.id]= "red"
  });
  setLiked(initialValue)
  console.log(favs)
},[])


  return (
      <>
        {props.dentists.map((dentist) => {
          return (
            <div  key={dentist.id} className="relative">
            <div onClick={() => props.onClick?.(dentist)} className="cursor-pointer absolute top-3 right-3 w-5 h-5 z-20">
             <HeartIcon onClick={()=> handleToggleLiked(dentist.id)} fill={liked[dentist.id] ? "red" : "grey"}/>
            </div>
            
            <Link to={`odontologos/${dentist.id}`}>
            <div  className="flex flex-col justify-between items-center w-60 h-80 relative rounded-lg border-solid border-2 border-[#a32a2aa1]">
              <div className="bg-[#110D1A]/[.20] w-full h-3/5 rounded-lg">
              </div>
              <div className="h-2/5 text-center flex flex-col items-center justify-center">
                  <h3 className="font-bold">{dentist.name}</h3>
                  <span>{dentist.email}</span>
              </div>
            </div>
            </Link>
            </div>
          )
        })}
      </>
  )


}

export default Card