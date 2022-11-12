import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../types';
import Landing from '../components/Landing/Landing';
import SignUp from '../components/SignUp/SignUp';
import LogIn from '../components/LogIn/LogIn';
import PasswordReset from '../components/PasswordReset/PasswordReset';

const _AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {

  return (
    <_AuthStack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false,
      }}>
      <_AuthStack.Screen
        name="Landing"
        component={Landing}
        options={{title: 'Landing'}}
      />
      <_AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: 'SignUp'}}
      />
      <_AuthStack.Screen
        name="LogIn"
        component={LogIn}
        options={{title: 'LogIn'}}
      />
      <_AuthStack.Screen
        name="PasswordReset"
        component={PasswordReset}
        options={{title: 'PasswordReset'}}
      />
    </_AuthStack.Navigator>
  );
};
