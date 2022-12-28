import React from 'react';
import Container from './Container';
import Homepage from './Homepage';

/**
 * Viewable whether or not the user is signed in.
 */

function Public() {
  return (
    <Container>
      <Homepage />
    </Container>
  );
}

export default Public;
