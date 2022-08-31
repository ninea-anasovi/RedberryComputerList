import { useField } from 'formik';
import React from 'react';

const fileCatcher = (event) => {
  let type=event.target.file[0].type;
  if (type==='image/jpeg' || type==='image/png') {
    
  }
}

function FormUpload({...props}) {
  const [field, meta] = useField(props);
   let inputStyles = meta.touched && meta.error ? 'border-red-500' : ''
   console.log(field)

  return (
      <label className={'block relative text-center py-32 bg-[#F6F6F6] border-2 border-dashed border-blue-500 rounded-md'+ inputStyles}>
          <p>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
          <input type='file' name='image' className='hidden'/>
          <div className='bg-blue-400 hover:bg-blue-500 text-white py-3 px-12 w-1/5 text-center rounded-md mt-12 ml-auto mr-auto'>ატვირთე</div>
      </label>
      
  )
}

export default FormUpload


