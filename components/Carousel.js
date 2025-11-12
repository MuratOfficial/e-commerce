"use client"

import React, { useState } from 'react'
import CarouselCard from './CarouselCard'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"

function Carousel() {

    const [carouselList, setCarouselList] = useState([
       { price:38.5, img:"bg-[url(https://static.bershka.net/assets/public/59c3/c549/32144ef181e2/29ae22e6d867/07369498800-a4o/07369498800-a4o.jpg?ts=1752592956327&w=563)]", title:"Көйлек"},
          { price:38.5, img:"bg-[url(https://static.bershka.net/assets/public/fcf1/b728/88ed4534b966/4a2c60c5b6c2/05497707812-a4o/05497707812-a4o.jpg?ts=1761056208288&w=563)]" , title:"Шалбар" },
          { price:38.5, img:"bg-[url(https://static.bershka.net/assets/public/05eb/ec5c/2ee24e359c8e/9f1d4c6ab880/02811152800-a4o/02811152800-a4o.jpg?ts=1732635669384&w=563)]" , title:"Аяө-киім" },
          { price:38.5, img:"bg-[url(https://static.bershka.net/assets/public/815e/0079/8192450890b7/59f8d1c23542/07381741800-a4o/07381741800-a4o.jpg?ts=1754396358158&w=563)]", title:"Жемпір"},
            { price:38.5, img:"bg-[url(https://static.bershka.net/assets/public/59c3/c549/32144ef181e2/29ae22e6d867/07369498800-a4o/07369498800-a4o.jpg?ts=1752592956327&w=563)]", title:"Көйлек"},
          { price:38.5, img:"bg-[url(https://static.bershka.net/assets/public/fcf1/b728/88ed4534b966/4a2c60c5b6c2/05497707812-a4o/05497707812-a4o.jpg?ts=1761056208288&w=563)]" , title:"Шалбар" },
          { price:38.5, img:"bg-[url(https://static.bershka.net/assets/public/05eb/ec5c/2ee24e359c8e/9f1d4c6ab880/02811152800-a4o/02811152800-a4o.jpg?ts=1732635669384&w=563)]" , title:"Аяө-киім" },
          { price:38.5, img:"bg-[url(https://static.bershka.net/assets/public/815e/0079/8192450890b7/59f8d1c23542/07381741800-a4o/07381741800-a4o.jpg?ts=1754396358158&w=563)]", title:"Жемпір"} 
           
    ]);

    const [currentIndex, setCurrentIndex] = useState("")

    const handleLeftSlide = () =>{

    }


  return (
    <div className='h-full relative gap-6 w-full  bg-black pt-12 pb-8 flex flex-col justify-between'>
        <div className='flex flex-row justify-between'>
          <p className=' flex flex-row items-center text-neutral-100 text-5xl font-medium uppercase'>
          <svg width={40} height={40} viewBox="0 0 24 24" fill="none" data-testid="bds-icon-source" className="bds-icon cms-slide-header__title-icon" aria-hidden="true"><path pid="0" fillRule="evenodd" clipRule="evenodd" d="m17.263 10.956-4.191-4.48L14.452 5 21 12l-6.548 7-1.38-1.476 4.19-4.48H4v-2.088h13.263Z" fill="currentColor"></path></svg>
          САҒАН ҰНАУЫ МҮМКІН
          </p>


      
        </div>
        <div className={' flex flex-row w-[220vw] gap-0.5 overflow-hidden ' + (c) }>
            <button className=' rounded-full group-hover:bg-black flex flex-row items-center justify-center cursor-pointer hover:bg-black group w-10 h-10 absolute left-4 top-[50%]'>

                    <FaArrowLeft size={16} className=' text-black group-hover:text-neutral-200'/>
            </button>

            {
                carouselList.map((x, index)=>(
                    
          <CarouselCard key={index} price={x.price} img={x.img} title={x.title}/> 
          
                ))
            }
        <button className=' rounded-full group-hover:bg-black flex flex-row items-center justify-center cursor-pointer hover:bg-black group w-10 h-10 absolute right-4 top-[50%]'>

                    <FaArrowRight size={16} className=' text-black group-hover:text-neutral-200'/>
            </button>
        </div>


    </div>
  )
}

export default Carousel