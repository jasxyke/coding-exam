import React from "react";
import { useState } from "react";
import "../css/Date.css";
const DateConverter = () => {
  const [date, setDate] = useState();

  const convertDate = () => {
    if (date === undefined) return;
    let newDate = date.split("/").reverse().join("-");
    alert(`Converted date: ${newDate}`);
  };

  return (
    <div className="date-input">
      <label htmlFor="date" className="form-label">
        Date
      </label>
      <input
        className="input"
        type="date"
        name="date"
        id="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="button" onClick={convertDate}>
        Convert
      </button>
    </div>
  );
};

export default DateConverter;
