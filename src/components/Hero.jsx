import React from 'react';
import hotel_2 from '../assets/hotel_3.jpg';

function Hero() {

    const cities = ['Istanbul', 'New York', 'Oslo', 'London', 'Beirut'];
    return (
        <div className=" relative flex flex-col items-center justify-center p-10 text-white bg-no-repeat bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${hotel_2})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 text-center">

                <div className='text-center mb-6'>

                    <h2 className="text-[#e89755] text-4xl mb-1 mt-20 font-bold">
                        Find Your Perfect Stay, Anywhere</h2>
                    <p className="text-2xl mt-3">Discover top-rated hotels and
                        exclusive deals around the world.Book with ease and start
                        your journey today!.</p>
                    <button className="mt-5 mb-2 mr-5 ">Book Now</button>
                </div>

                {/* Booking Form */}
                <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-xl mx-auto">
                    <h3 className="text-xl font-semibold mb-6 text-left">
                        Book Your Stay
                    </h3>

                    <form className="space-y-4">
                        {/* Destination */}
                        <div>
                            <label
                                htmlFor="destination"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Destination
                            </label>

                            <input
                                list="destination-list"
                                type="text"
                                name="destination"
                                id="destination"
                                placeholder="Enter city or hotel name"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <datalist id="destination-list">
                                {cities?.map((city, index) => (
                                    <option key={index} value={city} />
                                ))}
                            </datalist>
                        </div>


                        {/* Check-in and Check-out */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="checkin"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Check-in
                                </label>
                                <input
                                    type="date"
                                    id="checkin"
                                    name="checkin"
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="checkout"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Check-out
                                </label>
                                <input
                                    type="date"
                                    id="checkout"
                                    name="checkout"
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Guests and Rooms */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="guests"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Guests
                                </label>
                                <input
                                    type="number"
                                    id="guests"
                                    name="guests"
                                    min="1"
                                    max="10"
                                    defaultValue="1"
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="rooms"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Rooms
                                </label>
                                <input
                                    type="number"
                                    id="rooms"
                                    name="rooms"
                                    min="1"
                                    max="5"
                                    defaultValue="1"
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Search Button */}
                        <button
                            type="submit"

                        >
                            Search Hotels
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Hero;
