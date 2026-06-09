import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Booking from '../pages/Booking';
import BookingMenu from '../pages/BookingMenu';
import About from '../pages/About';
// import BookingSuccess from '../pages/BookingSuccess';

const BookingRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Booking />} />
      <Route path="/menu" element={<BookingMenu />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/success" element={<BookingSuccess />} /> */}
    </Routes>
  );
};

export default BookingRouter;
