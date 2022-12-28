import React from 'react';

const Homepage = () => {
  return (
    <div
      style={{
        backgroundColor: 'whitesmoke',
        borderRadius: '8px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '20px 0',
        }}
      >
        <img
          src="https://www.studiocity.social/logo.PNG"
          alt="Studio City logo"
          style={{ width: '200px', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default Homepage;
