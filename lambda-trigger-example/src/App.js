import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { Authenticator, signOut } from '@aws-amplify/ui-react';
import logo from './logo.svg';
import './App.css';

function App({ signOut }) {
  const [user, updateUser] = useState(null);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => updateUser(user))
      .catch((err) => console.log(err));
  }, []);

  let isAdmin = false;
  if (user) {
    const {
      signInUserSession: {
        idToken: { payload },
      },
    } = user;
    console.log('payload: ', payload);
    if (
      payload['cofnito:groups'] &&
      payload['cognito:groups'].includes('Admin')
    ) {
      isAdmin = true;
    }
  }

  return (
    <Authenticator
      initialState="signUp"
      loginMechanisms={['username', 'email']}
    >
      <div className="App">
        <header className="App-header">
          <h1> Hello world </h1>
          {isAdmin && <p> Welcome, Admin </p>}
        </header>
        <button onClick={signOut}>Sign out</button>
      </div>
    </Authenticator>
  );
}

export default App;
