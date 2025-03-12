import React from 'react'

function Events() {
  return (
    <>
    <div className='text-5xl font-bold text-center text-[#329BD5] p-5'>
        <h1 >Our Events</h1>
    </div>
    <div className='flex flex-row md:flex-row mb-2 md:items-start  ml-10  gap-3'>
        <div className='rounded-2xl border-1 text-center  h-20 p-2 bg-[#329BD5]  '>
            <h1>25th sept <br />
                2025
            </h1>
        </div>
        <div className='mb-20'>
            <h1 className='font-bold'>
                Charity Funding Gala
            </h1>
            <h3>By SDG Foundation</h3>
            <button className='p-2 bg-[#329BD5] border-1 rounded-2xl'>Show More</button>
        </div>

    </div>
    </>
  )
}

export default Events