import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { useGlobalContext } from '../../context';
// import Calender from 'react-calendar';
const DatePicker = () => {
  const { startDate, setStartDate, time, setTime, name, setName } =
    useGlobalContext();

  const onChangeDate = (value) => {
    setStartDate(value);
  };
  const onChangeTime = (value) => {
    setTime(value);
  };
  const onChangename = (value) => {
    setName(value);
  };
  return (
    <div className="time-container">
      <div className="time">
        <FaCalendarAlt />
      </div>
      <div className="time-text">
        <label for="hoster">Name</label>
        <input
          className="date-1"
          type="text"
          id="hoster"
          name="hoster"
          value={name}
          onChange={(e) => onChangename(e.target.value)}
        />
        <label for="startDate">Start Date and Time</label>
        <input
          className="date-1"
          type="datetime-local"
          id="date"
          name="startDate"
          value={startDate}
          onChange={(e) => onChangeDate(e.target.value)}
        />
        <label for="FinishDate">End Date and Time</label>
        <input
          className="date-1"
          type="datetime-local"
          id="time"
          name="FinishDate"
          value={time}
          onChange={(e) => onChangeTime(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DatePicker;
