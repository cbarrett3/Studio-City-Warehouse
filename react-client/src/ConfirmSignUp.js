import React from 'react';
import Button from './Button';
import { styles } from './Form';

function ConfirmSignUp({ confirmSignUp, updateFormState }) {
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
      <Button onClick={confirmSignUp} title="Confirm Sign Up" />
    </div>
  );
}

export default ConfirmSignUp;
