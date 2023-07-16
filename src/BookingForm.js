import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm({ availableTimes, updateTimes }) {
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [time, setTime] = useState("17:00");
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !contactNo || !date || !time) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Successfully Booked");
    alert("Successfully Booked");
    resetForm();

  };

  const resetForm = () => {
    setName("");
    setContactNo("");
    setDate("");
    setGuests(1);
    setTime("17:00");
    setOccasion("Birthday");
  };

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
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
            />
          </div>

          <div className="field">
            <label>Choose time:</label>
            <select
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>No of Guests:</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
            />
          </div>

          <div className="field">
            <label>Occasion:</label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
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

          <button
            type="submit"
            value="Make your reservation"
            className="subbutton"
          >

            Reserve Table
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default BookingForm;
