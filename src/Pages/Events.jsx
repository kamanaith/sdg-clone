import React from 'react'

function Events() {
  return (
    <>
    <div className='text-5xl font-bold text-center text-blue-400 p-5'>
        <h1 >Our Events</h1>
    </div>
    <div className='flex flex-row md:flex-row mb-2 md:items-start lg:text-left  gap-3'>
        <div className='rounded-2xl border-1 text-center p-2 bg-blue-400 w-1/3'>
            <h1>25th september
                2025
            </h1>
        </div>
        <div className='mb-20'>
            <h1 className='font-bold'>
                Charity Funding Gala
            </h1>
            <h3>By SDG Foundation</h3>
            <button className='p-2 bg-blue-500 border-1 rounded-2xl'>Show More</button>
        </div>

    </div>
    </>
  )
}

export default Events