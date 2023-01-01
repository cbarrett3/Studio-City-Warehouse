import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ConfirmSignUp from './ConfirmSignUp';
import ForgotPassword from './ForgotPassword';
import ForgotPasswordSubmit from './ForgotPasswordSubmit';

async function signIn({ username, password }, setUser) {
  try {
    const user = await Auth.signIn(username, password);
    const userInfo = { username: user.username, ...user.attributes };
    setUser(userInfo);
  } catch (err) {
    console.log('error signing up..', err);
  }
}

async function signUp({ username, password, email }, updateFormType) {
  try {
    await Auth.signUp({
      username,
      password,
      attributes: { email },
    });
    console.log('sign up success');
    updateFormType('confirmSignUp');
  } catch (err) {
    console.log('error signing up..', err);
  }
}

async function confirmSignUp(
  { username, confirmationCode },
  updateFormType
) {
  try {
    await Auth.confirmSignUp(username, confirmationCode);
    updateFormType('signIn');
  } catch (err) {
    console.log('error submitting username to rest password...', err);
  }
}

async function forgotPassword({ username }, updateFormType) {
  try {
    await Auth.forgotPassword(username);
    updateFormType('forgotPasswordSubmit');
  } catch (err) {
    console.log('error submitting username to reset password...', err);
  }
}

async function forgotPasswordSubmit(
  { username, confirmationCode, password },
  updateFormType
) {
  try {
    await Auth.forgotPasswordSubmit(username, confirmationCode, password);
    updateFormType('signIn');
  } catch (err) {
    console.log('error updating password... :', err);
  }
}

const initialFormState = {
  username: '',
  password: '',
  email: '',
  confirmationCode: '',
};

function Form(props) {
  const [formType, updateFormType] = useState('signIn');
  const [formState, updateFormState] = useState(initialFormState);

  function updateForm(event) {
    const newFormState = {
      ...formState,
      [event.target.name]: event.target.value,
    };
    updateFormState(newFormState);
  }

  function renderForm() {
    switch (formType) {
      case 'signUp':
        return (
          <SignUp
            signUp={() => signUp(formState, updateFormType)}
            updateFormState={(e) => updateForm(e)}
          />
        );
      case 'confirmSignUp':
        return (
          <ConfirmSignUp
            confirmSignUp={() => confirmSignUp(formState, updateFormType)}
            updateFormState={(e) => updateForm(e)}
          />
        );
      case 'signIn':
        return (
          <SignIn
            signIn={() => signIn(formState, props.setUser)}
            updateFormState={(e) => updateForm(e)}
          />
        );
      case 'forgotPassword':
        return (
          <ForgotPassword
            forgotPassword={() =>
              forgotPassword(formState, updateFormType)
            }
            updateFormState={(e) => updateForm(e)}
          />
        );
      case 'forgotPasswordSubmit':
        return (
          <ForgotPasswordSubmit
            forgotPasswordSubmit={() =>
              forgotPasswordSubmit(formState, updateFormType)
            }
            updateFormState={(e) => updateForm(e)}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '15vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {renderForm()}

      {/* sign up */}
      {formType === 'signUp' && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            fontFamily: 'Work Sans',
            marginTop: '10px',
          }}
        >
          <p style={{ color: 'darkgray' }}>{`been here before? `}</p>
          <span
            style={{
              color: '#3bf',
              paddingLeft: '5px',
              cursor: 'pointer',
            }}
            onClick={() => updateFormType('signIn')}
            onMouseEnter={(e) => {
              e.target.style.color = '#B99A5B';
              e.target.style.opacity = '.9';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#3bf';
              e.target.style.opacity = '1';
            }}
          >
            sign in
          </span>
        </div>
      )}

      {/* sign in */}
      {formType === 'signIn' && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
          <p style={styles.toggleForm}>
            <span
              style={styles.anchor}
              onClick={() => updateFormType('signUp')}
              onMouseEnter={(e) => {
                e.target.style.color = '#B99A5B';
                e.target.style.opacity = '.9';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#3bf';
                e.target.style.opacity = '1';
              }}
            >
              sign up
            </span>
          </p>
          <p style={{ ...styles.toggleForm }}>
            <span
              style={styles.anchor}
              onClick={() => updateFormType('forgotPassword')}
              onMouseEnter={(e) => {
                e.target.style.color = '#B99A5B';
                e.target.style.opacity = '.9';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#3bf';
                e.target.style.opacity = '1';
              }}
            >
              reset password
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  input: {
    height: 45,
    marginTop: 8,
    width: 300,
    maxWidth: 300,
    padding: '0px, 8px',
    fontSize: 16,
    outline: 'none',
    border: 'none',
    borderBottom: '2px solid rgba(0, 0, 0, .3)',
  },
  toggleForm: {
    color: 'whitesmoke',
    fontFamily: 'Work Sans',
  },
  anchor: {
    color: '#3bf',
    cursor: 'pointer',
    padding: 45,
  },
};

export { styles, Form as default };
