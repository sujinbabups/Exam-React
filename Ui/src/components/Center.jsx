import React from 'react'
import hotel from '../assets/hotel2.jpg'

const Center = () => {
  return (
   <>
    <div className="bg-gray-100 flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col justify-center items-center">
            <img src={hotel} width="400" height="400"/>
            <h2 className="text-3xl font-bold mb-4">A Hotel Booking Website</h2>
            <p className="text-xl mb-8">Book new hotels with us</p>
            <form action="/search" method="GET" className="w-full max-w-md flex">
            {/* <!-- <form action="/" className="w-full max-w-md flex"> --> */}
                
            </form>
        </div>
    </div>

   
   </>
  )
}

export default Center
