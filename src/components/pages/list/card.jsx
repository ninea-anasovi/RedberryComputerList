import React from 'react'
import { Link } from "react-router-dom"
import { useEffect } from 'react'

function Card({laptopData}) {

  return (
        <div className="flex items-center bg-blue-50 rounded-[15px] border border-blue-100 flex-row">
        <img 
          className="object-cover h-32 w-1/2 md:h-48 rounded-[10px] mx-2 my-2" 
          src={'https://pcfy.redberryinternship.ge/' + laptopData?.laptop.image} 
          alt="laptop_image"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900">{laptopData?.user.name} {laptopData?.user.surname}</h5>
            <p className="mb-3 text-md font-normal text-black ">{laptopData?.laptop.name}</p>
            <Link to={'/laptop/' + `${laptopData?.laptop.id}`}>
              <div className='text-sm text-blue-600 underline underline-offset-2'>მეტის ნახვა</div>
            </Link>
        </div>
        </div>
  )
}

export default Card