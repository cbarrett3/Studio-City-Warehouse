import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppTabsParamList} from '../../types';
import LinksNavigator from '../components/Links/LinksNavigator';
import NotificationsNavigator from '../components/Notifications/NotificationsNavigator';
import HomeNavigator from '../components/Home/HomeNavigator';
import MessagesNavigator from '../components/Messages/MessagesNavigator';
import ProfileNavigator from '../components/Profile/ProfileNavigator';
import { Image, StyleSheet } from 'react-native';

const AppTabs = createBottomTabNavigator<AppTabsParamList>();

export const AppStack = () => {
  return (
    <AppTabs.Navigator
      initialRouteName="ProfileNavigator"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#B99A5B',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
          backgroundColor: '#191919',
          paddingBottom: 5,
        },
      }}>
      <AppTabs.Screen
        name="LinksNavigator"
        component={LinksNavigator}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={styles.linksBottomTabIconImage}
                source={require('../components/assets/LinksBottomTabIcon.png')}
              />
            );
          },
          tabBarLabel: 'Links',
          tabBarShowLabel: true,
        }}
      />
      <AppTabs.Screen
        name="NotificationsNavigator"
        component={NotificationsNavigator}
        options={{
          title: 'Notifications',
          tabBarIcon: () => {
            return (
              <Image
                style={styles.notificationsBottomTabIconImage}
                source={require('../components/assets/NotificationsBottomTabIcon.png')}
              />
            );
          },
          tabBarBadge: 1,
          tabBarBadgeStyle: {
            backgroundColor: '#B99A5B',
            fontWeight: '600',
          },
        }}
      />
      <AppTabs.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          title: 'Home',
          tabBarIcon: () => {
            return (
              <Image
                style={styles.logoBottomTabIconImage}
                source={require('../components/assets/LogoBottomTabIcon.png')}
              />
            );
          },
        }}
      />
      <AppTabs.Screen
        name="MessagesNavigator"
        component={MessagesNavigator}
        options={{
          title: 'Messages',
          tabBarIcon: () => {
            return (
              <Image
                style={styles.messagesBottomTabIconImage}
                source={require('../components/assets/MessagesBottomTabIcon.png')}
              />
            );
          },
        }}
      />
      <AppTabs.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          title: 'Profile',
          tabBarIcon: () => {
            return (
              <Image
                style={styles.profileBottomTabIconImage}
                source={require('../components/assets/ProfileBottomTabIcon.png')}
              />
            );
          },
        }}
      />
    </AppTabs.Navigator>
  );
};

const styles = StyleSheet.create({
   notificationsBottomTabIconImage: {
     width: 19,
     height: 23,
   },
   linksBottomTabIconImage: {
     width: 23,
     height: 23,
   },
   logoBottomTabIconImage: {
     width: 20,
     height: 27,
   },
   messagesBottomTabIconImage: {
     width: 23,
     height: 23,
   },
   profileBottomTabIconImage: {
     width: 28,
     height: 28,
   },
 });
