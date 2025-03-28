
import React from 'react'
import footerMap from '../assets/sponsers/footerMap.png'
import sponsor1 from '../assets/sponsers/sponsor1.png'
import sponsor2 from '../assets/sponsers/sponsor2.png'

function Footer() {
  return (
    <>
    <footer className='text-white flex flex-col  p-4 gap-3 px-3 bg-[#329BD5] lg:flex lg:flex-row lg:justify-between ' >
<div className=' text-center  lg:justify-center flex-1/3'>
    <h1 className='text-3xl text-center '><b>Our Story</b></h1>
    <p className='text-lg text-justify'>The foundation was born from the need for a dedicated team to address Nepal's pressing challenges. Recognizing the stagnation and systemic issues that hinder progress, we operate as a free and independent entity striving to break through these barriers. We actively promote Nepal's hidden cultural, historical, and natural treasures to a global audience while working on numerous projects that reflect our commitment to meaningful change. Together, we are building a better Nepal, one step at a time, for a brighter and more sustainable future.</p>
<button className='border-2 border-solid bg-white text-[#329BD5] text-lg pb-2 pt-1  font-semibold items-center rounded-lg   mx-2.5 '><a href="#" className='p-2 m-2'>READ MORE</a></button>
</div>
<hr />
<div className='text-center flex-1/3'>
{/* <div className='flex flex-col gap-3'> */}
<div className=' flex justify-center'>
<img src={footerMap} alt="footermap" className='w-80' /></div>

<div className=' text-2xl space-y-2 items-center'>
    <h1 className='text-center'><b>Quick Links</b></h1>
<div className='text-xl text-center'>
<a href="#">Home | </a>
<a href="#">Contact |</a>
<a href="#"> Event |</a>
<a href="#"> Travel</a>
</div>
<div className='text-2xl space-y-3 flex flex-col items-center flex-1/3'>
    <h1 className='text-center'><b>Connect with us</b></h1>
    <div className='flex  gap-6 text-2xl  cursor-pointer'>
        <a href="https://www.facebook.com/">
        <i className="fa-brands fa-facebook"></i></a>
    

        <a href="https://www.instagram.com/">
        <i className="fa-brands fa-instagram"></i></a>
    
   
        <a href="https://www.linkedin.com/">
        <i className="fa-brands fa-linkedin"></i></a>
   

        <a href="https://www.youtube.com/">
        <i className="fa-brands fa-youtube"></i></a>
    </div>
</div>
</div>
</div>
{/* </div> */}
<hr />
<div className='flex flex-col w-auto gap-4'>
    <h1 className='text-2xl text-center'><b>Sponsors</b></h1>

<div className='flex flex-col relative  overflow-hidden items-center justify-center lg:justify-between  gap-4'>

<div className='flex flex-row'>     
       <img src={sponsor1} alt="sponsors " className='h-20 ' />
        <img src={sponsor2} alt="sponsors" className='h-20' />
        {/* <img src="./src/assets/sponsor4.png" alt="sponsors" className='h-20 ' /> */}
        {/* <img src="./src/assets/sponsorFooter.png" alt="sponsors" className='h-20 ' /> */}
</div>

    <div className='text-center'>
        <h1 className='text-2xl'>
            <b>MORE INFO</b>
        </h1>
        <div className='flex flex-col '>
            <div><h2><b>Address:</b><p>Kathmandu,Nepal</p></h2></div>
            <div><h2><b>Phone:</b><p>+977 9701376414</p></h2></div>
            <div><h2><b>Whatsapp:</b><p>9701376414</p></h2></div>
            <div><h2><b>Email:</b><p>sdgfoundation24@gmail.com</p></h2></div>
        </div>
    </div>
</div>
</div>

</footer>
        <hr />
    <div className=" sm:items-center bg-[#329BD5] ">
<p className='flex flex-col lg:flex-row items-center justify-center gap-2 p-7 '>
<span className="text-sm  text-white sm:text-center ">© 2023 <b><a href="#">SDG Foundation</a></b> </span>
<span  className="text-sm  text-white sm:text-center"> All Rights Reserved. </span>
<span  className="text-sm  text-white sm:text-center"> Supported by Youth IT.</span>
       
</p>
    </div>
   
    </>
  )
}

export default Footer