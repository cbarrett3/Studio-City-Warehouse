import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Pressable,
  Image,
  ScrollView,
  ImageBackground,
  Switch,
} from 'react-native';
import {Nav} from '../../types';
const {width, height} = Dimensions.get('window');
import {Auth} from 'aws-amplify';
import {useAuth} from '../../contexts/Auth';

const Settings: React.FC = () => {
  const {navigate} = useNavigation<Nav>();
  const auth = useAuth();
  const [hideProfileToggled, setHideProfileToggled] = useState(false);

  return (
    //  <View style={styles.container}>
    <ImageBackground
      style={styles.imageBackground}
      source={require('../assets/StudioCityBackgroundImage.png')}
      blurRadius={0}>
      <View style={styles.imageBackgroundBlurOverlay}>
        <View style={styles.topRowContainer}>
          <Pressable onPress={() => navigate('Profile')}>
            <Image
              style={styles.backIconImage}
              source={require('../assets/BackIcon.png')}
            />
          </Pressable>
          <Text style={styles.titleText}>Settings</Text>
          <>{<Text>''</Text>}</>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderText}>Personal Information</Text>
          </View>
          <View style={styles.standardSettingRowContainer}>
            <Text style={styles.leftItemText}>Phone Number</Text>
            <Text style={styles.rightItemText}>Verify Now</Text>
          </View>
          <View style={styles.standardSettingRowContainer}>
            <Text style={styles.leftItemText}>Email Address</Text>
            <Text style={styles.rightItemText}>Verify Now</Text>
          </View>
          <View style={styles.tinySubHeaderContainer}>
            <Text style={styles.tinySubHeaderText}>
              Verify a Phone Number and an Email to help secure your account
            </Text>
          </View>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderText}>Account Settings</Text>
          </View>
          <View style={styles.standardSettingRowContainer}>
            <Text style={styles.leftItemText}>Location</Text>
            <View>
              <Text style={styles.rightItemTopText}>My Current Location</Text>
              <Text style={styles.rightItemText}>Loading...</Text>
            </View>
          </View>
          {/* <View style={styles.standardSettingRowContainer}>
          <Text style={styles.leftItemText}>Show Me</Text>
          <Text style={styles.rightItemText}>Women</Text>
        </View> */}
          {/* <View style={styles.standardSettingRowContainer}>
          <Text style={styles.leftItemText}>Age Range</Text>
          <Text style={styles.rightItemText}>18-34</Text>
        </View> */}
          <View style={styles.standardSettingRowContainer}>
            <Text style={styles.leftItemText}>Hide me on Studio City</Text>
            {/* <Text style={styles.rightItemText}>Yes</Text> */}
            <Switch
              style={styles.rightItemSwitch}
              trackColor={{false: 'gray', true: 'rgb(40,40,40)'}}
              thumbColor={hideProfileToggled ? '#B99A5B' : '#B99A5B'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setHideProfileToggled(prev => !prev)}
              value={hideProfileToggled}
            />
          </View>
          <View style={styles.tinySubHeaderContainer}>
            <Text style={styles.tinySubHeaderText}>
              While turned on, you will not be shown in the discovery feed. You
              can still see and chat with your links
            </Text>
          </View>
          <Pressable onPress={() => auth.signOut()}>
            <Text style={styles.signOutItemText}>Sign Out</Text>
          </Pressable>
          <Text style={styles.deactivateItemText}>Deactivate Account</Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: width,
    height: height,
    backgroundColor: 'black',
  },
  imageBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: width,
    height: height,
  },
  imageBackgroundBlurOverlay: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.9,
  },
  topRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  titleText: {
    color: '#EAEAEA',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginRight: 30,
  },
  backIconImage: {
    width: 45,
    height: 45,
  },
  scrollView: {},
  sectionHeaderContainer: {},
  sectionHeaderText: {
    color: '#B99A5B',
    fontWeight: '600',
    paddingBottom: 10,
    borderBottomColor: '#141414',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  standardSettingRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#141414',
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  leftItemText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 20,
    textAlign: 'left',
  },
  rightItemText: {
    color: '#989898',
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 20,
    textAlign: 'right',
  },
  rightItemTopText: {
    color: 'whitesmoke',
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 20,
  },
  rightItemSwitch: {
    marginHorizontal: 20,
  },
  signOutItemText: {
    color: 'lightgray',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    marginHorizontal: 20,
    marginTop: 30,
  },
  deactivateItemText: {
    color: 'rgba(139,0,0, .75)',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  tinySubHeaderContainer: {
    marginVertical: 3,
  },
  tinySubHeaderText: {
    color: '#CECECE',
    fontSize: 12,
    textAlign: 'left',
    marginHorizontal: 20,
    marginVertical: 5,
    marginBottom: 20,
  },
});

export default Settings;
