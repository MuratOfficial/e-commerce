import { getName } from '@/lib/data'
import React from 'react'

function FilterLine({name}) {

  const pathName =  getName(name);

  return (
    <div className='flex flex-row px-8 justify-between py-4'>
      <h3 className='font-(family-name:--font-inter) font-semibold text-xl'>
        {pathName}
      </h3>

      <div className=' flex flex-row gap-4'>


        
      </div>
       
      </div>
  )
}

export default FilterLine