import React from 'react'
import Booking from './Booking/Booking'

function HeroSection() {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='bg-blue-50'>
                <Booking/>
            </div>
            <div className='col-span-2 bg-red-100'>
                Map
            </div>
        </div>
    </div>
  )
}

export default HeroSection