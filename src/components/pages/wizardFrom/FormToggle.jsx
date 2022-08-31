import React from 'react'
import { useField } from 'formik'

function FormToggle({ label, values, names, ...props }) {
    const [field, meta] = useField(props);
    let inputStyles = meta.touched && meta.error ? 'text-red-500' : 'text-black'

  return (
            <div>
                <label className={"block mb-2 text-sm font-medium mt-8 " + inputStyles}>{label}</label>
                <div  role="group" aria-labelledby="radio-group">
                    <input {...props} {...field} {...meta} type="radio" name="picked" value={values[0]} className='w-4 h-4 border border-blue-600 text-blue-600'/>
                    <label className='text-sm font-medium ml-4 mr-8'>
                    {names[0]}
                    </label>
                    <input {...props} {...field} {...meta} type="radio" name="picked" value={values[1]} className='w-4 h-4 border border-blue-600 text-blue-600'/>
                    <label className='ml-4 text-sm font-medium'>
                        {names[1]}
                    </label>
                </div>
            </div>
  )
}

export default FormToggle