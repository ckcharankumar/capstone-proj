// BookingPage.js
import React, { useEffect, useReducer } from "react";
import Tbanner from "./TableBanner";
import BookingForm from "./BookingForm";
import { fetchAPI } from "./api"; // Assuming you have the API library imported correctly

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.times;
    default:
      return state;
  }
}

function initializeTimes(dispatch) {
  const today = new Date();
  const formattedDate = formatDate(today);

  fetchAPI(`/api/available-times?date=${formattedDate}`)
    .then((response) => {
      if (response.success) {
        dispatch({ type: "UPDATE_TIMES", times: response.times });
      } else {
        // Handle error
      }
    })
    .catch((error) => {
      // Handle error
    });
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(reducer, []);

  const updateTimes = (date) => {
    fetchAPI(`/api/available-times?date=${date}`)
      .then((response) => {
        if (response.success) {
          dispatch({ type: "UPDATE_TIMES", times: response.times });
        } else {
          // Handle error
        }
      })
      .catch((error) => {
        // Handle error
      });
  };

  useEffect(() => {
    initializeTimes(dispatch);
  }, []);

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
