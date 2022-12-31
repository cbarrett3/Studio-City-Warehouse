import React from 'react';

/**
 * Viewable whether or not the user is signed in.
 */

const Homepage = () => {
  return (
    <div
      id="container"
      style={{
        margin: '0 auto',
        padding: '50px 10px',
        fontFamily: 'Work Sans',
      }}
    >
      {/* center all homepage content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* logo */}
        <img
          src="https://www.studiocity.social/logo.PNG"
          alt="Studio City logo"
          style={{
            width: '150px',
            height: 'auto',
            transition: 'transform 0.5s' /* Add a transition effect */,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = 'rotate(360deg)')
          } /* Apply the transform on hover */
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = 'rotate(0deg)')
          } /* Reset the transform when the mouse leaves the element */
        />
        <h1
          style={{
            color: 'whitesmoke',
            fontSize: '2.5rem',
            padding: '0px',
            margin: '0px',
          }}
        >
          Studio City
        </h1>
        <h1
          style={{
            color: 'gray',
            fontSize: '1.5rem',
          }}
        >
          Admin Portal
        </h1>
        {/* </div> */}
        {/* </div> */}
        <h2
          style={{
            display: 'flex',
            justifyContent: 'center',
            color: 'lightgray',
            fontSize: '1rem',
          }}
        >
          Coming to App Stores in Spring 2023
        </h2>
      </div>
    </div>
  );
};

export default Homepage;
