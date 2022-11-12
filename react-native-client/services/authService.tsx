import Amplify, { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { AuthData } from '../types';

async function signUp(
  email: string,
  username: string,
  password: string,
): Promise<any> {
  try {
    let response = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
      },
    });
    if (response.user) {
      return new Promise(resolve => {
        resolve({signedUp: true});
      });
    }
  } catch (error) {
    return new Promise(resolve => {
      resolve({signedUp: false});
    });
  }
}

async function confirmSignUp(username: string, authCode: string): Promise<any> {
  try {
    await Auth.confirmSignUp(username, authCode);
    return new Promise(resolve => {
      resolve({
        confirmed: true,
      });
    });
  } catch (error) {
    return new Promise(resolve => {
      resolve({
        confirmed: false,
      });
    });
  }
}

const signIn = async (
  username: string,
  password: string,
): Promise<AuthData> => {
  let user: AuthData = {token: '', email: '', username: ''};
  try {
    let response = await Auth.signIn(username, password);
    user.email = response.attributes.email;
    user.token = response.signInUserSession.idToken.jwtToken;
    user.username = response.username;
    return new Promise(resolve => {
      resolve({
        token: user.token,
        email: user.email,
        username: user.username,
      });
    });
  } catch (error) {
    return new Promise(resolve => {
      resolve({
        token: '',
        email: '',
        username: '',
      });
    });
  }
};

export const authService = {
  signUp,
  confirmSignUp,
  signIn,
};
