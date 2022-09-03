import React from 'react'
import { useField } from 'formik'


function FormInput({label, text, ...props}) {
  const [field, meta] = useField(props);
  let inputStyles = meta.touched && meta.error ? "border-2 border-red-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-2 focus:outline-0" : " border-2 border-blue-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-2 focus:outline-0";
  let message = meta.touched && meta.error ? meta.error : text;
  let messageStyle = meta.touched && meta.error ? 'text-xs mt-2 text-red-500' : 'text-xs mt-2 text-gray-500';

  return (
    <div>
        <>
          <label className="block mb-2 text-sm font-medium mt-8">{label}</label>
          <input {...props} {...field} className={inputStyles} />
          <p className={messageStyle}>{message}</p>
        </>
    </div>
  )
}

export default FormInput