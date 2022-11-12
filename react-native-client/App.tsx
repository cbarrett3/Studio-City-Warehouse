/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useMemo, useReducer, useState} from 'react';
import Landing from './components/Landing/Landing';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import PasswordReset from './components/PasswordReset/PasswordReset';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthStackParamList, AppTabsParamList} from './types';
import {Image, Platform, StyleSheet} from 'react-native';
import ProfileNavigator from './components/Profile/ProfileNavigator';
import HomeNavigator from './components/Home/HomeNavigator';
import LinksNavigator from './components/Links/LinksNavigator';
import MessagesNavigator from './components/Messages/MessagesNavigator';
import NotificationsNavigator from './components/Notifications/NotificationsNavigator';
import {Auth} from 'aws-amplify';
import {Router} from './react-native-client/routes/Router';
import {AuthProvider} from './react-native-client/contexts/Auth';

const App: React.FC = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const AuthStack = createNativeStackNavigator<AuthStackParamList>();
//   const AppTabs = createBottomTabNavigator<AppTabsParamList>();

  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
// <NavigationContainer>
//   {!isLoggedIn ? (
//     <AuthStack.Navigator
//       initialRouteName="Landing"
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <AuthStack.Screen
//         name="Landing"
//         component={Landing}
//         options={{title: 'Landing'}}
//       />
//       <AuthStack.Screen
//         name="SignUp"
//         component={SignUp}
//         options={{title: 'SignUp'}}
//       />
//       <AuthStack.Screen
//         name="LogIn"
//         component={LogIn}
//         options={{title: 'LogIn'}}
//       />
//       <AuthStack.Screen
//         name="PasswordReset"
//         component={PasswordReset}
//         options={{title: 'PasswordReset'}}
//       />
//     </AuthStack.Navigator>
//   ) : (
//     <AppTabs.Navigator
//       initialRouteName="HomeNavigator"
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: '#B99A5B',
//         tabBarInactiveTintColor: 'gray',
//         tabBarStyle: {
//           height: 60,
//           backgroundColor: '#191919',
//           paddingBottom: 5,
//         },
//       }}>
//       <AppTabs.Screen
//         name="LinksNavigator"
//         component={LinksNavigator}
//         options={{
//           tabBarIcon: () => {
//             return (
//               <Image
//                 style={styles.linksBottomTabIconImage}
//                 source={require('./components/assets/LinksBottomTabIcon.png')}
//               />
//             );
//           },
//           tabBarLabel: 'Links',
//           tabBarShowLabel: true,
//         }}
//       />
//       <AppTabs.Screen
//         name="NotificationsNavigator"
//         component={NotificationsNavigator}
//         options={{
//           title: 'Notifications',
//           tabBarIcon: () => {
//             return (
//               <Image
//                 style={styles.notificationsBottomTabIconImage}
//                 source={require('./components/assets/NotificationsBottomTabIcon.png')}
//               />
//             );
//           },
//           tabBarBadge: 1,
//           tabBarBadgeStyle: {
//             backgroundColor: '#B99A5B',
//             fontWeight: '600',
//           },
//         }}
//       />
//       <AppTabs.Screen
//         name="HomeNavigator"
//         component={HomeNavigator}
//         options={{
//           title: 'Home',
//           tabBarIcon: () => {
//             return (
//               <Image
//                 style={styles.logoBottomTabIconImage}
//                 source={require('./components/assets/LogoBottomTabIcon.png')}
//               />
//             );
//           },
//         }}
//       />
//       <AppTabs.Screen
//         name="MessagesNavigator"
//         component={MessagesNavigator}
//         options={{
//           title: 'Messages',
//           tabBarIcon: () => {
//             return (
//               <Image
//                 style={styles.messagesBottomTabIconImage}
//                 source={require('./components/assets/MessagesBottomTabIcon.png')}
//               />
//             );
//           },
//         }}
//       />
//       <AppTabs.Screen
//         name="ProfileNavigator"
//         component={ProfileNavigator}
//         options={{
//           title: 'Profile',
//           tabBarIcon: () => {
//             return (
//               <Image
//                 style={styles.profileBottomTabIconImage}
//                 source={require('./components/assets/ProfileBottomTabIcon.png')}
//               />
//             );
//           },
//         }}
//       />
//     </AppTabs.Navigator>
//   )}
// </NavigationContainer>
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

export default App;
