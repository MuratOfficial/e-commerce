import React from 'react'


function Hero({classname, classname2, title}) {
  return (
    <div className='relative w-full flex flex-row h-screen'>
    <div className={' bg-center  bg-no-repeat  flex flex-row justify-center items-center  w-1/2  bg-orange-500 h-screen bg-cover '  + classname}>
   
    </div>
   <div className={' bg-no-repeat bg-center  flex flex-row justify-center items-center  w-1/2  bg-orange-500 h-screen bg-cover ' + classname2}>
   
    </div>
            <h3 className=' left-[45%] top-[50%] absolute text-5xl font-bold text-white'>
                {title}

            </h3>
    </div>


  )
}

export default Hero