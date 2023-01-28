import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Auth, Hub } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import Form from './Form';
/**
 * Render Profile Information about the Logged-In User. Sign-Up and Sign-In Auth Components also.
 */

function Profile(props) {
  async function signOut() {
    Auth.signOut().catch((err) => console.log('error signing out: ', err));
  }

  if (props.username != null) {
    // user info found
    console.log(props.username);
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
          {props.username}
        </h1>
        <h2
          style={{
            color: 'darkgray',
            fontSize: '.75rem',
          }}
        >
          {props.email}
        </h2>
        {/* <Button style={{ marginTop: '10px' }} onClick={signOut}>
          Sign Out
        </Button> */}
        <button
          onClick={signOut}
          style={{
            width: '125px',
            height: '40px',
            marginTop: '10px',
            marginBottom: '10px',
            fontSize: '16px',
            backgroundColor: '#B99A5B',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            textAlign: 'left',
            paddingLeft: '11px',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#3bf';
            e.target.style.boxShadow = '-2px 2px 10px 2px #B99A5B';
            e.target.style.opacity = '.9';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#B99A5B';
            e.target.style.opacity = '1';
            e.target.style.boxShadow = 'none';
          }}
        >
          👋 sign out
        </button>
      </div>
    );
  } else {
    // auth form
    return <Form setUser={props.setUser} />;
  }
}

export default Profile;
