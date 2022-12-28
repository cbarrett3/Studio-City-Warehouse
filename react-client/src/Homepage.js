import React from 'react';

const Homepage = () => {
  return (
    <div
      style={{
        borderRadius: '8px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '20px 0',
          opacity: '.95',
          zIndex: 2,
        }}
      >
        <img
          src="https://www.studiocity.social/logo.PNG"
          alt="Studio City logo"
          style={{ width: '200px', height: 'auto' }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <h1 style={{ color: 'whitesmoke' }}>Studio City</h1>
          <h1 style={{ color: 'gray', paddingLeft: '10px' }}>
            | Admin Portal
          </h1>
        </div>
        <h2 style={{ color: 'lightgray' }}>
          Coming to App Stores in Summer 2022
        </h2>
      </div>
    </div>
  );
};

export default Homepage;
