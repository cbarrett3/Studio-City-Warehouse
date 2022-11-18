import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import Container from './Container';
/**
 * Render Profile Information about the Logged-In User. Sign-Up and Sign-In Auth Components also.
 */

function Profile() {
  useEffect(() => {
    checkUser();
  }, []);

  const [user, setUser] = useState({});

  async function checkUser() {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes };
      setUser(userInfo);
    } catch (err) {
      console.log('error: ', err);
    }
  }

  return (
    <Authenticator
      initialState="signUp"
      loginMechanisms={['username', 'email']}
    >
      {({ signOut, user }) => (
        <Container>
          {console.log(user)}
          <h1>Profile</h1>
          <h2>Username: {user.username}</h2>
          <h3>Email: {user.attributes.email}</h3>
          <button onClick={signOut}>Sign out</button>
        </Container>
      )}
    </Authenticator>
  );
}

export default Profile;
