import React from 'react'

function BgVideo({title, title2, desc, buttonName, video}) {
  return (
    <div className=' font-(family-name:--font-inter) relative text-white justify-center items-center bg-black h-[50vh] w-full flex flex-col gap-8'>
        <video className='z-0 absolute' playsInline muted autoPlay loop>
          <source src='/video2.mp4' type='video/mp4'/>

        </video>
        
        <h3 className='z-10 flex flex-col justify-center items-center uppercase text-5xl font-bold '>
         <span>
          {title}
          </span> 

          <span>
    {title2}
          </span>

        </h3>
        <p className='z-10 text-lg font-medium'>
        {desc}

        </p>

        <a href='#' className='z-10 text-sm bg-red-400 px-6 py-4 rounded-full'>
            {buttonName}
        </a>


      </div>
  )
}

export default BgVideo