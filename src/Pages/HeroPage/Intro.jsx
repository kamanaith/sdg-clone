import React from 'react'

function Intro() {
  return (
    <>
    
        <div className='text-5xl text-blue-400 text-center py-8 gap-2 '><h1><b>SDG Foundation</b></h1></div>
        <div className='flex flex-col gap-2 lg:flex-row-reverse'>
        <div className='text-blue-400 font-semibold text-lg px-6 text-justify lg:text-2xl'>
            <p>The SDG Foundation is committed to supporting Nepal's progress toward achieving the United Nations' Sustainable Development Goals (SDGs). We focus on empowering communities and fostering lasting change by addressing key issues such as poverty, education, inequality, and environmental sustainability. Our initiatives are grounded in local needs, working alongside Nepali individuals, organizations, government bodies, NGOs, INGOs, and other partners to create sustainable solutions for a more equitable and resilient future.</p></div>
            <div >
                <img src="./src/assets/c6.jpg" alt="img" className=' ' />
            </div>

    </div>

    <div className='flex flex-col bg-blue-400 lg:flex-row '>
        <div>
          <img src="./src/assets/rotate/rotate3.png" alt="image" className='p-5 ' />
          </div>

          <div className="flex items-center justify-center bg-gray-100 relative">
      
      <div className="relative w-80 h-80 sm:w-60 sm:h-60 md:w-80 md:h-80">
        <img    src="./src/assets/rotate/rotate1.png" alt="Spinning Image" className="w-full h-full " />

  
        <img src="./src/assets/rotate/rotate2.png"  alt="Earth" className="absolute inset-0 m-auto w-35 h-35 sm:w-24 sm:h-24 md:w-32 md:h-32" />
      </div>
    </div>
    </div>
    </>
  )
}

export default Intro