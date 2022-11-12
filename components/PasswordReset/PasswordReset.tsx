/* eslint-disable prettier/prettier */
import React from 'react';
import {Nav} from '../../types';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Alert,
  Pressable,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const PasswordReset: React.FC = () => {
  const {navigate} = useNavigation<Nav>();
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/BG.png')}
      resizeMode="cover">
      <Image
        style={styles.bannerImage}
        source={require('../assets/PasswordResetTopBanner.png')}
      />
      <View style={styles.passwordResetContainer}>
        <View style={styles.topRow}>
          <Text style={styles.title}>Password Reset</Text>
          <Image
            style={styles.logoImage}
            source={require('../assets/Logo.png')}
          />
        </View>
        <View style={styles.emailContainer}>
          <Image
            style={styles.emailIconImage}
            source={require('../assets/EmailIcon.png')}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Your email"
            placeholderTextColor="#E7E7E7"
            autoComplete="email"
            keyboardType="email-address"
            enablesReturnKeyAutomatically={true}
          />
        </View>
        <Pressable
          style={styles.sendInstructionsButton}
          onPress={() => Alert.alert('Signing Up')}
          accessibilityLabel="Sign Up Button">
          <Text style={styles.sendInstructionsButtonText}>
            Send Instructions
          </Text>
        </Pressable>
      </View>
      <Text style={styles.alreadyHaveAccountText}>
        {'Already have an account?  '}
        <Text style={styles.logInText} onPress={() => navigate('LogIn')}>
          Log in
        </Text>
      </Text>
      <Image
        style={styles.bannerImage}
        source={require('../assets/PasswordResetBottomBanner.png')}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: width,
    height: height,
  },
  bannerImage: {
    width: '100%',
    zIndex: 1,
  },
  passwordResetContainer: {
    display: 'flex',
    backgroundColor: '#181818',
    opacity: 0.85,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 25,
    marginTop: 20,
  },
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 10,
  },
  title: {
    color: '#FFFFFF',
    width: '60%',
    fontSize: 28,
    fontWeight: '900',
  },
  logoImage: {
    width: 30,
    height: 40,
  },
  emailContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
    marginTop: 25,
  },
  emailIconImage: {
    width: 25,
    height: 22,
    marginRight: 10,
  },
  sendInstructionsButton: {
    alignSelf: 'center',
    backgroundColor: '#B99A5B',
    width: '100%',
    padding: 10,
    borderRadius: 100,
    marginVertical: 30,
  },
  sendInstructionsButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  alreadyHaveAccountText: {
    color: '#B99A5B',
    alignSelf: 'flex-start',
    fontSize: 16,
    marginHorizontal: 30,
    marginVertical: 30,
  },
  logInText: {
    color: '#E7E7E7',
    fontWeight: '700',
  },
  textInput: {
    color: 'white',
  },
});

export default PasswordReset;
