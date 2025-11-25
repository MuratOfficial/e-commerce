import React from 'react'
import { IoMdInformationCircleOutline } from "react-icons/io";

function InfoArticle() {
  return (
    <div className='w-full border-[0.5px] border-black/10 p-3 rounded-md flex flex-row items-center justify-start gap-3'>
        <IoMdInformationCircleOutline size={20} className='text-blue-500'/>
        <p className='text-xs font-light'>Model height: 189 cm - Size L</p>

    </div>
  )
}

export default InfoArticle