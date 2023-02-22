import { combineReducers } from "redux";
import bookingCounterReducer from './booking/bookingCounterReducer';
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/DynamicCounterReducer";

const rootReducer = combineReducers({
    counter:counterReducer,
    dynamicCounter:dynamicCounterReducer,
    bookingConter: bookingCounterReducer
});

export default rootReducer;