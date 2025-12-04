'use client';

import React, { useState, useEffect } from 'react';

function ExampleS() {
  const [planet, setPlanet] = useState([]);

    useEffect(()=>{

    async function getData(){
            const fetchData = await fetch("http://localhost:3001/planet")
        
            if(!fetchData.ok) return

            const dataJson = await fetchData.json();

            setPlanet(dataJson);
      }

      getData();

    },[])

  return (
    <div className='px-20 text-7xl min-h-screen pt-20 flex flex-col justify-center items-start relative w-fit'>
      <h1 className="text-3xl mb-4 font-semibold p-4 rounded-md bg-zinc-500 text-white">

      {JSON.stringify((planet))}

      </h1>
    
    </div>
  );
    



}

export default ExampleS;