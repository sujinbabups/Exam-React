import React from 'react'

const BookingCard = ({book}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* <img
        src={foodpic} alt="Recipe Image" className="rounded w-full h-32 object-cover mb-4"/> */}
        <h1 className='text-xl font-semibold'>Room No:{book.roomno}</h1>
      {/* <h2 className="text-xl font-semibold">{book.roomno}</h2> */}
      <h1 className='text-xl font-semibold'>Name :{book.pname}</h1>
      {/* <h3 className="text-xl font-semibold">{book.pname}</h3> */}
      <p className='text-xl font-semibold'>In date :{book.indate}</p>
      {/* <p className="text-gray-600">{book.indate}</p> */}
      <p className='text-xl font-semibold'>Out date:{book.outdate}</p>
      {/* <p className="text-gray-600">{book.outdate}</p> */}
      
    </div>
  )
}

export default BookingCard
