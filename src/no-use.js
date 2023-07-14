import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code for form submission or API communication
    console.log("Form submitted!");
  };

  return (
    <div className="containerf">
      <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}

export default BookingForm;
