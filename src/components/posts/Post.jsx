import React from 'react'
import Events from '../home/Events/Events'
import Create from '../home/Create/Create'
import Sidebar from '../home/Sidebar/Sidebar'

const Post = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center pt-20'>
      <div className="flex w-[90vw] h-[85vh] p-2">
        
        <Create  />
        <Events/>
      </div>
    </div>
  )
}

export default Post