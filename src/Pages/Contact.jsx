import React from 'react'
import { MapPinnedIcon , PhoneCall , MessageCircleMore , Mail} from 'lucide-react'

function Contact() {
  return (
    <>
<div className='bg-blue-400 mb-5'>
<div className='text-center  text-white'>
    <h1 className='font-bold text-4xl p-5'>Get in Touch</h1>
    <h4 className='font-semibold p-2 text-justify'>Got questions or want to support our mission? Feel free to reach out. We’d love to hear from you! </h4>
</div>
<div className='bg-white m-5 p-5 rounded-3xl gap-5'>
    <div><h2>Your Name</h2>
    <input type="text"  className='border-b-2  w-full' /></div>

    <div><h2>Your Email</h2>
    <input type="email"className='border-b-2 border-gray-500 w-full'/></div>

<div>    <h2>Subject</h2>
<input type="text" className='border-b-2 border-gray-500 w-full'/></div>

<div>    <h2>Your Message</h2>
<textarea type="text" className='border-b-2 border-gray-500  w-full'/></div>

    <button type="button" className='px-5 py-2 bg-blue-400 '>Submit</button>
</div>
</div>

<div className='bg-blue-400  mb-10 p-5 pb-10 rounded-xl gap-5 '>
    <div className=' text-white font-bold text-3xl text-center'><h1>Contact Info</h1>
  </div>
<div className='flex flex-row'>
    <div className='flex flex-col text-white gap-5'>


    <div className='flex flex-row gap-5 text-justify'><MapPinnedIcon /> <h1 className='font-semibold'>Address:</h1>
    <p>Kathmandu,Nepal</p> </div>


    <div  className='flex flex-row gap-5 text-justify'><PhoneCall /><h1 className='font-semibold'>Phone:</h1>
    <p>+977 9701376414</p></div>


    <div  className='flex flex-row gap-5 text-justify'><MessageCircleMore /><h1 className='font-semibold'>Whatsapp:</h1>
    <p>9701376414</p></div>

    <div  className='flex flex-row gap-5 text-justify'><Mail />    <h1 className='font-semibold'>Email</h1>
    <p>sdgfoundation@gail.com</p></div>
</div>
</div>
</div>
        
    </>
  )
}

export default Contact