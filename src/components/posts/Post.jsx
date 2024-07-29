import React from 'react'
import Events from '../home/Events/Events'
import Create from '../home/Create/Create'
import Sidebar from '../home/Sidebar/Sidebar'

const Post = () => {
  return (
    <div className='h-screen w-screen justify-center items-center pt-20'>
      <div className="flex w-[90vw]">
        <Events className="flex-1"/>
        <Create className="Flex-[2]" />
      </div>
    </div>
  )
}

export default Post