import React from 'react'
import {Formik, Form, Field} from 'formik'

function FormInput(props) {
  const {fieldName, label, placeholder, text} = props
  return (
    <div>
      <label htmlFor={fieldName} className="block mb-2 text-sm font-medium mt-8">{label}</label>
      <Field name={fieldName} label={label} className=" border-2 border-blue-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-2" placeholder={placeholder}></Field>
      <p className='text-xs mt-2 text-gray-500'>{text}</p>
    </div>
  )
}

export default FormInput