import React from 'react';
import { useField } from 'formik';

function FormDropdown(props) {
  const [ field, meta ] = useField(props);
  const { label, options, name, useNameAsValue = false, setTeamID } = props;
  let dropdownStyle = (meta.touched && meta.error && field.value === '') ? 'border-2 border-red-500' : 'border-2 border-[#F7F7F7]';

  return (
    <div>
        <select name={name} {...field} 
          className={"bg-[#F7F7F7] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-9 focus:outline-0 focus:border-[#F7F7F7] " + dropdownStyle}
          handleChange={(event) => {name === 'team_id' &&  setTeamID(event.target.value)}} 
        >
            <option value="" className='my-2'>{label}</option>
            {
              options.map((item) => (
                <option 
                  value={useNameAsValue ? item.name : item.id } 
                  className='py-2' key={item.id}
                  
              >
                {item.name}
              </option>
              ))
            }
        </select>
    </div>
  )
}

export default FormDropdown;