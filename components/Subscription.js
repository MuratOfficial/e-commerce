import React from 'react'

function Subscription({
    title, desc, buttonName
}) {
  return (
        <div className=' font-(family-name:--font-inter) relative text-black justify-center items-center bg-white h-[50vh] w-full flex flex-col gap-4'>
       
        
        <h3 className='z-10 flex flex-col justify-center items-center uppercase text-5xl font-medium '>
         <span>
          {title}
          </span> 



        </h3>
        <p className='z-10 text-base font-light'>
        {desc}

        </p>

        <a href='#' className='z-10 text-sm text-neutral-50 bg-black px-6 py-4 rounded-full'>
            {buttonName}
        </a>


      </div>
  )
}

export default Subscription