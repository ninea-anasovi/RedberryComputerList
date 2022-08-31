import React from 'react'
import { Link } from 'react-router-dom'

function FixedButton({goLink}) {
  return (
    <Link to={goLink}>    
        <div className='fixed  w-12 h-12 top-6 left-6 z-3 rounded-full bg-[#D9D9D9]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-auto ml-auto my-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </div>
    </Link>
  )
}

export default FixedButton