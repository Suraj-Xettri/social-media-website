import React, { useState } from 'react'
import CreatePost from './CreatePost'
const Top = () => {
  const[create, setCreate] = useState(false)

  const handleCreate = () =>{
    setCreate((p)=>!p)
  }
  return (
    <div className='relative flex flex-col gap-2 rounded-2xl h-[165px] ml-2 p-3 border border-zinc-700'>
        <h2 className='text-2xl text-white font-bold tracking-tighter'>Create Post</h2>
        <p className='text-zinc-300 text-sm tracking-tighter'>Share Your thoughts news to the others anime lovers and let them know your opinion.</p>
        <button onClick={handleCreate} className='font-semibold text-white rounded-2xl px-3 py-2 bg-blue-700 w-28 '>Create Post</button>



        
    </div>
  )
}

export default Top