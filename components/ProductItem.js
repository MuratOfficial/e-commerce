"use client"

import React, { useState } from 'react'
import { FiHeart } from "react-icons/fi";
import BigButtons from './BigButtons';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function ProductItem({
  imgs, title, price,  discount
}) {

  const buttons = ["XS", "S", "M", "L", "XL"]
  const [favorite, setFavorite] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleFavorite = () => {
    if(favorite){
      setFavorite(false)
    }else{
      setFavorite(true)
    }
  }

  const handleLeft = () => {

    if(currentIndex === 0){
      return
    }else{
      setCurrentIndex(currentIndex - 1)
    }


  }

  const handleRight = () => {
    if(currentIndex >= imgs.length){
      return
    }else{
      setCurrentIndex(currentIndex + 1)
    }
  }

    const priceWithDiscount = price * (1-discount);
  const discountPercent = discount * 100;
  return (
    <div className={'  relative group-hover:opacity-50 hover:opacity-100  h-[80vh] cursor-pointer  flex flex-col gap-0.5 '  }>
      
      {/** Здесь кнопки смены картинок */}
      {currentIndex !== 0 && <button onClick={handleLeft} className=' cursor-pointer absolute top-[45%] left-2'>
      <FaChevronLeft size={12}/>

      </button>}

      {<button onClick={handleRight} className=' cursor-pointer absolute top-[45%] right-2'>
      <FaChevronRight size={12}/>
        
      </button>}
      
      
      {/** End */}
      <p className=' text-sm  px-1 font-semibold uppercase bg-black text-neutral-200 absolute top-2 left-2'>
        New
      </p>
      <div className={`bg-black/5 group  bg-center bg-cover flex flex-col justify-end h-full ` + imgs[currentIndex]}>


        <div className='w-full group-hover:opacity-100 bg-white py-3 flex flex-col gap-6 opacity-0 items-center justify-center border-[0.5px] border-black/10'>
          <p className='text-xs font-normal'>Өлшемді таңдаңыз </p>
        <div className=' flex flex-row gap-2'>
          {buttons.map((x, index)=>(
            <BigButtons key={index} title={x}/>
          ))}

       

        </div>
        </div>


        
        
      </div>
      <div className=' h-[20vh] flex flex-col w-full text-black p-3 text-sm'>
    <div className='w-full flex flex-row justify-between items-center'>
      <p className=' text-xs '>
              {title}

            </p>

            <FiHeart onClick={handleFavorite} size={18} className={'  hover:fill-red-500 hover:stroke-red-500 ' + (favorite && 'fill-red-500 stroke-red-500')}/>

    </div>
    
    

      {discount  ?  
      
      <div className='flex py-1 flex-col'>
        <p className=' font-semibold text-red-600'>
          {priceWithDiscount.toFixed(2)} € <span className='p-0.5 text-neutral-100 font-semibold rounded-sm bg-red-600'>
            -{discountPercent}%
          </span>
        </p>
        <p className='text-black  font-semibold line-through'>
        {price} €

        </p>

      </div>:<p className=' font-semibold'>{price} €</p>}
      

      </div>
      

  
    </div>
  )
}

export default ProductItem