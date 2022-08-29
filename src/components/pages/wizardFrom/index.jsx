import React, { Children } from 'react'
import {Formik, Form, FormikConfig, FormikValues} from 'formik'
import { useState } from 'react'
import icon from '../../../assets/images/icon.svg'
import EmployeeDetails from './EmployeeDetails'
import ComputerDetails from './ComputerDetails'

function WizardForm() {
  return (
    <div className='bg-[#F7F7F7] py-8 h-full '>
      <div className='rounded-lg bg-white md:mx-40 md:px-32 py-8'>
        <FormikStepper
        onSubmit={() => {}}>
              <div>
                <EmployeeDetails/>
              </div>
              <div>
                <ComputerDetails/>
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
        <div className='text-right'>
        {step==1 && <button type="button" className='text-blue-500 py-2 text-center rounded-md mt-8 float-left' onClick={()=> setStep(step-1)}>უკან</button>}
          <button type="button" className='bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 w-1/4 text-center rounded-md mt-8' onClick={()=> setStep(step+1)}>
            {step==0 ? 'შემდეგი' : 'დამახსოვრება'}
          </button>
        </div>
      </Form> 
      
  </Formik>
}

export default WizardForm