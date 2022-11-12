import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService } from '../../services/authService';
import { AuthContextData, AuthData } from '../../types';
// creates the Auth Context with the custom data type and a empty object
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
   const [authData, setAuthData] = useState<AuthData>();
   // loading is true until data is loaded from async storage
   const [loading, setLoading] = useState(true);

   /* local storage function called on every app render */
   useEffect(() => {
      loadStorageData();
   }, []);

   const loadStorageData = async (): Promise<void> => {
      try {
         // check asyncStorage for persisted auth data
         const authDataSerialized = await AsyncStorage.getItem('@AuthData');
         // update state to use that auth data if its found
         if (authDataSerialized) {
            const _authData: AuthData = JSON.parse(authDataSerialized);
            setAuthData(_authData);
         }
      } catch (error) {
      } finally {
         setLoading(false);
      }
   }

   /* signUp: makes async signUp call and doesn't do anything else (signUp component will redirect UI) */
   const signUp = async (
      email: string,
      username: string,
      password: string,
   ): Promise<boolean> => {
      const response = await authService.signUp(email, username, password);
      if (response['signedUp'] === true) {
         return true;
      } else {
         return false;
      }
   };

   /* confirmSignUp: returns true or false if confirmation code was correct */
   const confirmSignUp = async (
      username: string,
      authCode: string,
   ): Promise<boolean> => {
      const response = await authService.confirmSignUp(username, authCode);
      if (response['confirmed'] === true) {
         return true;
      } else {
         return false;
      }
   };

   /* signIn: makes async signIn call and sets authData on success */
   const signIn = async (username: string, password: string): Promise<boolean> => {
      const _authData: AuthData = await authService.signIn(username, password);
      // update context with auth data so other components can be notified (ex: router)
      if (_authData.token !== '' && _authData.email !== '' && _authData.username !== '') {
         setAuthData(_authData);
         // persist authData in async storage to be maintained into next user session
         AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
         return true;
      }
      else {
         return false; // send fancier error message object
      }
   };

   /* signOut: Clear Auth Data which Redirects Nav to AuthStack */
   const signOut = async (): Promise<void> => {
      setAuthData(undefined);
      await AsyncStorage.removeItem('@AuthData');
   };

   /* auth context provided to the entire app */
   return (
      <AuthContext.Provider
         value={{ authData, loading, signUp, confirmSignUp, signIn, signOut }}>
         {children}
      </AuthContext.Provider>
   );
};

/* hook that allows componenets to subscribe to AuthContext updates */
function useAuth(): AuthContextData {
   const context = useContext(AuthContext);
   if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
   }
   return context;
}

export { AuthContext, AuthProvider, useAuth };
