import React from 'react'
import { Field } from 'formik'

function FormDropdown(props) {
    const { fieldName, label, name, options } = props;
  return (
    <div>
        <Field as="select" name={fieldName} className="bg-[#F7F7F7] border-2 border-[#F7F7F7] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-9">
            <option value="" className='my-2'>{label}</option>
            {options.map((item) => {
              console.log(item.name);
              <option value={item.id} className='py-2'>{item.name}</option>
            })}
        </Field>
    </div>
  )
}

export default FormDropdown;