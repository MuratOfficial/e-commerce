"use client"

import React, { useState } from 'react'
import SideBar from './SideBar';

function Navbar({count}) {
    
    const [sideBarOn, setSideBarOn] = useState(false);
    

    const handleShow = () => {
        if(sideBarOn){
            setSideBarOn(false)
        }else{
            setSideBarOn(true)
        }

    }

  return (

    <div>
        <div className=' w-full fixed border-b z-50  flex flex-row justify-between items-center bg-white'>
            <div className='border-b pl-8  flex flex-row gap-4 items-center'>
            <a href='#' className='font-(family-name:--font-inter) uppercase font-bold text-2xl pr-2'>

                    LuxuryBoom
                </a>

                <div className='flex flex-row gap-4 uppercase items-center text-xs font-semibold'>
                    <a onClick={()=> handleShow()} href='#'>
                        Әйелдер

                    </a>

                    <a onClick={()=> handleShow()} href='#'>
                        Ерлер

                    </a>
                     <a onClick={()=> handleShow()} href='#'>
                       By influencers

                    </a>


                </div>
                <button className='flex py-3 border-l border-r px-4 flex-row gap-4 uppercase items-center text-xs font-semibold'>

                    Осы жерден іздеңіз

                </button>

        </div>
        
        {/** Тут блок логина и корзинки */}
        <div className='border-b pr-8 z-50 flex text-xs flex-row gap-4 items-center'>
               <a href='#'>
                    Жүйеге кіру

               </a>

            <button>
                    Себет
            </button>

        </div>
        

      

        


        </div>
          {sideBarOn && <SideBar  />} 

    </div>



  )
}

export default Navbar