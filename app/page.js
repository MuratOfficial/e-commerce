import Circle from "@/components/Circle";
import Empty from "@/components/Empty";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

 export default function Home() {
  return (
    <main className=" bg-white min-h-screen">
      <Navbar/>
      

      <Circle/>

     
       <Hero title="аяқ-киім" classname="bg-[url(/hero1.jpg)]" classname2="bg-[url(/hero2.jpg)]" />

       <div className="w-full grid grid-cols-6">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
       </div>

       <Hero title="сөмке" classname="bg-[url(https://images.pexels.com/photos/30886134/pexels-photo-30886134.jpeg)]" classname2="bg-[url(https://images.pexels.com/photos/34515879/pexels-photo-34515879.jpeg)]" />


      <Empty />
       

        {/* Catalogs */}


        {/*  Billboard   */}


        {/* Catalog */}

        {/* Billboard */}

    </main>
  );
}


// npm run dev


