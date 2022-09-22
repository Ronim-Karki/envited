import React from 'react';
import { FaMapMarkerAlt, FaAngleRight } from 'react-icons/fa';
import { useGlobalContext } from '../../context';
export const StreetPicker = () => {
  const { street, setStreet } = useGlobalContext();

  const onChangeText = (e) => {
    setStreet(e.target.value);
  };
  return (
    <div className="time-container">
      <div className="time">
        <FaMapMarkerAlt />
      </div>
      <div className="time-text">
        <p className="time-1">Street Name</p>
        <input
          className="time-2"
          type="text"
          id="street"
          placeholder="Please enter address"
          value={street}
          onChange={() => onChangeText()}
        />
      </div>
      <div className="time-arrow">
        <FaAngleRight />
      </div>
    </div>
  );
};
