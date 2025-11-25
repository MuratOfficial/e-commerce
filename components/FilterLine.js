import { getName } from '@/lib/data'
import React from 'react'

function FilterLine({name}) {

  const pathName =  getName(name);

  return (
    <div className='flex flex-row px-8'>
      <h3 className='font-(family-name:--font-inter) font-semibold text-xl'>
        {pathName}
      </h3>
       
      </div>
  )
}

export default FilterLine