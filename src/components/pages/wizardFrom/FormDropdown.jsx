import React from 'react'
import { Field } from 'formik'

function FormDropdown(props) {
    const { label, name, options } = props;

  return (
    <div>
        <Field as="select" className="bg-[#F7F7F7] border-2 border-[#F7F7F7] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-9">
            <option value="" className='my-2'>თიმი</option>
            <option value="saab" className='py-2'>Saab</option>
            <option value="vw" className='py-2'>VW</option>
            <option value="audi" className='py-2'>Audi</option>
        </Field>
    </div>
  )
}

export default FormDropdown;