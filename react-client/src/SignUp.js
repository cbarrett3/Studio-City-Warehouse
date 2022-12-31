import React from 'react';
import Button from './Button';
import { styles } from './Form';

function SignUp({ signUp, updateFormState }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Work Sans',
        paddingTop: '50px',
      }}
    >
      <input
        name="username"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={{
          width: '250px',
          height: '40px',
          marginBottom: '10px',
          padding: '0 10px',
          borderRadius: '5px',
          fontSize: '1rem',
        }}
        placeholder="username"
      />
      <input
        type="password"
        name="password"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={{
          width: '250px',
          height: '40px',
          marginBottom: '10px',
          fontSize: '16px',
          padding: '0 10px',
          borderRadius: '5px',
          fontSize: '1rem',
        }}
        placeholder="password"
      />
      <input
        name="email"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={{
          width: '250px',
          height: '40px',
          marginBottom: '10px',
          fontSize: '16px',
          padding: '0 10px',
          borderRadius: '5px',
          fontSize: '1rem',
        }}
        placeholder="email"
      />
      <button
        onClick={signUp}
        style={{
          width: '250px',
          height: '40px',
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
        sign up
      </button>
    </div>
  );
}

export default SignUp;
