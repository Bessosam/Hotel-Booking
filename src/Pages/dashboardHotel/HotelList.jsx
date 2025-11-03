import React from "react";
import Allrooms_1 from "../../assets/allrooms_1.jpg";
import Allrooms_2 from "../../assets/allrooms_2.jpg";
import Allrooms_3 from "../../assets/allrooms_3.jpg";
import Allrooms_4 from "../../assets/allrooms_4.jpg";



function HotelList() {
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
    return (
        <div
            style={{
                maxWidth: '900px',
                margin: '20px auto',
                padding: '10px',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Available Hotels</h1>

            {roomsData.map((room) => (
                <div
                    key={room._id}
                    style={{
                        display: 'flex',
                        gap: '20px',
                        marginBottom: '25px',
                        padding: '15px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        backgroundColor: room.isAvailable ? '#e0ffe0' : '#ffe0e0',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={room.images}
                        alt={room.roomType}
                        style={{
                            width: '150px',
                            height: '100px',
                            borderRadius: '8px',
                            objectFit: 'cover',
                        }}
                    />
                    <div style={{ flex: 1 }}>
                        <h2 style={{ margin: '0 0 10px 0' }}>
                            {room.hotel} - {room.roomType}
                        </h2>
                        <p style={{ margin: '5px 0', color: '#555' }}>
                            <strong>City:</strong> {room.city}
                        </p>
                        <p style={{ margin: '5px 0', color: '#555' }}>
                            <strong>Address:</strong> {room.address}
                        </p>
                        <p style={{ margin: '5px 0', color: '#555' }}>
                            <strong>Price per night:</strong> ${room.pricePerNight}
                        </p>
                        <p style={{ margin: '5px 0', color: '#555' }}>
                            <strong>Rating:</strong> ⭐ {room.rating}
                        </p>
                        <p style={{ margin: '5px 0', color: '#555' }}>
                            <strong>Amenities:</strong> {room.amenities.join(', ')}
                        </p>
                        <p
                            style={{
                                marginTop: '10px',
                                color: room.isAvailable ? 'green' : 'red',
                                fontWeight: 'bold',
                            }}
                        >
                            {room.isAvailable ? 'Available' : 'Not Available'}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HotelList
