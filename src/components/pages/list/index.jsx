import React from 'react'
import { useEffect } from 'react'
import Card from './card'
import axios from 'axios'
import FixedButton from '../../fixedButton'


function List() {
  useEffect(() => {
    // axios.get('/laptops').then(response => console.log(response.data))
  },[])

  return (
    <div className=''>
      <FixedButton goLink='/'/>
      <h1 className='font-bold text-2xl text-center my-16'>ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</h1>
      <div className='grid md:grid-cols-2 gap-6 mx-4 lg:mx-48 md:mx-8 '>
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