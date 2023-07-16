import React  from "react";
import Tbanner from "./TableBanner";
import "./Confirmationpage.css"

function Confirmpage() {

  return (
    <>
      <Tbanner
        cTitle="Book for Reservation"
        location="Be prepared!!"
        des="Enjoy your meal with your loved ones, without waiting"
      />
      <h2 class="conf">Booking Confirmed</h2>
    </>
  );
}

export default Confirmpage;