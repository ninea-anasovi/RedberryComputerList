import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import FormDropdown from './FormDropdown'
import FormInput from './FormInput'
import FormToggle from './FormToggle'
import FormUpload from './FormUpload'

function ComputerDetails() {
    let laptopBrandId = []
    let LaptopCPU = []
    useEffect(()=>{
        axios.get('/teams').then(response => {
            laptopBrandId = response.data
            console.log(laptopBrandId)
        }).catch(error => console.log(error))
        axios.get('/positions').then(response => {
            LaptopCPU = response.data
        }).catch(error => console.log(error))
    },[])
    
    return (
        <div>
            <FormUpload/>
            <div className='grid md:grid-cols-2 md:gap-6 items-center'>
            <FormInput fieldName={'laptop_name'} label={'ლეპტოპის სახელი'} placeholder={'HP'} text={'ლათინური ასოები, ციფრები, !@#$%^&*()_+= '}/>
            <FormDropdown fieldName={'laptop_brand_id'} label={'ლეპტოპის ბრენდი'} options={laptopBrandId}/>
            </div>  
            <div className='grid md:grid-cols-3 md:gap-6 items-center border-t border-gray-300 mt-8'>
            <FormDropdown fieldName={'laptop_cpu'} label={'CPU'} options={LaptopCPU}/>
            <FormInput fieldName={'laptop_cpu_cores'} label={'CPU-ს ბირთვი'} placeholder={'14'} text={'მხოლოდ ციფრები'}/>
            <FormInput fieldName={'laptop_cpu_threads'} label={'CPU-ს ნაკადი'} placeholder={'365'} text={'მხოლოდ ციფრები'}/>
            </div>
            <div className='grid md:grid-cols-2 md:gap-6'>
            <FormInput fieldName={'laptop_ram'} label={'ლეპტოპის RAM (GB)'} placeholder={'გივი'} text={'მხოლოდ ციფრები'}/>
            <FormToggle fieldName={'laptop_hard_drive_type'} label={'მეხსიერების ტიპი'} value1={'HDD'} value2={'SSD'}/>
            </div>  
            <div className='grid md:grid-cols-2 md:gap-6 border-t border-gray-300 mt-8'>
            <FormInput fieldName={'laptop_purchase_date'} label={'შეძენის რიცხვი (არჩევითი)'} placeholder={'დდ/თთ/წწწწ'} text={''}/>
            <FormInput fieldName={'laptop_price'} label={'ლეპტოპის ფასი'} placeholder={'0000'}  text={'მხოლოდ ციფრები'}/>
            </div> 

            <div>
                <FormToggle fieldName={'laptop_state'} label={'ლეპტოპის მდგომარეობა'}  value1={'ახალი'} value2={'მეორადი'}/>
            </div> 
        </div>
  )
}

export default ComputerDetails