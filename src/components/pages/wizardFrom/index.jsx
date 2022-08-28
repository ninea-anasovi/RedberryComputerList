import React, { Children } from 'react'
import {Formik, Form, FormikConfig, FormikValues} from 'formik'
import FormInput from './FormInput'
import FormDropdown from './FormDropdown'
import FormToggle from './FormToggle'
import { useState } from 'react'
import icon from '../../../assets/images/icon.svg'

function WizardForm() {
  return (
    <div className='bg-[#F7F7F7] py-8 h-full '>
      <div className='rounded-lg bg-white md:mx-40 md:px-32 py-8'>
        <FormikStepper
        onSubmit={() => {}}>
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
              <div>
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
        </FormikStepper>
      </div>
      <img src={icon} alt='Redberry Icon' className='ml-auto mr-auto mt-8 w-16'/>
    </div>
  )
}

export function FormikStepper ({ children, ...props }) {
  const choldrenArray = Children.toArray(children);
  const [step, setStep] = useState(0)
  const currentChild = choldrenArray[step];
  return <Formik {...props}>
      <Form autoComplete='off'>
        {currentChild}
        <div className='justify-between'>
        {step==1 && <button type="button" className='text-blue-500 py-2 text-center rounded-md mt-8' onClick={()=> setStep(step-1)}>უკან</button>}
          <button type="button" className='bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 w-1/4 text-center rounded-md mt-8' onClick={()=> setStep(step+1)}>
            {step==0 ? 'შემდეგი' : 'დამახსოვრება'}
          </button>
        </div>
      </Form> 
      
  </Formik>
}

export default WizardForm