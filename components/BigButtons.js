"use client"

import React, { useState } from 'react'

function BigButtons({title}) {

    const [clicked, setClicked] = useState(false);

    const handleClick = () =>{
        if(clicked){
            setClicked(false)
        }else{
            setClicked(true)
        }
    }

  return (
    <button onClick={handleClick} className={' w-8 h-8 font-medium cursor-pointer text-xs rounded-full hover:border border-black ' + (clicked && " bg-black text-neutral-100")}>
         {title}
        </button>
  )
}

export default BigButtons