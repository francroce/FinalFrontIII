import { useState } from "react"

const Card = (props) => {

  const [isLiked, setIsliked] = useState(false)

  return (
    <div className="flex flex-col justify-between items-center w-60 h-80 relative rounded-lg border-solid border-2 border-[#a32a2aa1]">
    <div onClick={()=>setIsliked(true)} className=" absolute top-3 right-3">
      <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" d="M10.3201 1.53725V1.53725C10.1455 1.70101 9.87326 1.70043 9.69889 1.53642V1.53642C8.62601 0.545722 7.18059 -0.006441 5.67708 5.6704e-05C4.17357 0.00655441 2.73361 0.571187 1.67045 1.57112C0.6073 2.57105 0.00696881 3.92539 6.02891e-05 5.33949C-0.00684823 6.7536 0.580225 8.11306 1.63356 9.12214L1.94417 9.41428L9.32438 16.3556C9.70936 16.7177 10.3096 16.7177 10.6946 16.3556L18.0748 9.41428L18.3854 9.12214C19.4304 8.11149 20.0104 6.75456 19.9999 5.34485C19.9894 3.93514 19.3892 2.58598 18.3293 1.5892C17.2694 0.592413 15.8349 0.0281333 14.336 0.0184116C12.8372 0.00868998 11.3945 0.554308 10.3201 1.53725Z" fill="#837777"/>
      </svg>
    </div>
    <div className="bg-stone-400 w-full h-3/5">
    </div>
    <div className="h-2/5 text-center flex flex-col items-center justify-center">
        <h3 className="font-bold">{props.name}</h3>
        <span>{props.email}</span>
    </div>
    </div>
  )
}

export default Card