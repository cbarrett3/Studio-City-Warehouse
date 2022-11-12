/* eslint-disable prettier/prettier */
import React from 'react';
import {NotificationsStackParamList} from '../../types';
import CommunityNotifications from './CommunityNotifications';
import MyNotifications from './MyNotifications';
import {Easing} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const NotificationsNavigator: React.FC = () => {
  const NotificationsTopTabs = createMaterialTopTabNavigator<NotificationsStackParamList>();
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
    <NotificationsTopTabs.Navigator 
      initialRouteName="Me" 
      screenOptions={{
         tabBarLabelStyle: { fontSize: 16, fontWeight: '700', textTransform: 'none' },
         tabBarStyle: { backgroundColor: 'rgba(0,0,0,1)' },
         tabBarIndicatorStyle: { backgroundColor: '#B99A5B',},
         tabBarAllowFontScaling: true,
         tabBarActiveTintColor: '#B99A5B',
         tabBarInactiveTintColor: 'whitesmoke',
    }}>
      <NotificationsTopTabs.Screen name="Me" component={MyNotifications} />
      <NotificationsTopTabs.Screen name="My Community" component={CommunityNotifications} />
    </NotificationsTopTabs.Navigator>
  );
};

export default NotificationsNavigator;
