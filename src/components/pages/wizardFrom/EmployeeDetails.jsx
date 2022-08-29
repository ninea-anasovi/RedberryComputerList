import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import FormDropdown from './FormDropdown'
import FormInput from './FormInput'


function EmployeeDetails() {
    var teams = []
    var positions = []
    useEffect(()=>{
        axios.get('/teams').then(response => {
            teams = response.data
            console.log(teams)
        }).catch(error => console.log(error))
        axios.get('/positions').then(response => {
            positions = response.data
        }).catch(error => console.log(error))
    },[])

    return (
        <div>
            <div className='grid md:grid-cols-2 md:gap-6'>
            <FormInput fieldName={'name'} label={'სახელი'} placeholder={'გივი'} text={'მინიმუმ 2 სიმბოლო, ქართული ასოებით'}/>
            <FormInput fieldName={'surname'} label={'გვარი'} placeholder={'ბაგრატიონი'}  text={'მინიმუმ 2 სიმბოლო, ქართული ასოებით'}/>
            </div>                
            <FormDropdown fieldName={'team_id'} options={teams} label='თიმი' />
            <FormDropdown fieldName={'position_id'} options={positions} label='პოზიცია'/>
            <FormInput fieldName={'email'} label={'მეილი'} placeholder={'მეილი'} text={'უნდა მთავრდებოდეს @redberry.ge-ით'}/>
            <FormInput  fieldName={'phone_number'} label={'ტელეფონის ნომერი'} placeholder={'+995'} text={'უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს'}/>
        </div>
  )
}

export default EmployeeDetails