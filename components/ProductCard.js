import React from 'react'

function ProductCard({
  img, title, variant, bgRounded
}) {
  return (
    <div className={'w-full group-hover:opacity-50 hover:opacity-100  h-[50vh] cursor-pointer bg-neutral-50 border border-collapse flex flex-col gap-0.5 ' + (!variant && " p-1 ") }>
      <div className={bgRounded + ` p-4 h-full bg-cover flex flex-col justify-end ` + img}>
        {variant && <p className='text-2xl text-white uppercase font-extrabold leading-4'>
          {title}

        </p>}
        
        
      </div>

      {!variant &&  <p className=' text-xl  uppercase font-extrabold leading-4'>{title}</p>} 
    
    </div>
  )
}

export default ProductCard