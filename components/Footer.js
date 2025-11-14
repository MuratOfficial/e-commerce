import React from 'react'
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaSnapchat, FaYoutube, FaPinterest, FaSpotify } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";

function Footer() {

    const help = [
        {name:"Онлайн сауда"},
        {name:"Төлем"},
        {name:"Жеткізу ж/е тапсырысты бақ-у"},
        {name:"Кері қайтару"},
        {name:"Сыйлық ретінде қайтару"},
        {name:"Сый картасы"},
        {name:"Сый билеті"},
        {name:"Іздеу"},
        {name:"Сыйлық алу"},
        {name:"Эл. түбіртек"},
        {name:"Шот-фактура"},
        {name:"MMBES"},
        {name:"Жазылымнан бас тарту"},
    ]

      const weLux = [
        {name:"Біз жайлы"},
        {name:"Тұрақтылық"},
        {name:"Бізбен жұмыс істеңіз"},
        {name:"Аффинистік карта"},
        {name:"Пресса"},
        {name:"Біздің оқиғалар"},
       
    ]

    const interested = [
        {name:"Аяқ-киімдер"},
        {name:"Сырт киімдер"},
        {name:"Black Friday"},
        {name:"Джинсы"},
        {name:"Тоқыма"},
        {name:"Шалбарлар"},
       {name:"Джерси"},
       {name:"Көйлектер"},
    ]

    const socials = [
        {icon: <FaInstagram size={15} />},
        {icon: <FaFacebook size={15} />},
        {icon:<FaTwitter size={15} />},
        {icon:<FaTiktok size={15} />},
        {icon:<FaSnapchat size={15} />},
        {icon:<FaYoutube size={15} />},
        {icon:<FaPinterest size={15} />},
        {icon:<FaSpotify size={15} />}
    ]

  return (
    <div className='bg-white text-sm font-(family-name:--font-inter) gap-12 text-black px-16 pb-8 pt-24 grid grid-cols-4 w-full  min-h-screen'>


        <div className='flex flex-col justify-start items-start gap-8'>

            <h5 className=' font-semibold'>
                Көмектесу керек пе?

            </h5>
                <a href='#' className=' font-semibold text-xs flex flex-row gap-1 items-center'> 
                    <FaWhatsapp size={18}/>    
                    WhatsApp
                     </a>


                <div className='flex flex-col justify-start items-start'>
                    <div className=' text-xs text-gray-400  flex flex-row gap-1 items-center'>
                        <LuMessageCircle size={16}/> 
                        <p className=' font-semibold'> Чатты бастау <span className='text-amber-700/80 text-[10px]'>Уақытша қолжетімсіз</span> </p>

                    </div>
                    <p className=' text-[10px] text-gray-700'>Дүйсенбіден жұмаға дейін сағат 12-19 арасында </p>

                </div>

                
            


        </div>
        <div className=' flex flex-col justify-start items-start gap-8'>
            <h5 className='font-semibold'>Көмек</h5>
            <div className='flex flex-col gap-4'>
                {help.map((x, index)=>(
                    <a href='#' key={index} className=' text-xs'>{x.name}</a>
                ))}
                
            </div>
        </div>
         <div className=' flex flex-col justify-start items-start gap-8'>
            <h5 className='font-semibold'>Біз LUXURYBOOM</h5>
            <div className='flex flex-col gap-4'>
                {weLux.map((x, index)=>(
                    <a href='#' key={index} className=' text-xs'>{x.name}</a>
                ))}
                
            </div>
        </div>
         <div className=' flex flex-col justify-start items-start gap-8'>
            <h5 className='font-semibold'>Сізге ұнауы мүмкін</h5>
            <div className='flex flex-col gap-4'>
                {interested.map((x, index)=>(
                    <a href='#' key={index} className=' text-xs'>{x.name}</a>
                ))}
                
            </div>
        </div>
        <div className='flex flex-row flex-wrap gap-2 items-center'>
                {socials.map((x, index)=>(
                    <a href='#' key={index} className='w-7 flex flex-col justify-center items-center h-7 rounded-full bg-black text-white'>
                        {x.icon}
                    </a>
                ))}

        </div>

                <div className='h-px bg-black/40 w-full col-span-4'></div>

    </div>
  )
}

export default Footer