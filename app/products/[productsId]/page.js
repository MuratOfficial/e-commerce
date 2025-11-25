import DescPrice from '@/components/DescPrice'
import Gallery from '@/components/Gallery'
import React from 'react'

function ProductPage() {

  const articleVariation = [
    {name:"Қара·Артикул.6793/046/800", color:"#000"},
    {name:"Ақ·Артикул.6793/046/800", color:"#FG444A"},
    {name:"Сұр·Артикул.6793/046/800", color:"#929292"},
    
  ]

  return (
    <div className=' grid grid-cols-21 pt-10 min-h-screen'>

        {/** Здесь будет галерая */}

        <div className='w-full col-span-15'>
        <Gallery/>

        </div>


        {/** Блок цены и описания */}

        <DescPrice articleVariation={articleVariation}/>

    </div>
  )
}

export default ProductPage