import React from 'react';
import { FaCalendarAlt, FaAngleRight } from 'react-icons/fa';
import { useGlobalContext } from '../../context';
// import Calender from 'react-calendar';
const DatePicker = () => {
  const { value, setValue, time, setTime } = useGlobalContext();

  const onChangeDate = (e) => {
    setValue(e.target.value);
  };
  const onChangeTime = (e) => {
    setTime(e.target.value);
  };
  return (
    <div className="time-container">
      <div className="time">
        <FaCalendarAlt />
      </div>
      <div className="time-text">
        <input
          className="time-1"
          type="date"
          id="date"
          name="date"
          value={value}
          onChange={() => onChangeDate()}
        />
        <input
          type="time"
          id="time"
          name="time"
          value={time}
          onChange={() => onChangeTime()}
        />
      </div>
      <div className="time-arrow">
        <FaAngleRight />
      </div>
    </div>
  );
};

export default DatePicker;
