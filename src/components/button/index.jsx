import React from 'react'

function Button(props) {
    const {text, type} = props;
  return (
    <button className='bg-blue-400 hover:bg-blue-500 text-white py-3 px-12 text-center rounded-md mt-12' type={type}>
            {text}
    </button>
  )
}

export default Button