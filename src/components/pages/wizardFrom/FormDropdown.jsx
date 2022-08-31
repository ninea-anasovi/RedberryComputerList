import React from 'react'
import { useField } from 'formik'

function FormDropdown({ label, options, ...props }) {
  const [field, meta] = useField(props);
  let dropdownStyle = meta.touched && meta.error ? 'border-2 border-red-500' : '';

  return (
    <div>
        <select {...props} {...field} {...meta} className={"bg-[#F7F7F7] border-2 border-[#F7F7F7] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-9 focus:outline-0 focus:border-[#F7F7F7] " + dropdownStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          <option value="" className='my-2'>{label}</option>
          {
            options.map((item) => (
              <option value={item.id}  key={item.id} >{item.name}</option>
            ))
          }
        </select>
    </div>
  )
}

export default FormDropdown;