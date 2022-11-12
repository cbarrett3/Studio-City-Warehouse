/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ProfileStackParamList} from '../../types';
import Profile from './Profile';
import Settings from './Settings';
import { Easing } from 'react-native';

const ProfileNavigator: React.FC = () => {
  const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();
  const timingConfig = {
   animation: 'timing',
   config: {
     duration: 200,
     easing: Easing.linear,
   },
 };
  const options = {
   gestureEnabled: true,
   transitionSpec: {
     open: timingConfig,
     close: timingConfig,
   },
 };
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="Profile" component={Profile} 
      />
      <ProfileStack.Screen name="Settings" component={Settings} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;