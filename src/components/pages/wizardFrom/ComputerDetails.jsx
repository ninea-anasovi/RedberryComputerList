import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import FormDropdown from './FormDropdown'
import FormInput from './FormInput'
import FormToggle from './FormToggle'
import FormUpload from './FormUpload'

function ComputerDetails() {
    const [ laptopBrandId, setLaptopBrandID ] = useState([])
    const [laptopCPU, setLaptopCPU] = useState([])
    useEffect(()=>{
        axios.get('/brands').then(response => {
            setLaptopBrandID(response.data.data)
        }).catch(error => console.log(error))
        
        axios.get('/cpus').then(response => {
            setLaptopCPU(response.data.data)
        }).catch(error => console.log(error))
    }, [] )

    return (
        <div>
            <FormUpload/>
            <div className='grid md:grid-cols-2 md:gap-6 items-center'>
            <FormInput name={'laptop_name'} type={'text'} label={'ლეპტოპის სახელი'} placeholder={'HP'} text={'ლათინური ასოები, ციფრები, !@#$%^&*()_+= '}/>
            <FormDropdown name={'laptop_brand_id'} label={'ლეპტოპის ბრენდი'} options={laptopBrandId}/>
            </div>  
            <div className='grid md:grid-cols-3 md:gap-6 items-center border-t border-gray-300 mt-8'>
            <FormDropdown name={'laptop_cpu'} label={'CPU'} options={laptopCPU}/>
            <FormInput name={'laptop_cpu_cores'} label={'CPU-ს ბირთვი'} placeholder={'14'} text={'მხოლოდ ციფრები'}/>
            <FormInput name={'laptop_cpu_threads'} label={'CPU-ს ნაკადი'} placeholder={'365'} text={'მხოლოდ ციფრები'}/>
            </div>
            <div className='grid md:grid-cols-2 md:gap-6'>
            <FormInput name={'laptop_ram'} label={'ლეპტოპის RAM (GB)'} placeholder={'0'} text={'მხოლოდ ციფრები'}/>
            <FormToggle name={'laptop_hard_drive_type'} label={'მეხსიერების ტიპი'} values={['HDD', 'SSD']} names={['HDD', 'SSD']}/>
            </div>  
            <div className='grid md:grid-cols-2 md:gap-6 border-t border-gray-300 mt-8'>
            <FormInput name={'laptop_purchase_date'} label={'შეძენის რიცხვი (არჩევითი)'} placeholder={'დდ/თთ/წწწწ'} text={''}/>
            <FormInput name={'laptop_price'} label={'ლეპტოპის ფასი'} placeholder={'0000'}  text={'მხოლოდ ციფრები'}/>
            </div> 

            <div>
                <FormToggle name={'laptop_state'} label={'ლეპტოპის მდგომარეობა'}  values={['new', 'used']} names={['ახალი', 'მეორადი']}/>
            </div> 
        </div>
  )
}

export default ComputerDetails