import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Auth, Hub } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import Container from './Container';
import Form from './Form';
/**
 * Render Profile Information about the Logged-In User. Sign-Up and Sign-In Auth Components also.
 */

function Profile() {
  useEffect(() => {
    checkUser();
    Hub.listen('auth', (data) => {
      const { payload } = data;
      if (payload.event === 'signOut') {
        setUser(null);
      }
    });
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

  function signOut() {
    Auth.signOut().catch((err) => console.log('error signing out: ', err));
  }

  if (user) {
    return (
      <Container>
        <h1>Profile</h1>
        <h2>Username: {user.username}</h2>
        <h3>Email: {user.email}</h3>
        <Button onClick={signOut}> Sign Out</Button>
      </Container>
    );
  }
  return <Form setUser={setUser} />;
}

export default Profile;

//   return (
//     <Authenticator
//       initialState="signUp"
//       loginMechanisms={['username', 'email']}
//     >
//       {({ signOut }) => (
//         <Container>
//           {console.log(user)}
//           <h1>Profile</h1>
//           <h2>Username: {user.username}</h2>
//           <h3>Email: {user.email}</h3>
//           <button onClick={signOut}>Sign out</button>
//         </Container>
//       )}
//     </Authenticator>
//   );
