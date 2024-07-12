import React, { useEffect, useState } from 'react'
import BookingCard from '../components/BookingCard';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {



    const [booking, setBooking] = useState([]);
    const [room,setRoom]=useState([]);
    const navigate=useNavigate();
    
    useEffect(() => {
      fetch('/api/booking')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched booking:', data);  // Add this line to log fetched data
        setBooking(data);
      })
      .catch(error => console.error('Error fetching booking:', error));
    }, []);



  return (
 <>
  <main className="flex-grow p-4">
   
      <div className="max-w-3xl mx-auto mb-8">
        <form action="/search" method="GET" className="w-full max-w-md flex">
          <input
            type="date"
            name="query"
            placeholder="Select date..."
            className="flex-grow rounded-l px-4 py-2 border border-gray-300"  value={room} onChange={(e)=>setRoom(e.target.value)}
          />
          <button type="submit" className="bg-orange-500 text-white rounded-r px-4 py-2" onClick={()=>setRoom(navigate(`/booking/${room}`))}>Search</button>
        </form>
      </div>

   
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Today's Bookings </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {booking.map(book => (
            <BookingCard key={book._id} book={book} />
          ))}
        </div>
      </section>
    </main>
 
 </>
  )
}

export default Homepage
