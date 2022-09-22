import React from 'react';
import { FaCalendarAlt, FaAngleRight } from 'react-icons/fa';
import { useGlobalContext } from '../context';
const Time = () => {
  const { value, time } = useGlobalContext();
  return (
    <div className="time-container">
      <div className="time">
        <FaCalendarAlt />
      </div>
      <div className="time-text">
        <p className="time-1">
          {new Date(value).toDateString} {time}
        </p>
        <p className="time-2">
          to <strong>19 August 1:00PM</strong> UTC +10
        </p>
      </div>
      <div className="time-arrow">
        <FaAngleRight />
      </div>
    </div>
  );
};

export default Time;
