import React from 'react';
import Button from './Button';
import { styles } from './Form';

function ForgotPassword({ forgotPassword, updateFormState }) {
  return (
    <div style={styles.container}>
      {console.log(forgotPassword, updateFormState)}
      <input
        name="username"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="Username"
      />
      <Button onClick={forgotPassword} title="Reset Password" />
    </div>
  );
}

export default ForgotPassword;
