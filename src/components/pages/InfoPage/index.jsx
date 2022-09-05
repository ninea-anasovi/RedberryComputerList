import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FixedButton from '../../fixedButton';

function InfoPage() {

    let { id } = useParams();
    const [ user, setUser ] = useState()
    const [ laptop, setLaptop ] = useState()

    useEffect(() => {
        axios.get(`/laptop/${id}`)
            .then(response => {
                setUser(response.data.data.user);
                setLaptop(response.data.data.laptop)
                console.log(response.data.data.user)
            })
            .catch(error => console.log(error))
    }, [])

  return (
    <div className='mx-4 md:mx-48'>
        <FixedButton goLink='/list'/>
        <h1 className='font-bold text-2xl text-center my-6 md:my-16'>ᲚᲔᲞᲢᲝᲞᲘᲡ ᲘᲜᲤᲝ</h1>
        <div className='grid md:grid-cols-2 items-center'>
            <img 
                src={`${process.env.REACT_APP_REDBERRY_IMAGE_BASE_URL}${laptop?.image}`} 
                className='md:w-4/5' 
                alt='computer-pic' 
            />
            <div className='grid grid-cols-2 gap-1 md:gap-4 mt-6 md:mt-0'>
                <p className='text-md font-bold'>სახელი:</p>
                <p>{user?.name} {user?.surname}</p>
                <p className='text-md font-bold'>თიმი:</p>
                <p>დიზაინერები</p>
                <p className='text-md font-bold'>პოზიცია:</p>
                <p>ილუსტრატორი</p>
                <p className='text-md font-bold'>მეილი:</p>
                <p>{user?.email}</p>
                <p className='text-md font-bold'>ტელ. ნომერი:</p>
                <p>{user?.phone_number}</p>
            </div>
        </div>
        <div className='grid md:grid-cols-2 items-start my-6 md:my-16 border-t border-gray-300 pt-6 md:pt-16'>
            <div className='grid grid-cols-2 gap-1 md:gap-4'>
                <p className='text-md font-bold'>ლეპტოპის სახელი:</p>
                <p>{laptop?.name}</p>
                <p className='text-md font-bold'>ლეპტოპის ბრენდი:</p>
                <p >ილუსტრატორი</p>
                <p className='text-md font-bold'>RAM:</p>
                <p>ako@redberry.com</p>
                <p className='text-md font-bold'>მეხსიერების ტიპი:</p>
                <p>+995 599 99 99 99</p>
            </div>
            <div className='grid grid-cols-2 gap-1 md:gap-4'>
                <p className='text-md font-bold'>CPU:</p>
                <p>დიზაინერები</p>
                <p className='text-md font-bold'>CPU-ს ბირთვი:</p>
                <p >ილუსტრატორი</p>
                <p className='text-md font-bold'>CPU-ს ნაკადი:</p>
                <p>ako@redberry.com</p>
            </div>
        </div>
        <div className='grid md:grid-cols-2 items-start border-t my-6 md:my-16 border-gray-300 pt-6 md:pt-16'>
            <div className='grid grid-cols-2 gap-1 md:gap-4'>
                <p className='text-md font-bold'>ლეპტოპის მდგომარეობა:</p>
                <p>დიზაინერები</p>
                <p className='text-md font-bold'>ლეპტოპის ფასი:</p>
                <p >1500 ₾</p>
            </div>
            <div className='grid grid-cols-2 '>
                <p className='text-md font-bold'>შევსების რიცხვი:</p>
                <p>12 / 03 / 2022</p>
            </div>
        </div>
    </div>
  )
}

export default InfoPage