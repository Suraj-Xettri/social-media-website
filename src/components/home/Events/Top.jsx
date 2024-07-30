import React from 'react'

const Top = () => {
  return (
    <div className='flex flex-col gap-2 rounded-2xl h-[165px] ml-2 p-3 border border-zinc-700'>
        <h2 className='text-3xl text-white fonr-bold tracking-tighter'>Subscribe to Premium</h2>
        <p className='text-zinc-300 tracking-tighter'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button className='font-semibold text-white rounded-2xl px-3 py-2 bg-blue-500 w-28 '>Subscribe</button>
    </div>
  )
}

export default Top