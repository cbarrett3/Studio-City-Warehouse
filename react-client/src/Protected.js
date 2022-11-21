import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Container from './Container';
import protectedRoute from './protectedRoute';
/**
 * Protected Route. Signed in users can view - others are redirected to the Sign-In form.
 */

function Protected() {
  //   useEffect(() => {
  //     Auth.currentAuthenticatedUser().catch(() => {
  //       props.history.push('profile');
  //     });
  //   }, []);
  return (
    <Container>
      <h1>Protected route</h1>
    </Container>
  );
}

export default protectedRoute(Protected);
