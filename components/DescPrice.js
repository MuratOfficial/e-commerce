"use client"

import React, { useState } from 'react'

function DescPrice(  { price = 31990, description = 'Куртка из высокотехнологичной ткани с принтом', articleVariation}
) {

  // = "Черный·Артикул.6793/046/800" 

  const [articleText, setArticleText] = useState(articleVariation[0].name)

  const priceWithCurrency = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency:"KZT"}).format(price);
  return (
        <div className='mt-10 font-(family-name:--font-inter) flex flex-col pt-10 pl-10 gap-3 col-span-5 bg-white text-black'>
        <p>{description}</p>
        <p className='font-bold'>{priceWithCurrency}</p>
        <div className='flex flex-row gap-1 items-center justify-start'>
          {articleVariation.map((x, ind)=>(
             <span key={ind} style={{backgroundColor:x.color}} className='rounded-full w-9 h-9 hover:outline-black' >
                <span>
                  
                </span>
              </span>
          ))

          }

         

        </div>

        {/* <p className='font-mono text-xs'>{articleVariation}</p> */}
          <div className='flex flex-row gap-2 mt-2'>
            <button className='rounded-full h-10 w-10 cursor-pointer flex flex-row justify-center items-center border border-black/10 text-xs hover:border-black  transition-all duration-300'>
                S
            </button>
            <button className='rounded-full h-10 w-10 cursor-pointer flex flex-row justify-center items-center border border-black/10 text-xs hover:border-black  transition-all duration-300'>
                M
            </button>
            <button className='rounded-full h-10 w-10 cursor-pointer flex flex-row justify-center items-center border border-black/10 text-xs hover:border-black  transition-all duration-300'>
                L
            </button>
            <button className='rounded-full h-10 w-10 cursor-pointer flex flex-row justify-center items-center border border-black/10 text-xs hover:border-black  transition-all duration-300'>
                XL
            </button>   
            <button className='rounded-full h-10 w-10 cursor-pointer flex flex-row justify-center items-center border border-black/10 text-xs hover:border-black  transition-all duration-300'>
                XL
            </button>   
        </div>
    </div>
  )
}

export default DescPrice

