import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";
// reducers.js

const initialState = {
    bookings: [],
  };
  
  const bookingCounterReducer = (state = initialState, action) => {
    console.log(state); 
    switch (action.type) {
      case ADD_BOOKING:
        return {
          ...state,
          bookings: [...state.bookings, { ...action.payload, id: Date.now() }],
        };
      case DELETE_BOOKING:
        return {
          ...state,
          bookings: state.bookings.filter((booking) => booking.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default bookingCounterReducer;
  