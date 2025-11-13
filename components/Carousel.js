"use client"

import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import CarouselCard from './CarouselCard'


function Carousel() {
  const [carouselList] = useState([
    { price: 38.5, discount:0.5, img: "bg-[url(https://static.bershka.net/assets/public/59c3/c549/32144ef181e2/29ae22e6d867/07369498800-a4o/07369498800-a4o.jpg?ts=1752592956327&w=563)]", title: "Көйлек" },
    { price: 38.5, img: "bg-[url(https://static.bershka.net/assets/public/fcf1/b728/88ed4534b966/4a2c60c5b6c2/05497707812-a4o/05497707812-a4o.jpg?ts=1761056208288&w=563)]", title: "Шалбар" },
    { price: 38.5, img: "bg-[url(https://static.bershka.net/assets/public/05eb/ec5c/2ee24e359c8e/9f1d4c6ab880/02811152800-a4o/02811152800-a4o.jpg?ts=1732635669384&w=563)]", title: "Аяө-киім" },
    { price: 38.5, discount: 0.4, img: "bg-[url(https://static.bershka.net/assets/public/815e/0079/8192450890b7/59f8d1c23542/07381741800-a4o/07381741800-a4o.jpg?ts=1754396358158&w=563)]", title: "Жемпір" },
    { price: 38.5, discount:0.2, img: "bg-[url(https://static.bershka.net/assets/public/59c3/c549/32144ef181e2/29ae22e6d867/07369498800-a4o/07369498800-a4o.jpg?ts=1752592956327&w=563)]", title: "Көйлек 2" },
    { price: 38.5, discount: 0.1, img: "bg-[url(https://static.bershka.net/assets/public/fcf1/b728/88ed4534b966/4a2c60c5b6c2/05497707812-a4o/05497707812-a4o.jpg?ts=1761056208288&w=563)]", title: "Шалбар 2" },
    { price: 38.5, img: "bg-[url(https://static.bershka.net/assets/public/05eb/ec5c/2ee24e359c8e/9f1d4c6ab880/02811152800-a4o/02811152800-a4o.jpg?ts=1732635669384&w=563)]", title: "Аяө-киім 2" },
    { price: 38.5, img: "bg-[url(https://static.bershka.net/assets/public/815e/0079/8192450890b7/59f8d1c23542/07381741800-a4o/07381741800-a4o.jpg?ts=1754396358158&w=563)]", title: "Жемпір 2" },
    { price: 38.5, img: "bg-[url(https://static.bershka.net/assets/public/59c3/c549/32144ef181e2/29ae22e6d867/07369498800-a4o/07369498800-a4o.jpg?ts=1752592956327&w=563)]", title: "Көйлек 2" },
    { price: 38.5, img: "bg-[url(https://static.bershka.net/assets/public/fcf1/b728/88ed4534b966/4a2c60c5b6c2/05497707812-a4o/05497707812-a4o.jpg?ts=1761056208288&w=563)]", title: "Шалбар 2" },
    { price: 38.5, img: "bg-[url(https://static.bershka.net/assets/public/05eb/ec5c/2ee24e359c8e/9f1d4c6ab880/02811152800-a4o/02811152800-a4o.jpg?ts=1732635669384&w=563)]", title: "Аяө-киім 2" },
    { price: 38.5, img: "bg-[url(https://static.bershka.net/assets/public/815e/0079/8192450890b7/59f8d1c23542/07381741800-a4o/07381741800-a4o.jpg?ts=1754396358158&w=563)]", title: "Жемпір 2" }
  
  ])

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemWidth = 320
  const gap = 4
  const itemsPerView = 4
  const maxIndex = carouselList.length - (itemsPerView)

  const handleLeftSlide = () => {

    setCurrentIndex(currentIndex - 1)

    // setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleRightSlide = () => {



    setCurrentIndex(currentIndex + 1)

    // setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const translateValue = currentIndex * (itemWidth + gap)

  return (
    <div className='min-h-screen relative w-full bg-black pt-12 pb-8 flex flex-col gap-6'>
      <div className='flex flex-row justify-between px-8'>
        <p className='flex flex-row items-center text-neutral-100 text-5xl font-medium uppercase gap-2'>
          <svg width={40} height={40} viewBox="0 0 24 24" fill="none" className="bds-icon" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="m17.263 10.956-4.191-4.48L14.452 5 21 12l-6.548 7-1.38-1.476 4.19-4.48H4v-2.088h13.263Z" fill="currentColor"></path>
          </svg>
          САҒАН ҰНАУЫ МҮМКІН
        </p>
      </div>
      <div className='relative '>
        <div className='overflow-hidden'> 
          <div 
            className='flex gap-1 transition-transform delay-200 duration-1000 ease-in-out'
            style={{ 
              transform: `translateX(-${translateValue}px)`,
              width: `${carouselList.length * (itemWidth + gap)}px`
            }}
          >
            {carouselList.map((x, index) => (
              <CarouselCard width={itemWidth} discount={x.discount} key={index} price={x.price} img={x.img} title={x.title} />
            ))}
          </div>
        </div>

        
        {currentIndex > 0 && (
          <button 
            onClick={handleLeftSlide}
            className='rounded-full bg-neutral-200 hover:bg-white flex items-center justify-center cursor-pointer group w-12 h-12 absolute left-12 top-1/2 -translate-y-1/2 transition-all shadow-lg z-10'
          >
            <FaArrowLeft size={18} className='text-black' />
          </button>
        )}

        {currentIndex < maxIndex && (
          <button 
            onClick={handleRightSlide}
            className='rounded-full bg-neutral-200 hover:bg-white flex items-center justify-center cursor-pointer group w-12 h-12 absolute right-12 top-1/2 -translate-y-1/2 transition-all shadow-lg z-10'
          >
            <FaArrowRight size={18} className='text-black' />
          </button>
        )}

        <div className='flex justify-center gap-2 '>
          {Array.from({ length: maxIndex + 1 }).map((x, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 cursor-pointer rounded-full transition-all ${
                idx === currentIndex ? 'bg-white w-8' : 'bg-neutral-600'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Carousel