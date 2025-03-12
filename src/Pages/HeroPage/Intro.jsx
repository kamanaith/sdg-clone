import React from 'react'

function Intro() {
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
        
          <img src="./src/assets/rotate/rotate3.png" alt="image" className=' p-2 lg:p-15 lg:w-[70%]' />
      
      <div className="relative al w-80 h-80 sm:w-60 sm:h-60 md:w-100 md:h-100 lg:mr-20 ">
        <img    src="./src/assets/rotate/rotate1.png" alt="Spinning Image" className="w-full h-full " />
        <img src="./src/assets/rotate/rotate2.png"  alt="Earth" className="absolute inset-0 m-auto w-35 h-35 sm:w-24 sm:h-24 md:w-50 md:h-50" />
      </div>
    
    </div>
</div>
    </>
  )
}

export default Intro