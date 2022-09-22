import React from 'react';
import Button from './Button';

const Text = () => {
  return (
    <div className="text-container">
      <article className="box">
        <h1 className="box-title">
          Imagine if <br /> <span className="title snap">Snapchat</span>
          had events.
        </h1>
        <p className="box-paragraph">
          Easily host and share events with your friends <br />
          <span>across any social media.</span>
        </p>
      </article>
      <div className="btn-box">
        <Button />
      </div>
    </div>
  );
};

export default Text;
