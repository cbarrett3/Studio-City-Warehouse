import React from 'react';
import Container from './Container';
import Homepage from './Homepage';

/**
 * Viewable whether or not the user is signed in.
 */

function Public() {
  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '100vh',
        overflowY: 'hidden',
      }}
    >
      <Container>
        <Homepage />
      </Container>
    </div>
  );
}

export default Public;
