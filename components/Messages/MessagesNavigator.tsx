/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MessagesStackParamList, Nav} from '../../types';
import Messages from './Messages';
import Conversation from './Conversation';
import {Dimensions, Easing} from 'react-native';

const MessagesNavigator: React.FC = () => {
  const MessagesStack = createNativeStackNavigator<MessagesStackParamList>();
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
    <MessagesStack.Navigator
      initialRouteName="Messages"
      screenOptions={{
        headerShown: false,
      }}>
      <MessagesStack.Screen
        name="Messages"
        component={Messages}
        options={{
          gestureEnabled: true,
          animationTypeForReplace: 'push',
        }}
      />
      <MessagesStack.Screen name="Conversation" component={Conversation} />
    </MessagesStack.Navigator>
  );
};

export default MessagesNavigator;
