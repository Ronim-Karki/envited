import React from 'react';
import { FaCalendarAlt, FaAngleRight } from 'react-icons/fa';
import { useGlobalContext } from '../context';
const Time = () => {
  const { startDate, time } = useGlobalContext();
  return (
    <div className="time-container">
      <div className="time">
        <FaCalendarAlt />
      </div>
      <div className="time-text">
        <p className="time-1">
          {new Date(startDate).toDateString()} &nbsp;
          {new Date(startDate).toLocaleTimeString()}
        </p>
        <p className="time-2">
          to &nbsp;
          <strong>
            {new Date(time).toDateString()} &nbsp;{' '}
            {new Date(time).toLocaleTimeString()}
          </strong>
        </p>
      </div>
      <div className="time-arrow">
        <FaAngleRight />
      </div>
    </div>
  );
};

export default Time;
