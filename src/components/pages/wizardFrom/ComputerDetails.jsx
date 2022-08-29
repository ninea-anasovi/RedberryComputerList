import React from 'react'
import FormDropdown from './FormDropdown'
import FormInput from './FormInput'
import FormToggle from './FormToggle'
import FormUpload from './FormUpload'

function ComputerDetails() {
    return (
        <div>
            <FormUpload/>
            <div className='grid md:grid-cols-2 md:gap-6 items-center'>
            <FormInput fieldName={'laptopName'} label={'ლეპტოპის სახელი'} placeholder={'HP'} text={'ლათინური ასოები, ციფრები, !@#$%^&*()_+= '}/>
            <FormDropdown/>
            </div>  
            <div className='grid md:grid-cols-3 md:gap-6 items-center border-t border-gray-300 mt-8'>
            <FormDropdown/>
            <FormInput fieldName={'CPUcore'} label={'CPU-ს ბირთვი'} placeholder={'14'} text={'მხოლოდ ციფრები'}/>
            <FormInput fieldName={'CPUthread'} label={'CPU-ს ნაკადი'} placeholder={'365'} text={'მხოლოდ ციფრები'}/>
            </div>
            <div className='grid md:grid-cols-2 md:gap-6'>
            <FormInput fieldName={'RAM'} label={'ლეპტოპის RAM (GB)'} placeholder={'გივი'} text={'მხოლოდ ციფრები'}/>
            <FormToggle label={'მეხსიერების ტიპი'} value1={'HDD'} value2={'SSD'}/>
            </div>  
            <div className='grid md:grid-cols-2 md:gap-6 border-t border-gray-300 mt-8'>
            <FormInput fieldName={'date'} label={'შეძენის რიცხვი (არჩევითი)'} placeholder={'დდ/თთ/წწწწ'} text={''}/>
            <FormInput fieldName={'price'} label={'ლეპტოპის ფასი'} placeholder={'0000'}  text={'მხოლოდ ციფრები'}/>
            </div> 

            <div>
            <FormToggle label={'ლეპტოპის მდგომარეობა'}  value1={'ახალი'} value2={'მეორადი'}/>
            </div> 
        </div>
  )
}

export default ComputerDetails