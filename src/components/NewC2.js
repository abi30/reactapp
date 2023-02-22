// App.js

import React, { useState } from "react";
import { connect } from "react-redux";
import { addBooking, deleteBooking } from "../redux/booking/actions";

const BookingCounter = (props) => {
    console.log(props);
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
    guests: "",
    class: "",
  });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addBooking(form);
    setForm({
      from: "",
      to: "",
      date: "",
      guests: "",
      class: "",
    });
  };

  const handleDelete = (id) => {
    props.deleteBooking(id);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="from"
          value={form.from}
          onChange={handleFormChange}
          placeholder="From"
        />
        <input
          type="text"
          name="to"
          value={form.to}
          onChange={handleFormChange}
          placeholder="To"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleFormChange}
        />
        <input
          type="number"
          name="guests"
          value={form.guests}
          onChange={handleFormChange}
          placeholder="Guests"
        />
        <select name="class" value={form.class} onChange={handleFormChange}>
          <option value="">Select class</option>
          <option value="Economy">Economy</option>
          <option value="Business">Business</option>
          <option value="First">First</option>
        </select>
        <button type="submit" disabled={props.bookings.length >= 3}>
          Book
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Guests</th>
            <th>Class</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.from}</td>
              <td>{booking.to}</td>
              <td>{booking.date}</td>
              <td>{booking.guests}</td>
              <td>{booking.class}</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingCounter);
