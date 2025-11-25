"use client"

import React, { useEffect, useState } from 'react'
import InfoArticle from './InfoArticle'

function DescPrice(  { price = 31990, description = 'Куртка из высокотехнологичной ткани с принтом', articleVariation}
) {

  const sizes = ["XS", "S", "M", "L", "XL"]

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  // = "Черный·Артикул.6793/046/800" 

  const [article, setArticle] = useState(0)
  const [pickedSize, setPickedSize] = useState(null)

  const handleSizes = (index) =>{
      if(index===pickedSize){
        setPickedSize(null)
      }else{
        setPickedSize(index)
      }
  }

  const priceWithCurrency = new Intl.NumberFormat('kk-KZ', { style: 'currency', currency:"KZT"}).format(price);
  return (
        <div className='mt-8 font-(family-name:--font-inter) flex flex-col pt-10 pl-10 gap-3 col-span-5 bg-white text-black'>
        <p>{description}</p>
        {isClient && <p className='font-bold'>{priceWithCurrency}</p>}
        <div className='flex flex-row gap-2 items-center justify-start'>
          {articleVariation.map((x, ind)=>(
             <div onClick={()=>setArticle(ind)} key={ind} className={' w-9 h-9 hover:border cursor-pointer rounded-full flex flex-row justify-center items-center relative ' + (article===ind  && "border border-black") } >
                <span style={{backgroundColor:x.color}}  className=' w-7 h-7 rounded-full bg-sky-600  absolute '>

                </span>
              </div>
          ))

          }

         

        </div>

        <p className='font-mono text-xs'>{articleVariation[article].name}</p>

        <div className=' h-[0.5px] w-full bg-black/10 mt-4 mb-2'></div>
          <div className='flex flex-row gap-2 my-2'>
            {sizes.map((x, ind)=>(
              <button onClick={()=>handleSizes(ind)} key={ind} className={'rounded-full h-10 w-10 cursor-pointer flex flex-row justify-center items-center border border-black/10 text-xs hover:border-black hover:scale-105 transition-all duration-300 ' + (pickedSize===ind && "bg-black text-white")}>
               {x}
            </button>
            ))}

            
           
        </div>
          <InfoArticle/>

            <button className='text-left w-fit text-xs cursor-pointer font-semibold hover:opacity-85 transition delay-75 duration-150'>Size guide</button>


    </div>
  )
}

export default DescPrice

