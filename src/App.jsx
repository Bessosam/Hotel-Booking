import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import AllHotels from './Pages/AllHotels';
import RoomDetails from './Pages/RoomDetails';
import MyBooking from './Pages/MyBooking';
import Layout from "./Pages/dashboardHotel/Layout";
import Dashboard from "./Pages/dashboardHotel/Dashboard";
import AddHotel from "./Pages/dashboardHotel/AddHotel";
import HotelList from "./Pages/dashboardHotel/HotelList";

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.includes('dashboard');

  return (
    <>
      {!isDashboard && <Navbar />}

      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels1" element={<AllHotels />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-booking" element={<MyBooking />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-hotel" element={<AddHotel />} />
            <Route path="hotel-list" element={<HotelList />} />
          </Route>







        </Routes>
      </div>
    </>
  );
}

export default App;
