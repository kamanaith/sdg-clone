import React from 'react'
import Members from './Commitee'
import presidentWords from '../../assets/aboutus/presidentWords.png'
import presidentForWords from '../../assets/aboutus/presidentForWords.png'

function AboutUs() {
  return (
    <>
<section className='bg-[#329BD5] flex flex-col '>

        <div className=' flex flex-col md:flex-row md:relative md:p-10  '>
            <img src={presidentWords} alt="words" className='md:w-[50%]  z-10 md:right-0 ' />
        <img src={presidentForWords} alt="presidentimg" className='md:w-[60%] md:absolute md right-0 md:bottom-[0px]' />
        </div>
    </section>

    < Members/>
    </>
  )
}

export default AboutUs