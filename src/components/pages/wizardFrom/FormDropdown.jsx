import React from 'react'
import { useField } from 'formik'

function FormDropdown({ label, options, ...props }) {
  const [field, meta] = useField(props);
  let dropdownStyle = meta.touched && meta.error ? 'border-2 border-red-500' : '';

  return (
    <div>
        <select {...props} {...field} {...meta} className={"bg-[#F7F7F7] border-2 border-[#F7F7F7] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-9 focus:outline-0 focus:border-[#F7F7F7]" + dropdownStyle}>
            <option value="" className='my-2'>{label}</option>
            {
              options.map((item) => (
                <option value={item.id}  key={item.id} className='py-2'>{item.name}</option>
              ))
            }
        </select>
    </div>
  )
}

export default FormDropdown;