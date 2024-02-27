import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[15%] px-24 absolute bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-6xl font-bold text-white'>{title}</h1>
      <p className='py-6 text-lg w-1/3 text-white'>{overview}</p>
      <div>
        <button className='bg-white text-xl text-black rounded-md  p-4 px-12 hover:opacity-80'>▶️ Play</button>
        <button className='bg-gray-500  text-xl text-white rounded-md opacity-70 p-4 px-12 mx-2'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle