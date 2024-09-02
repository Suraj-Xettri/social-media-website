import React from 'react'
import Create from './Create/Create'

const Post = () => {

  


  return (
    <div className='h-screen bg-[#201F31] w-screen flex justify-center items-center pt-[50px]'>
      <div className="flex lg:w-[40vw] h-[85vh] md:w-[70vw] sm:w-[80vw] w-[95vw] ">
        <Create/>
      </div>
    </div>
  )
}

export default Post