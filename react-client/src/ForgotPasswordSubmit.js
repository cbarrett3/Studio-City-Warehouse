import React from 'react';
import Button from './Button';
import { styles } from './Form';

function ForgotPasswordSubmit({ forgotPasswordSubmit, updateFormState }) {
  return (
    <div style={styles.container}>
      <input
        name="confirmationCode"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="Confirmation Code"
      />
      <input
        type="password"
        name="password"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="password"
      />
      <Button onClick={forgotPasswordSubmit} title="Save new password" />
    </div>
  );
}

export default ForgotPasswordSubmit;
