import React from 'react'
import ProductCard from './ProductCard'

function FourGrid() {
  return (
    <div className='h-full gap-6 w-full  bg-black pt-12 pb-8 flex flex-col justify-between'>
        <div className='flex flex-row justify-between'>
          <p className=' flex flex-row items-center text-neutral-100 text-5xl font-medium uppercase'>
          <svg width={40} height={40} viewBox="0 0 24 24" fill="none" data-testid="bds-icon-source" className="bds-icon cms-slide-header__title-icon" aria-hidden="true"><path pid="0" fillRule="evenodd" clipRule="evenodd" d="m17.263 10.956-4.191-4.48L14.452 5 21 12l-6.548 7-1.38-1.476 4.19-4.48H4v-2.088h13.263Z" fill="currentColor"></path></svg>
          Get the look
          </p>


         <a className=' h-10 text-sm cursor-pointer hover:opacity-80 px-4 py-0.5 flex flex-row justify-center items-center rounded-full border border-white text-white'>
          <span>
            Стильдерді көру

          </span>
          
        
         </a>
        </div>
        <div className=' grid grid-cols-4 gap-0.5'>
        <ProductCard variant={true} img="bg-[url(https://static.bershka.net/assets/public/8c6c/f635/0d90414a9cb7/18d36b2f728e/07370190803/07370190803.jpg?ts=1762446620592&w=750)]" title="Көйлек"/>
          <ProductCard variant={true} img="bg-[url(https://static.bershka.net/assets/public/96af/4cc0/90954e9e8f62/7b7c24415f23/08082116251/08082116251.jpg?ts=1762363897711&w=750)]"  title={"Шалбар"} />
          <ProductCard variant={true} img="bg-[url(https://static.bershka.net/assets/public/c0df/07d6/f8124a8d925e/263da15846a9/06782677711/06782677711.jpg?ts=1762505796644&w=750)]"  title="Аяө-киім" />
          <ProductCard variant={true} img="bg-[url(https://static.bershka.net/assets/public/b3f1/e2b9/405e4dd3aa10/b980ff2f8dfb/05348534401/05348534401.jpg?ts=1762363906628&w=750)]" title="Жемпір"/>
        
        </div>


    </div>
  )
}

export default FourGrid