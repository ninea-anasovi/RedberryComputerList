import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../../assets/images/celebrate.png'
import Button from '../../button'

function Finished() {
  return (
    <div className='bg-[#4A4A4A] h-screen py-24 px-72'>
      <div className='bg-white rounded-lg py-16 text-center items-center'>
        <img src={image} alt='celebration' className='mr-auto ml-auto block'/>
        <h5 className='block'>ჩანაწერი დამატებულია!</h5>
        <Link to='/list'>
          <Button text={'სიაში გადაყვანა'} type={'button'}/>
        </Link>
        <Link to='/'>
          <button type="button" className='block ml-auto mr-auto text-blue-500 py-4 text-center rounded-md mt-2'>
            მთავარი
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Finished