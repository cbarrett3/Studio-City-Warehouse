import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import protectedRoute from './protectedRoute';
import TodoList from './TodoList';
import Planner from './Planner';
/**
 * Protected Route. Signed in users can view - others are redirected to the Sign-In form.
 */

function Notes(props) {
  return (
    <div
      style={{
        backgroundColor: '#212121',
        height: '100vh',
        overflowY: 'hidden',
      }}
    >
      <div
        id="container"
        style={{ margin: '0 auto', padding: '50px 10px' }}
      >
        <h1>Notes</h1>
        <Planner />
      </div>
    </div>
  );
}

export default protectedRoute(Notes, '/notes');
