import React from 'react'
import Image from 'next/image'

function SmallCard({img, location, distance}) {
  return (
    <div className='flex space-x-4 m-2 mt-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 ease-out transition transform duration-2 00'>
      <div className='relative w-16 h-16'>
        <Image 
        src={img}
        layout="fill"
        className='rounded-lg'
        />
      </div>
      <div>
          <h3>{location}</h3>
          <h3 className='text-gray-500'>{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard