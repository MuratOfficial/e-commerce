import Circle from "@/components/Circle";
import Empty from "@/components/Empty";
import FourGrid from "@/components/FourGrid";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

 export default function Home() {
  return (
    <main className=" bg-white min-h-screen">
      <Navbar/>
      

      <Circle/>

     
       <Hero title="аяқ-киім" classname="bg-[url(/hero1.jpg)]" classname2="bg-[url(/hero2.jpg)]" />

{/** Список категорий  */}
       <div className="w-full grid grid-cols-3 group">
          <ProductCard  img="bg-[url(https://static.bershka.net/assets/public/50c3/da6c/a1d64b28ae84/d558b21c7eef/D_slide_man_jackets_-1/D_slide_man_jackets_-1.jpg?ts=1762436939806&w=1440)]" title="Көйлек"/>
          <ProductCard img="bg-[url(https://static.bershka.net/assets/public/2c20/bebf/4ccd4f4095f9/3bb8db839bc9/D_slide_man_jeans_-1/D_slide_man_jeans_-1.jpg?ts=1762436940780&w=1440)]"  title={"Шалбар"} />
          <ProductCard img="bg-[url(https://static.bershka.net/assets/public/5c47/6858/19044f3ab3e8/b7683c82f963/D_slide_man_trousers_-1/D_slide_man_trousers_-1.jpg?ts=1762436942962&w=1440)]"  title="Аяө-киім" />
          <ProductCard img="bg-[url(https://static.bershka.net/assets/public/c8db/b9b4/1ee247d0a43b/4140c08f4b3b/D_slide_man_tricot_-1/D_slide_man_tricot_-1.jpg?ts=1762436941901&w=1440)]" title="Жемпір"/>
          <ProductCard title="Жемпір2" img="bg-[url(https://static.bershka.net/assets/public/0fb3/c85a/04514702a81b/9ad103bc53df/D_slide_man_tshirts_-1/D_slide_man_tshirts_-1.jpg?ts=1762436944283&w=1440)]" />
          <ProductCard img={`bg-[url(https://static.bershka.net/assets/public/1c73/8956/1cdd4429ae6b/308babb308e7/D_slide_man_hoodie_-1/D_slide_man_hoodie_-1.jpg?ts=1762436938355&w=1440)]`} title={`Күртеше`} />
       </div>
  

{/** Билбоард */}

       <Hero title="сөмке" classname="bg-[url(https://images.pexels.com/photos/30886134/pexels-photo-30886134.jpeg)]" classname2="bg-[url(https://images.pexels.com/photos/34515879/pexels-photo-34515879.jpeg)]" />


<FourGrid/>    
       

        {/* Catalogs */}


        {/*  Billboard   */}


        {/* Catalog */}

        {/* Billboard */}

    </main>
  );
}


// npm run dev


