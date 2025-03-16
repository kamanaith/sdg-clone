import React from 'react'
import bgImage from '../HeroPage/CultureImages/c2.jpg'
import cultureSection1 from '../../assets/sponsers/cultureSection1.jpg' 

function Culture() {
  return (
    <>
<div className='flex flex-col lg:flex-row  mb-2 '>
    <div className='bg-[#329BD5] h-60   lg:w-[50%] xl:h-100'>
<img src={cultureSection1} alt="culture" className='p-3 h-60 rounded-2xl  w-screen xl:h-100' />
    </div>
<div   style={{ backgroundImage: `url(${bgImage})` }} className='bg-cover flex flex-col md:flex-row gap-4 lg:justify-around lg:items-center relative lg:w-full  background: rgba(0, 0, 0, 0.5);  bg-center h-60 xl:h-100'>
<div className="absolute inset-0 bg-black/60"></div>

<div className='lg:'>
<h1 className=' flex flex-col font-semibold   text-white m-1 drop-shadow-lg  text-xl md:text-2xl lg:text-3xl'>
  Let's Explore
</h1>
<p className='text-white lg:text-xl pl-2 drop-shadow-md'> Our Culture.. <br />
with us</p>
<div />
<div className='flex flex-row m-2 gap-2 text-white '>
  <button className='rounded-sm p-2 drop-shadow-lg bg-[#329BD5] text-md'>Get a tour</button>
  <button className=' rounded-sm p-2 bg-[#329BD5] drop-shadow-lg text-md'> Contact Us</button>
</div>
</div>
<div className='gap-2 lg:pt-25'>
  <input type="email" placeholder='Enter email
  ' className='border-1 border-white m-3 bg-white w-fit p-1 drop-shadow-lg rounded-sm placeholder:bg-white' />
  <button className='bg-[#329BD5] pl-3 pr-3 text-xl p-1  text-white drop-shadow-lg rounded-sm'>Submit</button>
</div>



</div>
</div>
    </>
  )
}

export default Culture