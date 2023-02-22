import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addBooking, deleteBooking } from "./actions";

const BookingForm = ({ bookings, addBooking, deleteBooking }) => {
  const [destinationFrom, setDestinationFrom] = useState("");
  const [destinationTo, setDestinationTo] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [guests, setGuests] = useState("");
  const [classes, setClasses] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addBooking({ destinationFrom, destinationTo, journeyDate, guests, classes });
    setDestinationFrom("");
    setDestinationTo("");
    setJourneyDate("");
    setGuests("");
    setClasses("");
  };

  const handleDelete = (id) => {
    deleteBooking(id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="destinationFrom">Destination From:</label>
        <input
          type="text"
          id="destinationFrom"
          value={destinationFrom}
          onChange={(event) => setDestinationFrom(event.target.value)}
        />
        <label htmlFor="destinationTo">Destination To:</label>
        <input
          type="text"
          id="destinationTo"
          value={destinationTo}
          onChange={(event) => setDestinationTo(event.target.value)}
        />
        <label htmlFor="journeyDate">Journey Date:</label>
        <input
          type="text"
          id="journeyDate"
          value={journeyDate}
          onChange={(event) => setJourneyDate(event.target.value)}
        />
        <label htmlFor="guests">Guests:</label>
        <input
          type="text"
          id="guests"
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
        />
        <label htmlFor="classes">Classes:</label>
        <input
          type="text"
          id="classes"
          value={classes}
          onChange={(event) => setClasses(event.target.value)}
        />
        <button type="submit" disabled={bookings.length >= 3}>
          Book
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Destination From</th>
            <th>Destination To</th>
            <th>Journey Date</th>
            <th>Guests</th>
            <th>Classes</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.destinationFrom}</td>
              <td>{booking.destinationTo}</td>
              <td>{booking.journeyDate}</td>
              <td>{booking.guests}</td>
              <td>{booking.classes}</td>
              <td>
                <button onClick={() => handleDelete(booking.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

BookingForm.propTypes = {
  bookings: PropTypes.array.isRequired,
  addBooking: PropTypes.func.isRequired,
  deleteBooking: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    bookings: state.bookings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBooking: (booking) => dispatch(addBooking(booking)),
    deleteBooking: (id) => dispatch(deleteBooking(id)),
         
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(BookingForm);