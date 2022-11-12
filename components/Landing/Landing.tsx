/* eslint-disable prettier/prettier */
import React from 'react';
import { Nav } from '../../types';
import {
   StyleSheet,
   Text,
   View,
   Image,
   ImageBackground,
   Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Landing: React.FC = () => {
   const { navigate } = useNavigation<Nav>();
   return (
      <ImageBackground
         style={styles.backgroundImage}
         source={require('../assets/BG.png')}
         resizeMode="cover">
         <Image
            style={styles.bannerImage}
            source={require('../assets/TopBanner.png')}
         />
         <View style={styles.centerContainer}>
            <Image
               style={styles.logoImage}
               source={require('../assets/Logo.png')}
            />
            <Text style={styles.logoText}>Entering Studio City</Text>
            <Pressable
               style={styles.signUpButton}
               onPress={() => navigate('SignUp')}
               accessibilityLabel="Sign Up Button">
               <Text style={styles.signUpButtonText}>Sign up</Text>
            </Pressable>
            <Pressable
               style={styles.loginButton}
               onPress={() => navigate('LogIn')}
               accessibilityLabel="Log In Button">
               <Text style={styles.loginButtonText}>Log in</Text>
            </Pressable>
         </View>
      </ImageBackground>
   );
};

const styles = StyleSheet.create({
   backgroundImage: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: '0%',
   },
   bannerImage: {
      width: '100%',
   },
   centerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
   },
   logoImage: {
      width: 80,
      height: 105,
      marginTop: 70,
   },
   logoText: {
      color: 'white',
      fontWeight: 'bold',
      marginTop: 12,
   },
   signUpButton: {
      backgroundColor: 'white',
      width: '80%',
      padding: 10,
      borderRadius: 100,
      marginTop: 200,
   },
   signUpButtonText: {
      color: '#B99A5B',
      fontSize: 16,
      alignSelf: 'center',
      fontWeight: 'bold',
   },
   loginButton: {
      backgroundColor: '#B99A5B',
      width: '80%',
      padding: 10,
      borderRadius: 100,
      marginTop: 20,
   },
   loginButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      alignSelf: 'center',
      fontWeight: 'bold',
   },
});

export default Landing;
