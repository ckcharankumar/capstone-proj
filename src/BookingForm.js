import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
  const [name, setName] = useState("");
//   const [table, setTable] = useState("1");
const [contactNo, setContactNo] = useState("");
const [date, setDate] = useState();

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !contactNo || !date) {
            alert("Please fill in all required fields.");
            return;
        }

        console.log("Successfully Booked");
    }

  return (
    <div className="containerf">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2 id="heading">Fill Details</h2>

          <div className="field">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Choose date:</label>
            <input type="date"
            value={date}
            onChange={(e) => setDate (e.target.value)}
            
            />
          </div>

          <div className="field">
            <label>No of Guests:</label>
            <input type="number" placeholder="1" min="1" max="10" />
          </div>

          <div className="field">
            <label>Occasion:</label>
            <select>
              <option>Meet up</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>

          <div className="field">
            <label>Contact No:</label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter your number"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
          </div>

          <button type="submit" value="Make your reservation" className="subbutton">Reserve Table</button>
        </fieldset>
      </form>
    </div>
  );
}

export default BookingForm;
