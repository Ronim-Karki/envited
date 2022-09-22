import React from 'react';
// import styled from 'styled-components';
import Mobile from '../Images/mobile.svg';

import Text from './Text';
const Home = () => {
  return (
    <div className="container">
      <div className="image">
        <img className="image" src={Mobile} alt="Event mobile" />
      </div>
      <div className="text-container">
        <Text />
      </div>
    </div>
  );
};

export default Home;
