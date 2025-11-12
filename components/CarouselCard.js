import React from 'react'

function CarouselCard({
    img, title, price
}) {
  return (
    <div className={' w-[22vw] group-hover:opacity-50 hover:opacity-100  h-[80vh] cursor-pointer bg-black border border-collapse flex flex-col gap-0.5 '  }>
      <div className={` p-4 bg-center bg-cover flex flex-col justify-end h-full ` + img}>

        
        
      </div>
      <div className=' flex flex-col w-full text-neutral-200 p-3 text-sm'>
    <p className=' text-xs'>
        {title}

      </p>
      <p>
        {price} €
      </p>

      </div>
      

  
    </div>
  )
}

export default CarouselCard