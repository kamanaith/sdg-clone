import React from 'react'
import { useEffect , useState } from 'react'
import rotate3 from '../../assets/rotate/rotate3.png'
import rotate2 from '../../assets/rotate/rotate2.png'
import rotate1 from '../../assets/rotate/rotate1.png'


const Intro = () => {

  const [rotation , setRotation] = useState(0);

  useEffect(() =>{
const interval = setInterval(() => {


setRotation((prev) => (prev + 1) % 360);

  },50);

  return () => clearInterval(interval);
} ,[]);


  return (
    <>
    
<div className=' '>
<div className='text-5xl text-[#329BD5] text-center py-8 gap-2 '><h1><b>SDG Foundation</b></h1></div>
        <div className='flex flex-col gap-2 lg:flex-row-reverse'>
        <div className='text-[#329BD5] font-semibold text-lg px-6 text-justify lg:text-xl xl:text-2xl'>
            <p>The SDG Foundation is committed to supporting Nepal's progress toward achieving the United Nations' Sustainable Development Goals (SDGs). We focus on empowering communities and fostering lasting change by addressing key issues such as poverty, education, inequality, and environmental sustainability. Our initiatives are grounded in local needs, working alongside Nepali individuals, organizations, government bodies, NGOs, INGOs, and other partners to create sustainable solutions for a more equitable and resilient future.</p></div>
            <div  className='lg:pl-10 lg:pb-5'>
                <img src="./src/assets/c6.jpg" alt="img" className=' ' />
            </div>

    </div>

    <div className='flex flex-col  bg-[#329BD5] items-center lg:flex-row lg:w-full lg:justify-between '>
        
          <img src={rotate3} alt="image" className=' p-2 lg:p-15 lg:w-[60%]' />
      
  <div className="relative justify-center flex items-center w-80 h-80 sm:w-60 sm:h-60 md:w-120 md:h-120 lg:mr-20 " style={{ transform: `rotate(${rotation}deg)`, transition: "transform 20s linear" }}>
        
        <img    src={rotate1} alt="Spinning Image" className="w-full h-full absolute " />
      
        <img src={rotate2}  alt="Earth" className="absolute   m-auto w-35 h-35 sm:w-24 sm:h-24 md:w-50 md:h-50" />
        </div>
    
    </div>
</div>
    </>
  )
}

export default Intro