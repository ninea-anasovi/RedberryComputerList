import React from 'react'
import Card from './card'


function List() {
  return (
    <div className=''>
        <h1 className='font-bold text-2xl text-center my-16'>ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</h1>
        <div className='md:grid md:grid-cols-2 md:gap-6 lg:mx-48 md:mx-8 sm:mx-4'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default List