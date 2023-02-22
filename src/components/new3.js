import React from "react";
import { useSelector } from "react-redux";

const BookingCounter = () => {
  const bookings = useSelector((state) => state.bookings);
  console.log(bookings); // add this line to check if bookings is defined

  const bookingCount = bookings.length;
  const isDisabled = bookingCount >= 3;

  return (
    <div>
      <h2>Booking Count: {bookingCount}</h2>
      <button disabled={isDisabled}>Book Now</button>
    </div>
  );
};

export default BookingCounter;
