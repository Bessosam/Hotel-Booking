import React from 'react'
import { FaBookOpen, FaDollarSign } from 'react-icons/fa'

function dashboard() {
    const dashInfo =
    {
        totalBooking: "7",
        totalRevenue: "$1500",
    }

    return (
        <div className='mt-4 p-4'>
            <h1 className='text-2xl font-bold mb-2'>Hotel Booking Dashboard</h1>
            <p className='text-gray-600'>Manage hotel listings,add new bookings, and keep track of all your reserbations in one place</p>
            <div className='flex gap-4 my-8'>
                <div className='bg-amber-100 border border-amber-500 rounded p-5 flex
                gap-2 items-center '>
                    <FaBookOpen />
                    <div className='flex flex-col'>
                        <p className='font-bold text-center'>Total Booking </p>
                        <p className='font-bold text-center'> {dashInfo.totalBooking} Bookings</p>

                    </div>



                </div>


                <div className='bg-amber-100 border border-amber-500 rounded p-5 flex
                gap-2 items-center '>

                    <FaDollarSign />
                    <div className='flex flex-col'>
                        <p className='font-bold text-center'>Total Booking </p>
                        <p className='font-bold text-center'> {dashInfo.totalRevenue}</p>

                    </div>



                </div>
                <div>



                </div>

            </div>

        </div>
    )
}

export default dashboard
