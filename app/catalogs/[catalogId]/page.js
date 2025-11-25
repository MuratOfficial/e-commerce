"use client"

import FilterLine from '@/components/FilterLine'
import ProductItem from '@/components/ProductItem'
import { productsList } from '@/lib/data'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

function CatalogPage() {



  const params = useParams();


  return (
    <div className='pt-16 w-full flex flex-col gap-4'>
        <FilterLine name={params.catalogId}/>
        <div className='w-full px-8 grid grid-cols-4 gap-1'>
          {productsList.map((x, index)=>(
            <ProductItem id={x.id} key={index} title={x.title} discount={x.discount} price={x.price} imgs={x.imgs}/>
          ))}

   

        </div>
        
        </div>
  )
}

export default CatalogPage