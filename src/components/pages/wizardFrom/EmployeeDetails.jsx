import React from 'react'
import FormDropdown from './FormDropdown'
import FormInput from './FormInput'


function EmployeeDetails() {
    return (
        <div>
            <div className='grid md:grid-cols-2 md:gap-6'>
            <FormInput fieldName={'firstName'} label={'სახელი'} placeholder={'გივი'} text={'მინიმუმ 2 სიმბოლო, ქართული ასოებით'}/>
            <FormInput fieldName={'lastName'} label={'გვარი'} placeholder={'ბაგრატიონი'}  text={'მინიმუმ 2 სიმბოლო, ქართული ასოებით'}/>
            </div>                
            <FormDropdown/>
            <FormDropdown/>
            <FormInput fieldName={'mail'} label={'მეილი'} placeholder={'მეილი'} text={'უნდა მთავრდებოდეს @redberry.ge-ით'}/>
            <FormInput  fieldName={'telephoneNumber'} label={'ტელეფონის ნომერი'} placeholder={'+995'} text={'უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს'}/>
        </div>
  )
}

export default EmployeeDetails