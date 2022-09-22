import React from 'react';
import { Link } from 'react-router-dom';
const Button = () => {
  //navigating through button

  return (
    <div className="btn-box">
      <Link className="btn" to="/create">
        🎉Create my event
      </Link>
    </div>
  );
};

export default Button;
