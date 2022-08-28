import React from 'react'

function Card() {
  return (
        <div className="flex flex-col items-center bg-blue-50 rounded-[15px] border border-blue-100 md:flex-row">
        <img className="object-cover w-full h-96 md:h-auto md:w-1/2 md:rounded-[10px] mx-2 my-2" src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt=""/>
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900">ნატო ანდღულაძე</h5>
            <p className="mb-3 text-md font-normal text-black ">pentium IV</p>
            <a href='#' className='text-sm text-blue-600 underline underline-offset-2'>მეტის ნახვა</a>
        </div>
        </div>
  )
}

export default Card