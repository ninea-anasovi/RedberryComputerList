import React, { Children } from 'react'
import {Formik, Form } from 'formik'
import icon from '../../../assets/images/icon.svg'
import EmployeeDetails from './EmployeeDetails'
import ComputerDetails from './ComputerDetails'
import { useState } from 'react'
import * as Yup from "yup";
import { formValidation } from '../../../validations'
import FixedButton from '../../fixedButton'
import axios from 'axios'
import { useEffect } from 'react'


function WizardForm() {
  const [step, setStep] = useState(0)
  const initialvalues = Yup.object({
    name: '',
    surname: '',
    team_id: 0,
    position_id: 0,
    phone_number: '',
    image: '',
    email: '',
    laptop_name: '',
    laptop_image: '',
    laptop_brand_id: 0,
    laptop_cpu: '',
    laptop_cpu_cores: 0,
    laptop_cpu_threads: 0,
    laptop_ram: 0,
    laptop_hard_drive_type: '',
    laptop_state: '',
    laptop_price: 0 
  })

  return (
    <div className='bg-[#F7F7F7] py-8 h-full '>
      <FixedButton goLink='/'/>
      <div className='flex md:mx-40 my-8 place-content-center'>
        <h5 className='font-bold mx-4 place-content-center' onClick={()=>setStep(0)}>
          თანამშრომლის ინფო
          {step === 0 && <hr className='w-5/6 mx-4 text-black h-0.5 bg-black border-black mt-2' />}
        </h5>
        <h5 className='font-bold mx-4' onClick={()=>setStep(1)}>
          ლეპტოპის მახასიათებლები
          {step === 1 && <hr className='w-5/6 mx-4 text-black h-0.5 bg-black border-black mt-2' />}
        </h5>
      </div>
      <div className='rounded-lg bg-white md:mx-40  px-4 md:px-32 py-8'>
        <FormikStepper 
          initialValues = {initialvalues}
          validationSchema = {formValidation}
          onSubmit={(values, actions) => {
            console.log('aqvar')
            // console.log(values);
            // console.log(actions);
            
            axios.post('/laptop/create', values)
              .then(response => console.log(response))
              .catch(error => console.log(error))
            actions.setSubmitting(false);
          }}
          step={{step, setStep}}
        >
          <EmployeeDetails/>
          <ComputerDetails/>
        </FormikStepper>
      </div>
      <img src={icon} alt='Redberry Icon' className='ml-auto mr-auto mt-8 w-16'/>
    </div>
  )
}



export function FormikStepper ({ children, ...props }) {
  const {step, setStep} = props.step
  const childrenArray = Children.toArray(children);
  const currentChild = childrenArray[step];

  return (
    <Formik {...props}>
      <Form autoComplete='off'>
        {currentChild}
        <div className='text-right'>
          {
          step === 0 
          && 
            <button type="button" className='bg-blue-400 hover:bg-blue-500 text-white py-4 px-4 w-1/4 text-center rounded-md mt-8' onClick={() => setStep(step+1)}>
              შემდეგი
            </button>
          }
          {
            step === 1 
            &&
            <>
              <button type="button" className='text-blue-500 py-4 text-center rounded-md mt-8 float-left' onClick={()=> setStep(step-1)}>
                უკან
              </button>
              <button type="submit" className='bg-blue-400 hover:bg-blue-500 text-white py-4 px-4 w-1/4 text-center rounded-md mt-8'>
                დამახსოვრება
              </button>
            </> 
          }
        </div>
      </Form> 
    </Formik>
  )
}

export default WizardForm