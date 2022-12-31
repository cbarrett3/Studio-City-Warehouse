import React from 'react';

function SignIn({ signIn, updateFormState }) {
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
      <button
        onClick={signIn}
        style={{
          width: '250px',
          height: '40px',
          marginBottom: '10px',
          fontSize: '16px',
          backgroundColor: '#d0ae0d',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          textAlign: 'left',
          paddingLeft: '11px',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#3bf';
          e.target.style.boxShadow = '-2px 2px 10px 2px #d0ae0d';
          e.target.style.opacity = '.9';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#d0ae0d';
          e.target.style.opacity = '1';
          e.target.style.boxShadow = 'none';
        }}
      >
        sign in
      </button>
    </div>
  );
}

export default SignIn;
