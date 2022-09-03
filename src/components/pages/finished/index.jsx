import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../../assets/images/celebrate.png'
import Button from '../../button'

function Finished() {
  return (
    <div className='bg-[#4A4A4A] h-screen md:py-24 md:px-72'>
      <div className='bg-white rounded-lg py-32 md:py-12 text-center items-center'>
        <img src={image} alt='celebration' className='mr-auto ml-auto block mt-4 md:mb-16 md:mt-0 md:mb-0'/>
        <h5 className='block mb-12 text-xl font-bold md:text-base md:font-normal mx-32 md:mx-0'>ჩანაწერი დამატებულია!</h5>
        <Link to='/list'>
          <Button text={'სიაში გადაყვანა'} type={'button'}/>
        </Link>
        <Link to='/'>
          <button type="button" className='block ml-auto mr-auto text-blue-500 py-4 text-center rounded-md mt-4 md:mt-2'>
            მთავარი
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Finished