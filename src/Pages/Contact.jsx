import React from 'react'
import { MapPinnedIcon , PhoneCall , MessageCircleMore , Mail} from 'lucide-react'

function Contact() {
  return (
    <>
<div className='bg-gradient-to-b from-[#329BD5] to-white mb-5 '>
<div className='text-center  text-white rounded-xl'>
    <h1 className='font-bold text-4xl p-5'>Get in Touch</h1>
    <h4 className='font-semibold p-2 lg:text-center lg:text-xl text-justify'>Got questions or want to support our mission? Feel free to reach out. We’d love to hear from you! </h4>
</div>
<div className='bg-white m-4  rounded-xl gap-5 lg:flex lg:flex-row-reverse lg:justify-around '>
<div className='lg:w-100'>
<div className='p-2'><h2>Your Name</h2>
    <input type="text"  className='border-b-2  w-full' /></div>

    <div className='p-2'><h2>Your Email</h2>
    <input type="email"className='border-b-2 border-gray-500 w-full'/></div>

<div className='p-2'>    <h2>Subject</h2>
<input type="text" className='border-b-2 border-gray-500 w-full'/></div>

<div className='p-2'>    <h2>Your Message</h2>
<textarea type="text" className='border-b-2 border-gray-500  w-full'/></div>

    <button type="button" className='px-5 m-2 rounded-lg py-2 bg-[#329BD5] '>Submit</button>

</div>


<div className='bg-[#329BD5] lg:mt-5 lg:w-[35%] rounded-xl gap-5 '>
    <div className=' text-white font-bold text-3xl pb-5 text-center'><h1>Contact Info</h1>
  </div>
<div className='flex flex-row '>
    <div className='flex flex-col text-white  lg:p-3 gap-5'>


    <div className='flex flex-row gap-3 text-justify'><MapPinnedIcon /> <h1 className='font-semibold'>Address:</h1>
    <p>Kathmandu,Nepal</p> </div>


    <div  className='flex flex-row gap-3 text-justify'><PhoneCall /><h1 className='font-semibold'>Phone:</h1>
    <p>+977 9701376414</p></div>


    <div  className='flex flex-row gap-3 text-justify'><MessageCircleMore /><h1 className='font-semibold'>Whatsapp:</h1>
    <p>9701376414</p></div>

    <div  className='flex flex-row gap-3 text-justify'><Mail />    <h1 className='font-semibold'>Email:</h1>
    <p>sdgfoundation@gail.com</p></div>
</div>
</div>
</div>
</div>
</div>   
    </>
  )
}

export default Contact