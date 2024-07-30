import React from 'react'
import Top from './Top'
import Button from './Button'

const Events = () => {
  return (
    <div className='flex-1 overflow-y-scroll overflow-x-hidden changes  flex-col hidden md:flex'>
      <Top/>
      <Button/>
    </div>
  )
}

export default Events