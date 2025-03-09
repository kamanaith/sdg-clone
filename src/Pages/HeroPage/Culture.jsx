import React from 'react'
import bgImage from '../HeroPage/CultureImages/c2.jpg'

function Culture() {
  return (
    <>
<div className='flex flex-col lg:flex-row  mb-2 '>
    <div className='bg-blue-400 h-60  lg:w-[30%] xl:h-100'>
<img src="./src/assets/cultureSection1.jpg" alt="culture" className='p-4 h-60 w-screen xl:h-100' />
    </div>
<div   style={{ backgroundImage: `url(${bgImage})` }} className='bg-cover relative lg:w-full brightness-70 bg-center h-60  lg:brightness-90 xl:h-100'>

<div className='flex flex-col justify-between md:flex-row md:p-5 lg:p-20 '>
<div className=' '>
<h1 className='text-white m-1  text-xl'>Let's Explore Our Culture with us.
</h1>
<div />
<div className='flex flex-row m-2 gap-2 text-white '>
  <button className='rounded-sm p-1 bg-blue-400 text-sm'>Get A tour</button>
  <button className=' rounded-sm bg-blue-400 text-sm'> Contact Us</button>
</div>
</div>
<div className='gap-2'>
  <input type="email" placeholder='Enter email
  ' className='border-1 border-white m-3 bg-white w-fit  rounded-sm placeholder:bg-white' />
  <button className='bg-blue-400  text-white rounded-sm'>Submit</button>
</div>
</div>


</div>
</div>
    </>
  )
}

export default Culture