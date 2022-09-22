import React from 'react';
import { FaMapMarkerAlt, FaAngleRight } from 'react-icons/fa';
import { useGlobalContext } from '../context';
export const Street = () => {
  const { street } = useGlobalContext();
  return (
    <div className="time-container">
      <div className="time">
        <FaMapMarkerAlt />
      </div>
      <div className="time-text">
        <p className="time-1">Street Name</p>
        <p className="time-2">{street}</p>
      </div>
      <div className="time-arrow">
        <FaAngleRight />
      </div>
    </div>
  );
};
