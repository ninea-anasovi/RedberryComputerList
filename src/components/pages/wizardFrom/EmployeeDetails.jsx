import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import FormDropdown from './FormDropdown'
import FormInput from './FormInput'


function EmployeeDetails() {
    const [teams, setTeams] = useState([])
    const [positions, setPositions] = useState([])

    useEffect(()=>{
        axios.get('/teams').then(response => {
            setTeams(response.data.data)
        }).catch(error => console.log(error))
        axios.get('/positions').then(response => {
            setPositions(response.data.data)
        }).catch(error => console.log(error))
    },[])

    return (
        <div>
            <div className='grid md:grid-cols-2 md:gap-6'>
                <FormInput name={'name'} type={'text'}label={'სახელი'} placeholder={'გივი'} text={'მინიმუმ 2 სიმბოლო, ქართული ასოებით'}/>
                <FormInput name={'surname'} type={'text'} label={'გვარი'} placeholder={'ბაგრატიონი'}  text={'მინიმუმ 2 სიმბოლო, ქართული ასოებით'}/>
            </div>                
            <FormDropdown name={'team_id'} options={teams} label='თიმი' />
            <FormDropdown name={'position_id'} options={positions} label='პოზიცია'/>
            <FormInput name={'email'} type={'email'} label={'მეილი'} placeholder={'მეილი'} text={'უნდა მთავრდებოდეს @redberry.ge-ით'}/>
            <FormInput  name={'phone_number'} type={'text'} label={'ტელეფონის ნომერი'} placeholder={'+995'} text={'უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს'}/>
        </div>
  )
}

export default EmployeeDetails