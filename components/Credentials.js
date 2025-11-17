import { LuDot } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";

function Credentials() {
  return (
    <div className='w-full h-full font-(family-name:--font-inter) col-span-4 text-sm gap-4  grid grid-cols-2 text-black'>
  
            <div className='flex flex-row flex-wrap items-center gap-1  w-full'>
                <a href='#'>Сатып алу шарты</a> {<LuDot />}
                <a href='#'>#luxuryboom шарты</a> {<LuDot />}
                <a href='#'>Конфиденциалдылық саясаты</a> {<LuDot />}
                <a href='#'>Қолдану саясаты</a> 
                <div className='flex flex-row items-center justify-start gap-1'>
                {<LuDot />} <a href='#'>cookie реттеу</a>
                {<LuDot />} <a href='#'>Сайт картасы</a> 
            </div>
            
            
        </div>
        <div className='flex flex-row justify-end items-center gap-4'>
            <div className='flex flex-row items-center gap-4'>
            {<AiOutlineGlobal />} Казахстан | қазақша
            </div>
            <div>
             © 2025 LUXURYBOOM
            </div>
            </div>
    </div>
  )
}

export default Credentials
