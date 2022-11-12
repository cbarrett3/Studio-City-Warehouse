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
  Pressable,
  Dimensions,
} from 'react-native';
import {useAuth} from '../../contexts/Auth';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const SignUp: React.FC = () => {
  const {navigate} = useNavigation<Nav>();
  const {signUp, confirmSignUp} = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [authCode, setAuthCode] = React.useState('');
  const [authStep, setAuthStep] = React.useState(0);

  const signUpAttempt = async (): Promise<void> => {
    setLoading(true);
    let signedUp = await signUp(email, username, password);
    if (signedUp === true) {
      setAuthStep(1);
    } else {
      console.log(
        'sign up not working, or account already exists, etc.',
      );
    }
    setLoading(false);
  };

  const signUpConfirmationCheck = async (): Promise<void> => {
    setLoading(true);
    let confirmed = await confirmSignUp(username, authCode);
    if (confirmed === true) {
      navigate('LogIn');
    }
    else {
      console.log(
         'confirmation code not correct, or similar error, try again, resend email...',
       );
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
        source={require('../assets/SignUpBanner.png')}
      />
      {authStep === 0 ? (
        <View style={styles.signUpContainer}>
          <Text style={styles.title}>Create your account</Text>
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
              value={email}
              onChangeText={setEmail}
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
            style={styles.signUpButton}
            //  onPress={() => Alert.alert('Signing Up')}
            onPress={() => {
              signUpAttempt();
            }}
            accessibilityLabel="Sign Up Button">
            <Text style={styles.signUpButtonText}>Sign up</Text>
          </Pressable>
          <View style={styles.oAuthContainer}>
            <Text style={styles.oAuthText}>Or register with</Text>
            <Image
              style={styles.facebookIconImage}
              source={require('../assets/Facebook.png')}
            />
            <Image
              style={styles.googleIconImage}
              source={require('../assets/Google.png')}
            />
            <Image
              style={styles.twitterIconImage}
              source={require('../assets/Twitter.png')}
            />
          </View>
        </View>
      ) : (
        <View style={styles.signUpContainer}>
          <Text style={styles.title}>Enter Confirmation Code</Text>
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
          <View style={styles.emailContainer}>
            <Image
              style={styles.emailIconImage}
              source={require('../assets/EmailIcon.png')}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Auth Code"
              placeholderTextColor="#E7E7E7"
              enablesReturnKeyAutomatically={true}
              value={authCode}
              onChangeText={setAuthCode}
            />
          </View>
          <Pressable
            style={styles.signUpButton}
            onPress={() => signUpConfirmationCheck()}
            accessibilityLabel="Confirm Sign Up Button">
            <Text style={styles.signUpButtonText}>Email Verification Code</Text>
          </Pressable>
        </View>
      )}
      <Text style={styles.alreadyHaveAccountText}>
        {'Already have an account?  '}
        <Text style={styles.logInText} onPress={() => navigate('LogIn')}>
          Log in
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
  signUpContainer: {
    display: 'flex',
    backgroundColor: '#181818',
    opacity: 0.85,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 25,
    marginTop: 1,
  },
  title: {
    color: '#FFFFFF',
    width: '60%',
    fontSize: 28,
    fontWeight: '900',
    alignSelf: 'flex-start',
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
  signUpButton: {
    alignSelf: 'center',
    backgroundColor: '#B99A5B',
    width: '100%',
    padding: 10,
    borderRadius: 100,
    marginTop: 40,
  },
  signUpButtonText: {
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
  alreadyHaveAccountText: {
    color: '#B99A5B',
    alignSelf: 'flex-start',
    fontSize: 16,
    marginHorizontal: 30,
    marginVertical: 18,
  },
  logInText: {
    color: '#E7E7E7',
    fontWeight: '700',
  },
  textInput: {
    color: 'white',
  },
});

export default SignUp;
