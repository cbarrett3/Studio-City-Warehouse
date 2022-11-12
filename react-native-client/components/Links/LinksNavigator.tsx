/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LinksStackParamList} from '../../types';
import MyCommunity from './MyCommunity';
import PendingLinks from './PendingLinks';
import {Easing} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const LinksNavigator: React.FC = () => {
  const LinksTopTabs = createMaterialTopTabNavigator<LinksStackParamList>();
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
    <LinksTopTabs.Navigator 
      initialRouteName="My Community" 
      screenOptions={{
         tabBarLabelStyle: { fontSize: 16, fontWeight: '700', textTransform: 'none' },
         tabBarStyle: { backgroundColor: 'rgba(0,0,0,1)' },
         tabBarIndicatorStyle: { backgroundColor: '#B99A5B',},
         tabBarAllowFontScaling: true,
         tabBarActiveTintColor: '#B99A5B',
         tabBarInactiveTintColor: 'whitesmoke',
    }}>
      <LinksTopTabs.Screen name="My Community" component={MyCommunity} />
      <LinksTopTabs.Screen name="Pending Links" component={PendingLinks} />
    </LinksTopTabs.Navigator>
  );
};

export default LinksNavigator;
