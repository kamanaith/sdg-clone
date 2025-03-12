import React from 'react'
import Intro from './Intro'
import BlogList from './Blogs'
import Culture from './Culture'
import Info from './Info'
import Map from './Map'

function Homepage() {
  return (
    <>
<div className='relative h-1/2 w-full top-0 '>
<div className='w-full h-[768px] overflow-hidden -z-10'>
<div><img src="./src/assets/carousel/c1.jpeg" alt="car" />
</div>
{/* <div><img src="./src/assets/carousel/c2.jpg" alt="car" /> */}
{/* </div> */}
{/* <div><img src="./src/assets/carousel/c3.jpg" alt="car" /> */}
{/* </div> */}
{/* <div><img src="./src/assets/carousel/c4.jpg" alt="car" /> */}
{/* </div> */}
{/* <div><img src="./src/assets/carousel/c5.jpeg" alt="car" /> */}
{/* // </div> */}
{/* <div><img src="./src/assets/carousel/c6.jpg" alt="car" /> */}
 {/* </div> */}
{/* <div><img src="./src/assets/carousel/c7.jpg" alt="car" /> */}
 {/* </div> */}
{/* <div><img src="./src/assets/carousel/c8.jpg" alt="car" /> */}
 </div>
{/* <div><img src="./src/assets/carousel/c9.jpeg" alt="car" /> */}
 </div>
    {/* </div> */}
{/* </div> */}

<div className='absolute  top-170 lg:mx-130 
 mx-3 text-sm lg:text-4xl text-white font-serif bg-white/20  bg-opacity-50 animate-bounce  backdrop-grayscale-50  '>

<p>“𝑅𝑒𝓂𝒾𝓃𝒾𝓈𝒸𝒾𝓃𝑔 𝓉𝒽𝑒 𝒪𝓁𝒹, </p>
<p>𝒞𝑒𝓁𝑒𝒷𝓇𝒶𝓉𝒾𝓃𝑔 𝒯𝑜𝒹𝒶𝓎”</p>
</div>

<Intro/> 
<BlogList/>
<Culture/>
<Info/>
<Map/>
    </>
  )
}

export default Homepage