import React from 'react'
import ProductCard from './ProductCard'

function FourGrid() {
  return (
    <div className='h-[90vh] w-full  bg-black pt-12 pb-8 flex flex-col justify-between'>
        <div></div>
        <div className=' grid grid-cols-4 gap-0.5'>
        <ProductCard variant={true} img="bg-[url(https://static.bershka.net/assets/public/50c3/da6c/a1d64b28ae84/d558b21c7eef/D_slide_man_jackets_-1/D_slide_man_jackets_-1.jpg?ts=1762436939806&w=1440)]" title="Көйлек"/>
          <ProductCard variant={true} img="bg-[url(https://static.bershka.net/assets/public/2c20/bebf/4ccd4f4095f9/3bb8db839bc9/D_slide_man_jeans_-1/D_slide_man_jeans_-1.jpg?ts=1762436940780&w=1440)]"  title={"Шалбар"} />
          <ProductCard variant={true} img="bg-[url(https://static.bershka.net/assets/public/5c47/6858/19044f3ab3e8/b7683c82f963/D_slide_man_trousers_-1/D_slide_man_trousers_-1.jpg?ts=1762436942962&w=1440)]"  title="Аяө-киім" />
          <ProductCard variant={true} img="bg-[url(https://static.bershka.net/assets/public/c8db/b9b4/1ee247d0a43b/4140c08f4b3b/D_slide_man_tricot_-1/D_slide_man_tricot_-1.jpg?ts=1762436941901&w=1440)]" title="Жемпір"/>
        
        </div>


    </div>
  )
}

export default FourGrid