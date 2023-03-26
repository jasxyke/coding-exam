import React from "react";
import { useState } from "react";
import "../css/Date.css";
import Button from "./Button";
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
      <Button text={"Convert"} onClick={convertDate} />
    </div>
  );
};

export default DateConverter;
