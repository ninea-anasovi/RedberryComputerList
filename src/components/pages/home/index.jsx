import React from 'react'
import Logo from '../../../assets/images/LOGO.svg'
import heroImage from '../../../assets/images/hero-image.png'
import mobileHeroImage from '../../../assets/images/hero-image-mobile.png'
import { Link } from "react-router-dom"


function Home() {

  return (
    <div className='my-16'>
        <div>
            <img src={Logo} alt='redberry-logo' className='ml-auto mr-auto'/>
        </div>
        <div className='my-16'>
            <img src={heroImage} alt='man working in redberry' className='ml-auto mr-auto w-2/5 hidden md:block'/>
            <img src={mobileHeroImage} alt='man working in redberry' className='ml-auto mr-auto w-4/5 my-24 block md:hidden'/>
        </div>
        <div className=''>
            <Link to="/form">
                <button className='block bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 w-4/5 md:w-1/4  text-center rounded-md ml-auto mr-auto '>
                    ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
                </button>
            </Link>
            <Link to="/list">
                <button href='#' className='block bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 w-4/5 md:w-1/4 text-center rounded-md ml-auto mr-auto mt-4'>
                    ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Home