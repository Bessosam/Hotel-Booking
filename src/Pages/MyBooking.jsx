import React from 'react'
import allrooms_2 from '../assets/Allrooms_2.jpg'
import allrooms_3 from '../assets/Allrooms_3.jpg'

function MyBooking() {
    const userBookingsData = [
        {
            _id: "b2g75d8398de5678efgh3456",
            user: "Bassam   ",
            image: allrooms_3,
            hotel: "UrbanStay Central",
            checkInDate: "2025-05-20",
            checkOutDate: "2025-05-25",
            tooalPrice: 1200,
            guests: 2,
            statuse: "Confirmed",
            paymentMethod: "paypal",
            isPaid: true,
            createdAt: "2025-04-20T14:00:00.000Z",
            updatedAt: "2025-04-22T10:30:00.000Z",
            __v: 0,
        },
        {
            _id: "c3h86e9409ef6789fghi4567",
            user: "Bassam",
            image: allrooms_2,
            hotel: "Garden Luxe Hotel",
            checkInDate: "2025-07-15",
            checkOutDate: "2025-07-20",
            tooalPrice: 800,
            guests: 3,
            statuse: "canselled",
            paymentMethod: "cash",
            isPaid: false,
            createdAt: "2025-06-20T14:00:00.000Z",
            updatedAt: "2025-06-22T10:30:00.000Z",
            __v: 0,
        }

    ]

    return (
        <div className='p-8 pt-60'>
            <h1 className='text-3xl font-bold mb-6 text-center'>My Bookings</h1>
            <div className='overflow-x-auto'>
                <table className='min-w-full bg-white shadow-md rounded-xl overflow-hidden'>
                    <thead className='bg-gray-100'>
                        <tr className='text-left text-gray-600 uppercase text-sm'>
                            <th className='py-3 px-4'>User</th>
                            <th className='py-3 px-4'>Image</th>
                            <th className='py-3 px-4'>Hotel</th>
                            <th className='py-3 px-4'>Guests</th>
                            <th className='py-3 px-4'>Check-In</th>
                            <th className='py-3 px-4'>Check-Out</th>
                            <th className='py-3 px-4'>Total Price</th>
                            <th className='py-3 px-4'>Status</th>
                            <th className='py-3 px-4'>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userBookingsData.map((booking) => (
                            <tr key={booking._id} className='border-t hover:bg-gray-50'>
                                <td className=" py-3 px-4 font-medium">{booking.user}</td>
                                <td className='py-3 px-4'><img src={booking.image} className='w-20 h-16 object-cover rounded' /></td>
                                <td className=" py-3 px-4 font-medium">{booking.hotel}</td>
                                <td className="py-3 px-4 font-medium">{booking.guests}</td>
                                <td className="py-3 px-4 font-medium">{booking.checkInDate}</td>
                                <td className="py-3 px-4 font-medium">{booking.checkOutDate}</td>
                                <td className="py-3 px-4 font-medium">${booking.tooalPrice}</td>
                                <td className='py-3 px-4 font-medium '><span className={`px-2 py-1 rounded text-s ${booking.statuse === "Confirmed" ? 'text-green-600' : ' text-red-600'
                                    }`}>{booking.statuse}</span></td>

                                <td className="py-3 px-4 font-medium"><span className={`text sm ${booking.isPaid ? "text-green-600" : "text-red-600"}`}>{booking.paymentMethod} {booking.isPaid ? "(paid)" : "(unpaid)"}</span></td>





                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyBooking;
