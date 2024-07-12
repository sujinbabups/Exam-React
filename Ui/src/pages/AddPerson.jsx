import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddPerson = () => {
    const [roomno, setRoomno] = useState('');
    const [indate, setInDate] = useState('');
    const [outdate, setOutdate] = useState('');
    const [pname, setPname] = useState('');
    const navigate = useNavigate();

    const addRoom = async (newPerson) => {
        const res = await fetch('/api/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPerson),
        });
        return res;
    };

    const submitForm = async (e) => {
        e.preventDefault();
        const newPerson = { roomno, indate, outdate, pname };
        const res = await addRoom(newPerson);
        if (res.ok) {
        
            toast.success('Added New Booking');
            navigate('/home');
        } else {
            toast.error('Room already booked');
        }
    };

  return (
   <>
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto mt-[10%]">
            <h2 className="text-2xl font-bold mb-6">New Booking</h2>
            <form onSubmit={submitForm}>
                <div className="mb-4">
                    <label htmlFor="roomno" className="block text-gray-700 text-sm font-bold mb-2">Room No :</label>
                    <input type="text" id="roomno" name="roomno" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required value={roomno} onChange={(e) => setRoomno(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name :</label>
                    <input type="text" id="name" name="recipeName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required value={pname} onChange={(e) => setPname(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="indate" className="block text-gray-700 text-sm font-bold mb-2">In Date</label>
                    <input type="date" id="indate" name="indate" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required value={indate} onChange={(e) => setInDate(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="outdate" className="block text-gray-700 text-sm font-bold mb-2">Out Date</label>
                    <input type="date" id="outdate" name="outdate" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required value={outdate} onChange={(e) => setOutdate(e.target.value)} />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </div>
            </form>
        </div>
   
   </>
  )
}

export default AddPerson
