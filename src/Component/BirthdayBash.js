import React from 'react';
import { Street } from './Street';
import Time from './Time';
import BirthDayCake from '../Images/BirthdayCake.png';
import { useGlobalContext } from '../context';
const BirthdayBash = () => {
  const { name } = useGlobalContext();
  return (
    <div className="birthday-container">
      <div>
        <h1 className="title-birthday">Birthday Bash</h1>
        <p className="title-birthday-h3">
          Hosted by <strong>{name}</strong>
        </p>
        <div>
          <Time />
        </div>
        <div>
          <Street />
        </div>
      </div>

      <div className="birthday-container--image">
        <img heigth="500px" width={'500px'} src={BirthDayCake} alt="cake" />
      </div>
    </div>
  );
};

export default BirthdayBash;
