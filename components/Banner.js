import React from 'react'

function Banner({
    className, text1, text2, text3
}) {
  return (
    <div className={'w-full px-4 pt-12 pb-8 flex flex-col justify-between ' + className}>
        <p className=' uppercase font-(family-name:--font-inter) text-red-800 text-7xl text-left font-extrabold'>
       {text1}

        </p>
        <div className='w-full flex flex-row justify-between'>
        <p className='w-60 uppercase text-2xl font-semibold font-(family-name:--font-inter) text-red-800 text-left'>
            {text2}
        </p>
            <p className=' uppercase font-(family-name:--font-inter) text-red-800 text-7xl text-left font-extrabold'>
        {text3}

            </p>
        </div>


    </div>
  )
}

export default Banner