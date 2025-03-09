import React from 'react'

function AboutUs() {
  return (
    <>
<section className='bg-blue-400 flex flex-col '>

        <div className=' flex flex-col md:flex-row md:relative md:p-10  '>
            <img src="./src/assets/aboutus/presidentWords.png" alt="words" className='md:w-[50%]  z-10 md:right-0 ' />
        <img src="./src/assets/aboutus/presidentForWords.png" alt="presidentimg" className='md:w-[60%] md:absolute md right-0 md:bottom-[0px]' />
        </div>
    </section>
    </>
  )
}

export default AboutUs