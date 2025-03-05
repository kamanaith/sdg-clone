import React from 'react'
function Navbar() {
  return (
    <>
    <nav className='  bg-blue-400 '>
      <div className='flex justify-between bg-white '>
        <div className='px-2 py-2 cursor-pointer'>
          <a href="#">
            <img src="./src/assets/main-logo.png" className=' w-70 h-20 py-2 px-2' alt="logoimg"/>
          </a>
        </div>
        <aside className=" p-1.5 justify-center align-middle gap-1 flex-col fixed bg-blue-400 h-50% -top-full w-72 transition-opacity ease-in">
    <button className="absolute to-5% right-5 text-2xl p-1.5"><div className="fas fa-multiply cursor-pointer"></div></button>
    {/* <div className='hidden  w-full'>
          <ul className='flex flex-col  rounded-lg bg-blue-400'>
            <li >
              <a href="#" className='block py-2 px-16 text-white bg-blue-700 rounded-sm dark:bg-blue-600'>Home</a>
            </li>
            <li>
              <a href="#"  className='text-xl hover:text-green-900'>About us</a>
            </li>
            <li>
              <a href="#"  className='block  text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>Blogs</a>
            </li>
            <li >
              <a href="#"  className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>Events</a>
            </li>
            <li >
              <a href="#"  className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>Gallery</a>
            </li>
            <li >
              <a href="#"  className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>Contact us</a>
            </li>

          </ul>
        </div> */}
</aside>
        <button className="hamburgericon text-3xl m-3 md:hidden">
                <div className="fas fa-bars hamburger">
                </div>
            </button>
        <div className='m-6 align-middle mr-50 font-semibold '>
          <ul className=' md:flex gap-15 align-baseline text-2xl justify-between md:items-center  md:z-auto md:static absolute left-0 md:opacity-100 opacity-0 '>
            <li className='mx-2  my-6 md:my-0'>
              <a href="#" className='text-xl hover:text-green-900'>Home</a>
            </li>
            <li  className='mx-2  my-6 md:my-0'>
              <a href="#"  className='text-xl hover:text-green-900'>About us</a>
            </li>
            <li  className='mx-2  my-6 md:my-0'>
              <a href="#"  className='text-xl hover:text-green-900'>Blogs</a>
            </li>
            <li  className='mx-2  my-6 md:my-0'>
              <a href="#"  className='text-xl hover:text-green-900'>Events</a>
            </li>
            <li  className='mx-2  my-6 md:my-0'>
              <a href="#"  className='text-xl hover:text-green-900'>Gallery</a>
            </li>
            <li  className='mx-2  my-6 md:my-0'>
              <a href="#"  className='text-xl hover:text-green-900'>Contact us</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar