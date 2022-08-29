import React from 'react'
import Logo from '../../../assets/images/LOGO.svg'
import HeroImage from '../../../assets/images/hero-image.png'
import { Link } from "react-router-dom"
import axios from 'axios'

function Home() {

  return (
    <div className='my-16'>
        <div>
            <img src={Logo} alt='redberry-logo' className='ml-auto mr-auto'/>
        </div>
        <div className='my-16'>
            <img src={HeroImage} alt='man working in redberry' className='ml-auto mr-auto w-2/5'/>
        </div>
        <div className=''>
            <Link to="/form">
                <button className='block bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 w-1/4 text-center rounded-md ml-auto mr-auto'>
                    ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
                </button>
            </Link>
            <Link to="/list">
                <button href='#' className='block bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 w-1/4 text-center rounded-md ml-auto mr-auto mt-4'>
                    ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Home