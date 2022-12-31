import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Auth, Hub } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import Form from './Form';
/**
 * Render Profile Information about the Logged-In User. Sign-Up and Sign-In Auth Components also.
 */

function Profile() {
  /* profile componenet state */
  const [user, setUser] = useState(null);

  /* side effects */
  useEffect(() => {
    checkUser();
    Hub.listen('auth', (data) => {
      const { payload } = data;
      if (payload.event === 'signOut') {
        setUser(null);
      }
    });
  }, []);

  /* side effect helper functions */
  async function checkUser() {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes };
      setUser(userInfo);
      console.log(userInfo);
    } catch (err) {
      console.log('error: ', err);
    }
  }
  async function signOut() {
    Auth.signOut().catch((err) => console.log('error signing out: ', err));
  }

  if (user != null) {
    // user found
    console.log(user);
    return (
      <div
        id="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          margin: '0 auto',
          padding: '10px 10px',
          fontFamily: 'Work Sans',
        }}
      >
        <h1
          style={{
            color: 'lightgray',
            fontSize: '1rem',
          }}
        >
          {user.username}
        </h1>
        <h2
          style={{
            color: 'darkgray',
            fontSize: '.75rem',
          }}
        >
          {user.email}
        </h2>
        <Button style={{ marginTop: '10px' }} onClick={signOut}>
          Sign Out
        </Button>
      </div>
    );
  } else {
    // auth form
    return <Form setUser={setUser} />;
  }
}

export default Profile;

//   return (
//  <Authenticator
//    initialState="signUp"
//    loginMechanisms={['username', 'email']}
//  >
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
