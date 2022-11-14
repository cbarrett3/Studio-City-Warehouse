import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

export default function App() {
  return (
    <Authenticator
      initialState="signUp"
      loginMechanisms={['username', 'email']}
    >
      {({ signOut, user }) => (
        <div>
          <h1>Hello from AWS Amplify {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}
