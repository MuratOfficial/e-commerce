import Image from 'next/image'
import React from 'react'

function Gallery() {
  return (
    <div className=' w-full min-h-screen gap-1 flex flex-col'>
        <div className='w-full grid gap-1 grid-cols-2'>
          <img src='https://static.bershka.net/assets/public/3a9a/9591/2f3f4b56a768/cd62b8868771/06787551800-01-p/06787551800-01-p.jpg?ts=1761146207212&w=850'  alt='model' />
          <img src='https://static.bershka.net/assets/public/3a9a/9591/2f3f4b56a768/cd62b8868771/06787551800-01-p/06787551800-01-p.jpg?ts=1761146207212&w=850'  alt='model' />
          <img src='https://static.bershka.net/assets/public/3a9a/9591/2f3f4b56a768/cd62b8868771/06787551800-01-p/06787551800-01-p.jpg?ts=1761146207212&w=850'  alt='model' />
          <img src='https://static.bershka.net/assets/public/3a9a/9591/2f3f4b56a768/cd62b8868771/06787551800-01-p/06787551800-01-p.jpg?ts=1761146207212&w=850'  alt='model' />

        </div>



    </div>
  )
}

export default Gallery