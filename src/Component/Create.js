import React, { useState } from 'react';
import { StreetPicker } from './Date/StreetPicker';
import { Link } from 'react-router-dom';
import DatePicker from './Date/DatePicker';
import BirthDayCake from '../Images/BirthdayCake.png';
import { useGlobalContext } from '../context';
const Create = () => {
  const { value, time, street, obj, setObj } = useGlobalContext();

  const onClickHappen = () => {
    setObj({ value, time, street });
  };
  return (
    <div className="birthday-container">
      <div>
        <h1 className="title-birthday">Create Birthday</h1>
        {/* <p className="title-birthday-h3">
          Hosted by <strong>Elysia</strong>
        </p> */}
        <div>
          <p className="title-birthday-h3">Select Date for Party</p>
          <DatePicker />
        </div>
        <div>
          <p className="title-birthday-h3">Select street for Party</p>
          <StreetPicker />
        </div>
        <br />
        <div className="btn">
          <Link to="/event" className="btn">
            Create
          </Link>
          {/* <Link
            
            className="btn"
            placeholder="Create"
            value="Create"
            onClick={() => onClickHappen()}
          /> */}
        </div>
      </div>

      <div className="birthday-container--image">
        <img heigth="500px" width={'500px'} src={BirthDayCake} alt="cake" />
      </div>
    </div>
  );
};

export default Create;
