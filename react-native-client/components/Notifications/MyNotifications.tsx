import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Nav} from '../../types';
import {myNotifications} from '../dummydata/myNotifications';
const {width, height} = Dimensions.get('window');

const Notification = (item, index) => (
  <View style={styles.notificationContainer}>
    <Image
      style={{
        width: width * 0.12,
        height: width * 0.12,
        borderRadius: 50,
        borderColor: '#B99A5B',
        borderWidth: 2,
      }}
      source={
        item.item.about === '@AdrianMadeIt'
          ? require('../assets/Producer-Example.png')
          : item.item.about === '@AmyAppleseed'
          ? require('../assets/Photographer-Example.png')
          : item.item.about === '@AdrianMadeIt'
          ? require('../assets/WhatsPopping.png')
          : item.item.about === '@Palace'
          ? require('../assets/Palace.jpg')
          : item.item.about === '@DogCreation'
          ? require('../assets/DogCreation.jpg')
          : item.item.about === '@JonnyDrums'
          ? require('../assets/Drummer.jpg')
          : item.item.about === '@Cannons'
          ? require('../assets/Cannons.jpg')
          : ''
      }
    />
    <Text style={styles.notificationMessageText}>
       <Text style={styles.notificationMessageUserText}>
          {item.item.about}
      </Text>
      {` ${item.item.message}`}
      <Text style={styles.notificationMessageTimestampText}>
       {` ${item.item.timestamp} `}
      </Text>
    </Text>
  </View>
);

const MyNotifications: React.FC = () => {
  const {navigate} = useNavigation<Nav>();
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require('../assets/StudioCityBackgroundImage.png')}
      blurRadius={0}>
      <View style={styles.imageBackgroundBlurOverlay}>
        <Text style={styles.sectionTitleText}>Today</Text>
        <FlatList
          data={myNotifications}
          renderItem={({item, index}) => (
            <Notification item={item} index={index} />
          )}
          showsVerticalScrollIndicator={true}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
  sectionTitleText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'left',
    padding: 15,
    borderTopWidth: 0.25,
    borderTopColor: '#383838',
  },
  notificationContainer: {
    height: 65,
    width: width,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  notificationMessageText: {
   color: 'gray',
   marginLeft: 10,
   fontSize: 13,
  },
  notificationMessageUserText: {
   color: 'white',
   fontSize: 14,
   fontWeight: '500',
  },
  notificationMessageTimestampText: {
     color: 'gray',
     fontWeight: '500',
     fontSize: 14,
     flex: 1,
     textAlign: 'right'
  }
});

export default MyNotifications;
