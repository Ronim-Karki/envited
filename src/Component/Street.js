import React from 'react';
import { FaMapMarkerAlt, FaAngleRight } from 'react-icons/fa';
export const Street = () => {
  return (
    <div className="time-container">
      <div className="time">
        <FaMapMarkerAlt />
      </div>
      <div className="time-text">
        <p className="time-1">Street Name</p>
        <p className="time-2">Suburb, State, Postcode</p>
      </div>
      <div className="time-arrow">
        <FaAngleRight />
      </div>
    </div>
  );
};
