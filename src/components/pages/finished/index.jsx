import React from 'react'
import image from '../../../assets/images/celebrate.png'
import Button from '../../button'
import SecondaryButton from '../../secondaryButton'

function Finished() {
  return (
    <div className='bg-[#4A4A4A] h-screen py-24 px-72'>
        <div className='bg-white rounded-lg py-16 text-center items-center'>
            <img src={image} alt='celebration' className='mr-auto ml-auto block'/>
            <h5 className='block'>ჩანაწერი დამატებულია!</h5>
            <Button text={'სიაში გადაყვანა'} type={'button'}/>
            <SecondaryButton text={'მთავარი'} type={'button'}/>
        </div>
    </div>
  )
}

export default Finished