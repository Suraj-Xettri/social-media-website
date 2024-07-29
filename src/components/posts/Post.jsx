import React from 'react'
import Events from '../home/Events/Events'
import Create from '../home/Create/Create'

const Post = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center pt-[50px]'>
      <div className="flex w-[90vw] h-[85vh]">
        
        <Create/>
        <Events/>
      </div>
    </div>
  )
}

export default Post