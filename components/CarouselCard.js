import React from 'react'

function CarouselCard({
    img, title, price, width, discount
}) {

  const priceWithDiscount = price * (1-discount);
  const discountPercent = discount * 100;

  return (
    <div style={{
      width:`${width}px`
    }} className={'  group-hover:opacity-50 hover:opacity-100  h-[80vh] cursor-pointer bg-black border border-collapse flex flex-col gap-0.5 '  }>
      <div className={` p-4 bg-center bg-cover flex flex-col justify-end h-full ` + img}>

        
        
      </div>
      <div className=' h-[20vh] flex flex-col w-full text-neutral-200 p-3 text-sm'>
    <p className=' text-xs '>
        {title}

      </p>

      {discount  ?  <div className='flex py-1 flex-col'>
        <p className=' text-red-600'>
          {priceWithDiscount.toFixed(2)} € <span className='p-0.5 text-neutral-200 rounded-sm bg-red-600'>
            -{discountPercent}%
          </span>
        </p>
        <p className='text-neutral-400 line-through'>
        {price} €

        </p>


      </div>:<p>
        {price} €
      </p>}
      

      </div>
      

  
    </div>
  )
}

export default CarouselCard