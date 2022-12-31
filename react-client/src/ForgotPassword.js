import React from 'react';

function ForgotPassword({ forgotPassword, updateFormState }) {
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
      {console.log(forgotPassword, updateFormState)}
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
      <button
        onClick={forgotPassword}
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
        📧 email me a code
      </button>
    </div>
  );
}

export default ForgotPassword;
