"use client"


import React, { useEffect, useState } from 'react'
import { LuArrowRight } from "react-icons/lu";

function SideBar({ isOpen, onClose }) {

    const [bigButtonsFemale, setBigButtonFemale] = useState([]);
    const [categories, setCategories] = useState([]);


    useEffect(()=>{
        async function getData(){
            const res = await fetch("http://localhost:3001/categories",{
                method:"POST"
            })
            if(!res.ok){
                console.log("Данные не подгрузились")
            } else{
                const data = await res.json();
                setBigButtonFemale(data.slice(0, 4));
                setCategories(data.slice(4))
            }
        }


        getData();


    }, [])

    return (
        <div 
            onMouseLeave={onClose}
            className={`fixed top-0 left-0 pt-12 flex flex-col gap-4 h-screen bg-white z-20 overflow-y-scroll transition-transform duration-500 w-5/12 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <div className='w-full pt-1 pb-2 border-b px-8'>
                <button className='flex flex-row gap-4 uppercase items-center text-xs font-semibold'>
                    Осы жерден іздеңіз
                </button>
            </div>

            <div className='flex flex-col gap-4 items-start px-8 py-4 border-b border-black/10'>
                {bigButtonsFemale?.map((x, index)=>(
                    <a key={index} href={`/catalogs/${x.path}`} className='text-2xl hover:opacity-80 cursor-pointer group uppercase flex flex-row gap-1 items-center relative'> 
                        <LuArrowRight className='w-0 group-hover:w-5 transition-all duration-400' size={18}/> 
                        <span className='transition-all duration-400'>{x.name}</span> 
                    </a>
                ))}
            </div>
            
            <div className='flex flex-col gap-2 items-start px-8 py-4 border-b border-black/10'>
                {categories?.map((x, index)=>(
                    <a href={`/catalogs/${x.path}`} key={index} className='hover:opacity-80 text-xs uppercase'>{x.name}</a>
                ))}
            </div>

            <div className='flex flex-col gap-2 items-start px-8 py-4 border-b border-black/10'>
                <p className='text-xs text-gray-500 uppercase mb-2'>
                    Ұсынылды
                </p>
                <a href='#' className='hover:opacity-80 text-red-500 text-xs uppercase'>Акциялар</a>
                {/* {picks.map((x, index)=>(
                    <a href={`/catalogs/${x.path}`} key={index} className='hover:opacity-80 text-xs uppercase'>{x.name}</a>
                ))} */}
            </div>

            <div className='flex flex-col gap-2 items-start px-8 py-4 border-b border-black/10'>
                <p className='text-xs text-gray-500 uppercase mb-2'>
                    Арнайы жобалар
                </p>
                <a href={`/catalogs/music`} className='hover:opacity-80 text-xs uppercase'>Музыка</a>
                <a href="/catalogs/personalization" className='hover:opacity-80 text-xs uppercase'>Жекелендіру</a>
            </div>
{/* 
            <div className='flex flex-row gap-2 items-start px-8 py-4 border-b border-black/10'>
                {tags.map((x, index)=>(
                    <a href={`/catalogs/${x.path}`} key={index} className='hover:opacity-80 text-xs uppercase py-1 px-2 border border-black/10 rounded-full'>{x.name}</a>
                ))}
            </div> */}
        </div>
    )
}

export default SideBar