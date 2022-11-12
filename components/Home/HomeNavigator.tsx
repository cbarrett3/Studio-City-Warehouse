/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeStackParamList} from '../../types';
import Home from './Home';
import Search from './Search';
import Filter from './Filter';
import { Easing } from 'react-native';

const HomeNavigator: React.FC = () => {
  const HomeStack = createNativeStackNavigator<HomeStackParamList>();
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
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} 
      />
      <HomeStack.Screen name="Search" component={Search} />
      <HomeStack.Screen name="Filter" component={Filter} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
