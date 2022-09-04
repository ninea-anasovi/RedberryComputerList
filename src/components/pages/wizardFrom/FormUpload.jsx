import React from 'react';
import { useField, Field, useFormik } from 'formik';
import { useState } from 'react';



function FormUpload({setSelectedFile}) {

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  // const [field, meta] = useField(props);
  // let inputStyles = meta.touched && meta.error ? 'border-red-500' : ''

  return (
      <label className={'block relative text-center py-32 bg-[#F6F6F6] border-2 border-dashed border-blue-500 rounded-md'}>
          <p>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
          <input type='file' id='image' name='image' className='hidden' onChange={handleFileSelect}/>
          <div className='bg-blue-400 hover:bg-blue-500 text-white py-3 px-12 w-1/5 text-center rounded-md mt-12 ml-auto mr-auto'>ატვირთე</div>
      </label>
      
  )
}

export default FormUpload


