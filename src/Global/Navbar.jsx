import { Menu , X } from 'lucide-react'
import React, { useState } from 'react'


function Navbar() {

  const [isOpen,setIsOpen] = useState(false)


  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <nav className='flex justify-between md:items-center  lg:items-center xl:items-center  '>

        <div className=' py-2 cursor-pointer '>
          <a href="#">
            <img src="./src/assets/main-logo.png" className='  w-auto h-16 md:h-15  ' alt="logoimg"/>
          </a>
        </div>
        <button className='flex flex-col ml-10 mr-8 justify-center md:hidden z-30' onClick={toggleNavBar}>
          {isOpen ? <X /> : <Menu />}
            </button>

            {isOpen &&(
              <div className='flex flex-col gap-3 items-center absolute z-20 md:hidden w-screen bg-blue-400'>
                 <a href="#" className='text-xl hover:text-green-900'>Home</a>
                 <a href="#" className='text-xl hover:text-green-900'>AboutUs</a>
                 <a href="#" className='text-xl hover:text-green-900'>Blogs</a>
                 <a href="#" className='text-xl hover:text-green-900'>Events</a>
                 <a href="#"  className='text-lg hover:text-green-900'>Gallery</a>
                 <a href="#"  className='text-lg hover:text-green-900'>ContactUs</a>

                 
              </div>
            )}
          
          <ul className='hidden md:flex md:flex-row font-semibold gap-6 text-gray-800   '>
            <li className='mx-2  my-6 md:my-0'>
              <a href="#" className='text-xl hover:text-green-900'>Home</a>
            </li>
            <li  className='mx-2  my-6 md:my-0'>
              <a href="#"  className='text-lg hover:text-green-900'>AboutUs</a>
            </li>
            <li  className='mx-2  my-6 md:my-0'>
              <a href="#"  className='text-lg hover:text-green-900'>Blogs</a>
            </li>
            <li  className='mx-2  my-6 md:my-0'>
              <a href="#"  className='text-lg hover:text-green-900'>Events</a>
            </li>
            <li  className='mx-2  my-6 md:my-0'>
              <a href="#"  className='text-lg hover:text-green-900'>Gallery</a>
            </li>
            <li  className='mx-2  my-6 md:my-0'>
              <a href="#"  className='text-lg hover:text-green-900'>ContactUs</a>
            </li>
          </ul>
      
    </nav>
    </>
  )
}

export default Navbar