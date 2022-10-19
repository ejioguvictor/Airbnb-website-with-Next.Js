import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h4 className="font-bold">ABOUT</h4>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
      <h4 className="font-bold">COMMUNITY</h4>
      <p>Accessibility</p>
      <p>This is not a real site.</p>
      <p>It's a pretty awesome clone.</p>
      <p>Referrals Accepted</p>
      <p>Done with Next.Js</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
      <h4 className="font-bold">SUPPORT</h4>
      <p>Help Center</p>
      <p>Trust & Safety</p>
      <p>Privacy</p>
      <p>24hrs Service</p>
      <p>Online Booking</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
      <h4 className="font-bold">CONTACT US</h4>
      <p className='text-blue-800'>vc.ejiogu@gmail.com</p>
      <p className='text-blue-800'>+2347037206054</p>
      <p className='text-blue-800'>+2349067534328</p>
      <p></p>
      </div>
    </div>
  )
}

export default Footer