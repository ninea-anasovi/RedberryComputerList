import {Formik, Form } from 'formik'
import icon from '../../../assets/images/icon.svg'
import EmployeeDetails from './EmployeeDetails'
import ComputerDetails from './ComputerDetails'
import { useState } from 'react'
import * as Yup from "yup";
import { formValidation } from '../../../validations'
import FixedButton from '../../fixedButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react'


function WizardForm() {
  const [ step, setStep ] = useState(0);
  const [ selectedFile, setSelectedFile ] = useState();
  let navigate = useNavigate();

  const handleFormSubmit = (values, actions) => {
    const body = new FormData();
    body.append('laptop_image', selectedFile)
    body.append('name', values.name)
    body.append('surname', values.surname)
    body.append('team_id', values.team_id)
    body.append('position_id', values.position_id)
    body.append('phone_number', values.phone_number)
    body.append('email', values.email)
    body.append('laptop_name', values.laptop_name)
    body.append('laptop_brand_id', values.laptop_brand_id)
    body.append('laptop_cpu', values.laptop_cpu)
    body.append('laptop_cpu_cores', values.laptop_cpu_cores)
    body.append('laptop_cpu_threads', values.laptop_cpu_threads)
    body.append('laptop_ram', values.laptop_ram)
    body.append('laptop_hard_drive_type', values.laptop_hard_drive_type)
    body.append('laptop_state', values.laptop_state)
    body.append('laptop_price', values.laptop_price)
    axios.post('/laptop/create', body)
      .then(response => navigate('/finished'))
      .catch(error => console.log(error))
    // actions.setSubmitting(false);
    // actions.resetForm()
    
  }

  const initialvalues = Yup.object({
    name: '',
    surname: '',
    team_id: 0,
    position_id: 0,
    phone_number: '',
    laptop_image: null,
    email: '',
    laptop_name: '',
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
        <Formik 
          initialValues = {initialvalues}
          validationSchema = {formValidation}
          onSubmit={(values, actions) => {
            handleFormSubmit(values, actions);
          }}
          step={{step, setStep}}
        >
          <Form>
            {step === 0 && <EmployeeDetails/>}
            {step === 1 && <ComputerDetails setSelectedFile={setSelectedFile}/>}
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
              {
                // step === 2 <Redirect/>
              }
            </div>
          </Form>
        </Formik>
      </div>
      <img src={icon} alt='Redberry Icon' className='ml-auto mr-auto mt-8 w-16'/>
    </div>
  )
}


export default WizardForm