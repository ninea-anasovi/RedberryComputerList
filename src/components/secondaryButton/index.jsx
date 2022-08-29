import React from 'react'

function SecondaryButton(props) {
    const {type, text, handler} = props
  return (
    <button type={type} className='text-blue-500 py-2 text-center rounded-md mt-8 block'>
        {text}
    </button>
  )
}

export default SecondaryButton