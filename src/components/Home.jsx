import { useContext, useEffect, useState } from "react"
import Card from "./Card"
import { ListContext } from "../context/ListContext"


const Home = () => {

const {dentists,addToFavs} = useContext(ListContext)

  return (
    <div className="flex justify-center items-center flex-col w-3/4 mx-auto gap-6 pt-10 pb-20 z-[-2]">
        <h1 className="font-bold text-4xl text-center">¡Encontrá tu odontolgo ideal!</h1>
        <div className="flex flex-wrap gap-4 justify-center">
            <Card 
              dentists={dentists}
              onClick={addToFavs}
            />
        </div>
    </div>
  )
}

export default Home