import React, { useState } from "react";
import Allrooms_1 from "../assets/Allrooms_1.jpg";
import Allrooms_2 from "../assets/Allrooms_2.jpg";
import Allrooms_3 from "../assets/Allrooms_3.jpg";
import Allrooms_4 from "../assets/Allrooms_4.jpg";
import { useNavigate } from "react-router-dom";
import { FaLocationArrow, FaStar } from "react-icons/fa";

function AllHotels() {
  const roomsData = [
    {
      _id: "a1f64c7197bc1234abcd9012",
      hotel: "Seaside Grand Hotel",
      roomType: "King Suite",
      pricePerNight: 450,
      city: "New york",
      address: "17 West 32nd Street, New York, NY 10001 USA",
      amenities: ["Balcony", "Sea view", "High-speed Wifi"],
      images: Allrooms_1,
      rating: 4,
      isAvailable: true,
      createdAt: "2025-04-12T09:15:00.000Z",
      updatedAt: "2025-04-12T09:15:00.000Z",
      __v: 0,
    },
    {
      _id: "b2d74d8298cd2345bcde0123",
      hotel: "Mountain View Resort",
      roomType: "Deluxe Queen Room",
      pricePerNight: 328,
      city: "london",
      address: "9 Knaresborough Place, London, England, SW5 0TP United Kingdom",
      amenities: ["City view", "Mini bar", "Air conditioning"],
      images: Allrooms_2,
      rating: 5,
      isAvailable: true,
      createdAt: "2025-04-13T10:20:00.000Z",
      updatedAt: "2025-04-13T10:20:00.000Z",
      __v: 0,
    },
    {
      _id: "c3e85e9399de3456cdef1234",
      hotel: "Seaside Grand Hotel",
      roomType: "Family Suite",
      pricePerNight: 580,
      city: "Barcelona",
      address: "C Provença 277, Eixample, Barcelona, Spain",
      amenities: [
        "Two bedrooms",
        "Kitchenette",
        "Mountain view",
        "High-speed Wifi",
      ],
      rating: 4.2,
      images: Allrooms_3,
      isAvailable: false,
      createdAt: "2025-04-14T11:30:00.000Z",
      updatedAt: "2025-04-14T11:30:00.000Z",
      __v: 0,
    },
    {
      _id: "d4f96f04aaff4567defg2345",
      hotel: "Seaside Grand Hotel",
      roomType: "Standard Twin Room",
      pricePerNight: 270,
      city: "Santorini",
      address: "Fira, Santorini 84700, Greece",
      amenities: ["Garden view", "Complimentary breakfast", "TV"],
      images: Allrooms_4,
      rating: 4.8,
      isAvailable: true,
      createdAt: "2025-04-15T12:45:00.000Z",
      updatedAt: "2025-04-15T12:45:00.000Z",
      __v: 0,
    },
  ];
  const CheckBox = ({ label, selected = false, onChanged = () => { } }) => {
    return (
      <label className="flex gap-3 items-center cursor-pointer text-sm mt-2">
        <input type="checkbox" checked={selected} onChanged={(e) => { e.target.checked, label }} />
        <span className="font-light select-none">{label}</span>
      </label>
    )
  }

  const RadioButton = ({ label, selected = false, onChanged = () => { } }) => {
    return (
      <label className="flex gap-3 items-center cursor-pointer text-sm mt-2">
        <input type="radio" name="sortOptions" checked={selected} onChanged={() => { label }} />
        <span className="font-light select-none">{label}</span>
      </label>
    )
  }


  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);
  const roomFilter = [

    "Single Room",
    "Double Room",
    "Swimming Pool",
    "Family Suite"
  ]

  const priceFilter = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000"]

  const sortOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Newest"

  ]
  return (
    <div className="px-40 flex flex-col-reverse lg:flex-row  justify-between pt-60 items-start">
      <div>
        <div className="flex flex-col items-center text-left px-40">
          <h1 className="text-[#e89755] text-4xl md:text-2xl ">Hotel Rooms</h1>
          <p className="text-gray-500 md:text-base text-sm max-w-170 mt-2 text-center">
            Discover comfortable and stylish rooms tailored to every traveler’s
            needs — from cozy singles to luxurious suites.
          </p>
        </div>

        <div>
          {roomsData.map((roomData) => (
            <div
              key={roomData._id}
              className="flex flex-col md:flex-row items-start py-10 gap-6 border-gray-300 border-b"
            >
              <img
                onClick={() => navigate(`/rooms/${roomData._id}`)}
                src={roomData.images}
                className="max-h-65 rounded-xl shadow-lg object-cover cursor-pointer"
                alt={roomData.roomType}
              />
              <div>
                <p className="font-semibold">{roomData.hotel}</p>
                <p>{roomData.city}</p>
                <div className="flex items-center text-yellow-400 mb-2">
                  {Array.from({ length: Math.round(roomData.rating) }).map(
                    (_, i) => <FaStar key={i} />
                  )}
                </div>
                {/* Address */}
                <div className="text-gray-500 flex items-center gap-2 mb-2">
                  <FaLocationArrow />
                  <p>{roomData.address}</p>
                </div>

                <div className="flex flex-wrap gap-2 text-gray-600">
                  {roomData.amenities.map((item, index) => (
                    <small className="bg-gray-200 px-2 py-1 rounded">
                      {item}
                    </small>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 w-80 border border-gray-300 text-gray-600 ">
        <div className={`flex items-center justify-between border-b px-5 border-gray-500 ${openFilter && "border-b"}`}>
          <p>FILTERS</p>
          <div>
            <span onClick={() => setOpenFilter(!openFilter)} className="lg:hidden">{openFilter ? "Hide" : "Show"}</span>
            <span className="hidden lg:block">Clear</span>
          </div>
        </div>
        <div className={`${openFilter ? "h-auto" : "h-0 lg:h-auto"}
        overflow-hidden transition-all duration-700` }>
          <div className="px-5 pt-6">
            <p className="text-gray-500 pb-6 ">Popular Filters</p>
            {roomFilter.map((room, index) => (
              <CheckBox label={room} key={index} />
            ))}

          </div>
          <div className="px-5 pt-6">
            <p className="text-gray-500 pb-6 ">Price Range</p>
            {priceFilter.map((price, index) => (
              <CheckBox label={price} key={index} />
            ))}
            <div className="px-5 pt-6">
              <p className="text-gray-500 pb-6 ">Sort By</p>
              {sortOptions.map((sort, index) => (
                <RadioButton label={sort} key={index} />
              ))}

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default AllHotels;
