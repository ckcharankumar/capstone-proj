import React, { useReducer } from "react";
import Tbanner from "./TableBanner";
import BookingForm from "./BookingForm";

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.times;
    default:
      return state;
  }
}

function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);

  const updateTimes = (date) => {
    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    dispatch({ type: "UPDATE_TIMES", times });
  };

  return (
    <>
      <Tbanner
        cTitle="Book for Reservation"
        location="Be prepared!!"
        des="Enjoy your meal with your loved ones, without waiting"
      />
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </>
  );
}

export default BookingPage;
