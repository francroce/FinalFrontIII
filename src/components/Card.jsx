import { useState, useEffect } from "react"
import {HeartIcon} from '@heroicons/react/24/solid'
import { Link } from "react-router-dom"

const Card = (props) => {

  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem('odontologosFavs') || '[]')
    )
  

  const handleToggleLiked = (userId) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [userId]: !prevLiked[userId],
    }));
  };


  const [liked,setLiked]= useState({})

useEffect(()=>{
  const valorInicial= {}
  favs.forEach((user) => {
    valorInicial[user.id]= "red"
  });
  setLiked(valorInicial)
  console.log(favs)
},[])


  return (
      <>
        {props.personas.map((persona) => {
          return (
            <div  key={persona.id} className="relative">
            <div onClick={() => props.onClick?.(persona)} className="cursor-pointer absolute top-3 right-3 w-5 h-5 z-20">
             <HeartIcon onClick={()=> handleToggleLiked(persona.id)} fill={liked[persona.id] ? "red" : "grey"}/>
            </div>
            
            <Link to={`odontologos/${persona.id}`}>
            <div  className="flex flex-col justify-between items-center w-60 h-80 relative rounded-lg border-solid border-2 border-[#a32a2aa1]">
              <div className="bg-stone-400 w-full h-3/5 rounded-lg">
              </div>
              <div className="h-2/5 text-center flex flex-col items-center justify-center">
                  <h3 className="font-bold">{persona.name}</h3>
                  <span>{persona.email}</span>
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