"use client"

import React, { useState } from 'react'
import { LuArrowRight } from "react-icons/lu";

function SideBar({
    onShow
}) {

    const bigButtonsFemale = [
        {name:"Жаңа"},
        {name:"Кеш сериясы"},
        {name:"БСК жасөспірім"},
        
        {name:"Шаш әсері"}
    ]

    const bigButtonsMale = [
        {name:"Жаңа"},
        {name:"Collaborations"},
        {name:"Жақсы сатушылар"},
        
        {name:"Комбо ұсынысы"}
    ]

    const categories = [
        {name: "Bershka active"},
    {name: "Күртеше және тренч"},
    {name: "Пальто және тренч"},
    {name: "Джинс"},
    {name: "Шалбар"},
    {name: "Көйлек және түрлі комбинезон"},
    {name: "Жемпір және кардиган"},
    {name: "Свитшот"},
    {name: "Топ және боди"},
    {Name: "Футболка"},
    {name: "Жейде және блузка"},
    {name: "Белдемше"},
    {name: "Шорт пен бермуд"},
    {name: "Жалпы киім үлгісі"},
    {name: "Жүзуге арналған киім"},
    {name: "Әйелдер ішкі киімі"},
    {name: "Аяқ киім"},
    {name: "Сөмке мен тиын қапшық"},
    {name: "Аксессуарлар"},
    ]

    const picks = [
        {name: "Жүзуге арналған киім"},
    {name: "Әйелдер ішкі киімі"},
    {name: "Аяқ киім"},
    {name: "Сөмке мен тиын қапшық"},
    {name: "Аксессуарлар"},
    ]

     const tags = [
        {name: "Сыйлық картасы"},
    {name: "Ақпараттық бюллетень"},
    {name: "MBRS"},
    {name: "Көмек"},
    ]

    const [showSideBar, setShowSideBar] = useState(false);


  return (
    <div onMouseLeave={()=>setShowSideBar(true)} className={' pt-12   flex flex-col gap-4 h-screen  fixed bg-white z-20 overflow-y-scroll transition-all duration-500 w-5/12 ' + showSideBar && " translate-x-[250px]" }>

        <div className='w-full pt-1 pb-2 border-b px-8'>
                <button className='flex  flex-row gap-4 uppercase items-center text-xs font-semibold'>

                    Осы жерден іздеңіз

                </button>

        </div>

        <div className='flex flex-col gap-4 items-start px-8 py-4 border-b border-black/10'>
                {bigButtonsFemale.map((x, index)=>(
                    <a key={index} className='text-2xl hover:opacity-80 cursor-pointer group uppercase flex flex-row gap-1 items-center relative'> <LuArrowRight className=' w-0 group-hover:w-5 transition-all duration-400' size={18}/> <span className=' transition-all duration-400   '>{x.name}</span> </a>
                ))}



        </div>

       
            
        <div className='flex flex-col gap-2 items-start px-8 py-4 border-b border-black/10'>
               
                {categories.map((x, index)=>(
                    <a href='#' key={index} className='hover:opacity-80 text-xs uppercase'>{x.name}</a>
                ))}

        </div>

         <div className='flex flex-col gap-2 items-start px-8 py-4 border-b border-black/10'>
                <p className='text-xs text-gray-500 uppercase mb-2'>
                    Ұсынылды

                </p>
                    <a href='#' className='hover:opacity-80 text-red-500 text-xs uppercase'>Акциялар</a>
                

                {picks.map((x, index)=>(
                    <a href='#' key={index} className='hover:opacity-80 text-xs uppercase'>{x.name}</a>
                ))}

        </div>

        <div className='flex flex-col gap-2 items-start px-8 py-4 border-b border-black/10'>
                <p className='text-xs text-gray-500 uppercase mb-2'>
                    Арнайы жобалар

                </p>
                    <a href='#' className='hover:opacity-80  text-xs uppercase'>Музыка</a>
                    <a href='#' className='hover:opacity-80  text-xs uppercase'>Жекелендіру</a>
                

            
        </div>

        <div className='flex flex-row gap-2 items-start px-8 py-4 border-b border-black/10'>
                {tags.map((x, index)=>(
                    <a href='#' key={index} className=' hover:opacity-80 text-xs uppercase py-1 px-2 border border-black/10 rounded-full'>{x.name}</a>
                ))}
         
         </div>




    </div>
  )
}

export default SideBar