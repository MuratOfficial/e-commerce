"use client"

import React, { useState } from 'react'

function Empty({bgColor, title="Empty"}) {

  const [count, setCount] = useState(0)

  const [colors, setColors] = useState("bg-red-500")
  

  return (
    <div className={'w-full h-screen text-5xl flex flex-col justify-center items-center'}>


      <p>
      {count}

      </p>

      <button onClick={()=>setCount(count + 1)} className='bg-slate-800 text-white p-4 rounded-md border-0'>
        +1

      </button>
      <button onClick={()=>setCount(count - 1)} className='bg-slate-800 text-white p-4 rounded-md border-0'>
        -1

      </button>

      <div className={`h-20 w-20  ` + colors}>


      </div>

    <button onClick={()=>setColors("bg-green-500")} className='bg-slate-800 text-white p-4 rounded-md border-0'>
        green

      </button>
<button onClick={()=>setColors("bg-black")} className='bg-slate-800 text-white p-4 rounded-md border-0'>
        black

      </button>
<button onClick={()=>setColors("bg-blue-500")} className='bg-slate-800 text-white p-4 rounded-md border-0'>
        blue

      </button>

    


    </div>
  )
}

export default Empty