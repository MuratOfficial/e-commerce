import FilterLine from '@/components/FilterLine'
import ProductItem from '@/components/ProductItem'
import React from 'react'

function CatalogPage() {

  const productsList = [
    { price: 38.5, discount:0.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/59c3/c549/32144ef181e2/29ae22e6d867/07369498800-a4o/07369498800-a4o.jpg?ts=1752592956327&w=563)]", "bg-[url(https://static.bershka.net/assets/public/815e/0079/8192450890b7/59f8d1c23542/07381741800-a4o/07381741800-a4o.jpg?ts=1754396358158&w=563)]"], title: "Көйлек" },
    { price: 38.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/fcf1/b728/88ed4534b966/4a2c60c5b6c2/05497707812-a4o/05497707812-a4o.jpg?ts=1761056208288&w=563)]"], title: "Шалбар" },
    { price: 38.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/05eb/ec5c/2ee24e359c8e/9f1d4c6ab880/02811152800-a4o/02811152800-a4o.jpg?ts=1732635669384&w=563)]"], title: "Аяө-киім" },
    { price: 38.5, discount: 0.4, imgs: ["bg-[url(https://static.bershka.net/assets/public/815e/0079/8192450890b7/59f8d1c23542/07381741800-a4o/07381741800-a4o.jpg?ts=1754396358158&w=563)]"], title: "Жемпір" },
    { price: 38.5, discount:0.2, imgs: ["bg-[url(https://static.bershka.net/assets/public/59c3/c549/32144ef181e2/29ae22e6d867/07369498800-a4o/07369498800-a4o.jpg?ts=1752592956327&w=563)]"], title: "Көйлек 2" },
    { price: 38.5, discount: 0.1, imgs: ["bg-[url(https://static.bershka.net/assets/public/fcf1/b728/88ed4534b966/4a2c60c5b6c2/05497707812-a4o/05497707812-a4o.jpg?ts=1761056208288&w=563)]"], title: "Шалбар 2" },
    { price: 38.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/05eb/ec5c/2ee24e359c8e/9f1d4c6ab880/02811152800-a4o/02811152800-a4o.jpg?ts=1732635669384&w=563)]"], title: "Аяө-киім 2" },
    { price: 38.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/815e/0079/8192450890b7/59f8d1c23542/07381741800-a4o/07381741800-a4o.jpg?ts=1754396358158&w=563)]"], title: "Жемпір 2" },
    { price: 38.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/59c3/c549/32144ef181e2/29ae22e6d867/07369498800-a4o/07369498800-a4o.jpg?ts=1752592956327&w=563)]"], title: "Көйлек 2" },
    { price: 38.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/fcf1/b728/88ed4534b966/4a2c60c5b6c2/05497707812-a4o/05497707812-a4o.jpg?ts=1761056208288&w=563)]"], title: "Шалбар 2" },
    { price: 38.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/05eb/ec5c/2ee24e359c8e/9f1d4c6ab880/02811152800-a4o/02811152800-a4o.jpg?ts=1732635669384&w=563)]"], title: "Аяө-киім 2" },
    { price: 38.5, imgs: ["bg-[url(https://static.bershka.net/assets/public/815e/0079/8192450890b7/59f8d1c23542/07381741800-a4o/07381741800-a4o.jpg?ts=1754396358158&w=563)]"], title: "Жемпір 2" }
  
  ]

  return (
    <div className='pt-16 w-full flex flex-col gap-4'>
        <FilterLine/>
        <div className='w-full  grid grid-cols-4 gap-1'>
          {productsList.map((x, index)=>(
            <ProductItem key={index} title={x.title} discount={x.discount} price={x.price} imgs={x.imgs}/>
          ))}

   

        </div>
        
        </div>
  )
}

export default CatalogPage