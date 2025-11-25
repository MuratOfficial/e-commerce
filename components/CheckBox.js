import React, { useState } from 'react'

function CheckBox({text, desc, allColored}) {

    const [checked, setChecked] = useState(false);


    const handleCheck = () => {
        if(checked){
            setChecked(false)
        }else{
            setChecked(true)
        }
    }

  return (
    <div className={'flex flex-row gap-2 items-start py-4 px-6 rounded-2xl '+ (allColored && " border-[0.5px] border-gray-400 bg-gray-200")  +  ((allColored) && checked && " bg-sky-100  border-sky-300")}>
        <input
        type='checkbox'
        className=' mt-1 border-black/10 accent-black w-4 h-4 rounded-xl'
        checked={checked}
        onChange={handleCheck}
        />

        <div className='flex flex-col  '>
            <p className=' font-semibold'>
            {text}

            </p>
            <p>
                {desc}
            </p>

        </div>
        

    </div>
  )
}

export default CheckBox