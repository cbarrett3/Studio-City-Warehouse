/* eslint-disable prettier/prettier */
import React, {useCallback, useState} from 'react';
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
import {useAuth} from '../../contexts/Auth';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
import {Auth} from 'aws-amplify';

interface User {
  name: string;
}

const LogIn: React.FC = () => {
  const {navigate} = useNavigation<Nav>();
  const {signIn} = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [user, setUser] = useState<User | null>(null);
  const googleSignInAttempt = useCallback(() => {
    //@ts-ignore
    Auth.federatedSignIn({provider: 'Google'});
  }, []);

  const signInAttempt = async (): Promise<void> => {
    setLoading(true);
    let attempt = await signIn(username, password);
    if (attempt === false) {
      console.log('could not sign in, try again');
    }
    setLoading(false);
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/BG.png')}
      resizeMode="cover">
      <Image
        style={styles.bannerImage}
        source={require('../assets/LogInBanner.png')}
      />
      <View style={styles.logInContainer}>
        <View style={styles.topRow}>
          <Text style={styles.title}>Log in</Text>
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
            placeholder="Your username"
            placeholderTextColor="#E7E7E7"
            autoComplete="username"
            enablesReturnKeyAutomatically={true}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.passwordContainer}>
          <Image
            style={styles.passwordIconImage}
            source={require('../assets/PasswordIcon.png')}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Your password"
            placeholderTextColor="#E7E7E7"
            maxLength={18}
            enablesReturnKeyAutomatically={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Pressable
          style={styles.logInButton}
          onPress={() => signInAttempt()}
          accessibilityLabel="Log in button">
          <Text style={styles.logInButtonText}>Sign in</Text>
        </Pressable>
        <View style={styles.oAuthContainer}>
          <Text style={styles.oAuthText}>Or sign in with</Text>
          <Image
            style={styles.facebookIconImage}
            source={require('../assets/Facebook.png')}
          />
          <Pressable onPress={googleSignInAttempt}>
            <Image
              style={styles.googleIconImage}
              source={require('../assets/Google.png')}
            />
          </Pressable>
          <Image
            style={styles.twitterIconImage}
            source={require('../assets/Twitter.png')}
          />
        </View>
      </View>
      <Text
        style={styles.forgotPasswordText}
        onPress={() => navigate('PasswordReset')}>
        Forgot Password?
      </Text>
      <Text style={styles.dontHaveAccountText}>
        {"Don't have an account?  "}
        <Text style={styles.signUpText} onPress={() => navigate('SignUp')}>
          Sign up
        </Text>
      </Text>
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
  logInContainer: {
    display: 'flex',
    backgroundColor: '#181818',
    opacity: 0.85,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 25,
    marginTop: -130,
  },
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  title: {
    color: '#FFFFFF',
    width: '60%',
    fontSize: 28,
    fontWeight: '900',
    alignSelf: 'flex-start',
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
  passwordContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
    marginTop: 25,
  },
  passwordIconImage: {
    width: 17,
    height: 22,
    marginLeft: 5,
    marginRight: 10,
  },
  logInButton: {
    alignSelf: 'center',
    backgroundColor: '#B99A5B',
    width: '100%',
    padding: 10,
    borderRadius: 100,
    marginTop: 40,
  },
  logInButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  oAuthContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 30,
  },
  oAuthText: {
    color: '#E7E7E7',
    marginRight: 20,
    alignItems: 'center',
  },
  facebookIconImage: {
    width: 37,
    height: 37,
    marginRight: 20,
  },
  googleIconImage: {
    width: 35,
    height: 36,
    marginRight: 20,
  },
  twitterIconImage: {
    width: 37,
    height: 37,
  },
  forgotPasswordText: {
    color: '#E7E7E7',
    alignSelf: 'flex-start',
    fontSize: 16,
    marginHorizontal: 30,
    marginVertical: 30,
  },
  dontHaveAccountText: {
    color: '#B99A5B',
    alignSelf: 'flex-start',
    fontSize: 16,
    marginHorizontal: 30,
  },
  signUpText: {
    color: '#E7E7E7',
    fontWeight: '700',
  },
  textInput: {
    color: 'white',
  },
});

export default LogIn;
