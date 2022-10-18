import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] '>
      <h1>
        <Image 
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        />
      </h1>
      <div className='absolute  top-1/2 text-center w-full'>
        <p className='text-sm sm:text-lg'>Not sure of where to go? Perfect!</p>
        <button className='text-purple-500 px-10 py-4 shadow-md bg-white rounded-full font-bold my-3'>
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner;