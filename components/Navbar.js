import React from 'react'

function Navbar() {
    

    

  return (
    <div className='w-full px-8 flex flex-row justify-between items-center '>
        <div className='flex flex-row gap-4'>
            <a href='#' className='font-(family-name:--font-inter) uppercase font-bold text-2xl pr-2'>

                    LuxuryBoom
                </a>

                <div className='flex flex-row gap-4 uppercase items-center text-xs font-semibold'>
                    <a href='#'>
                        Әйелдер

                    </a>

                    <a href='#'>
                        Ерлер

                    </a>
                     <a href='#'>
                       By influencers

                    </a>


                </div>
                <button className='flex py-2 border-l border-r px-4 flex-row gap-4 uppercase items-center text-xs font-semibold'>

                    Осы жерден іздеңіз

                </button>

        </div>
        
        {/** Тут блок логина и корзинки */}
        <div className=' flex flex-row gap-4 items-center'>
               <a href='#'>
                    Жүйеге кіру

               </a>

            <button>

                Себет
            </button>

        </div>

        


    </div>
  )
}

export default Navbar