import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useGlobalContext } from '../../context';
export const StreetPicker = () => {
  const { street, setStreet } = useGlobalContext();

  const onChangeText = (value) => {
    setStreet(value);
  };
  return (
    <div className="time-container">
      <div className="time">
        <FaMapMarkerAlt />
      </div>
      <div className="time-text">
        <p className="time-1">Street Name</p>
        <input
          className="date-1"
          type="text"
          id="street"
          placeholder="Please enter address"
          value={street}
          onChange={(e) => onChangeText(e.target.value)}
        />
      </div>
    </div>
  );
};
