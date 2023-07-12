import React from "react";
import Tbanner from "./TableBanner";
import BookingForm from "./BookingForm";

function BookingPage() {
  return (
    <>
      <Tbanner
      cTitle="Book for Reservation"
      location="Be prepared!!"
      des="Enjoy your meal with your loved ones, without waiting"
      />
      <BookingForm/>
    </>
  );
}

export default BookingPage;
