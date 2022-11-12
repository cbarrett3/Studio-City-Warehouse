/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Nav} from '../../types';
import {userData} from '../dummydata/userData';
import {artistsSearchData} from '../dummydata/artistsSearch';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  Pressable,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const Search: React.FC = () => {
  const {navigate} = useNavigation<Nav>();
  const [artists, setArtists] = useState(artistsSearchData);

  const ArtistPreview = (item, index) => (
    <View style={styles.artistResultContainer}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Image
          style={{
            width: width * 0.18,
            height: width * 0.18,
            borderRadius: 50,
            borderColor: '#B99A5B',
            borderWidth: 2,
          }}
          source={
            item.item.username === '@AdrianMadeIt'
              ? require('../assets/Producer-Example.png')
              : item.item.username === '@AmyAppleseed'
              ? require('../assets/Photographer-Example.png')
              : item.item.username === '@AdrianMadeIt'
              ? require('../assets/WhatsPopping.png')
              : item.item.username === '@Palace'
              ? require('../assets/Palace.jpg')
              : item.item.username === '@DogCreation'
              ? require('../assets/DogCreation.jpg')
              : item.item.username === '@JonnyDrums'
              ? require('../assets/Drummer.jpg')
              : item.item.username === '@Cannons'
              ? require('../assets/Cannons.jpg')
              : require('../assets/Yellowstone.png')
          }
        />
        <View style={styles.secondColumnContainer}>
          <Text style={styles.nameText}>
            {`${item.item.name} `}
            {item.item.verified === true && (
              <Image
                style={styles.starIconImage}
                source={require('../assets/Star.png')}
              />
            )}
          </Text>
          <Text style={styles.usernameText}>{item.item.username}</Text>
          <Text style={styles.locationText}>📍{item.item.location}</Text>
          <Text style={styles.distanceAwayText}>
            {Math.abs(Math.round(
              item.item.geolocation.longitude - userData.content[0].geolocation.longitude,
            ) * 15)}{' miles away'}
          </Text>
        </View>
      </View>
      <View style={styles.thirdColumnContainer}>
        <Text style={styles.titleText}>{item.item.title}</Text>
        {item.item.connected ? (
          <Image
            style={styles.linkIconImage}
            source={require('../assets/Linked.png')}
          />
        ) : (
          <Image
            style={styles.linkIconImage}
            source={require('../assets/Link.png')}
          />
        )}
      </View>
    </View>
  );

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require('../assets/StudioCityBackgroundImage.png')}
      blurRadius={0}>
      <View style={styles.imageBackgroundBlurOverlay}>
        <View style={styles.topHeaderContainer}>
          <Pressable onPress={() => navigate('Home')}>
            <Image
              style={styles.backIconImage}
              source={require('../assets/BackIcon.png')}
            />
          </Pressable>
          <View style={styles.searchBarContainer}>
            <Image
              style={styles.searchIconImage}
              source={require('../assets/Search.png')}
            />
            <TextInput
              style={styles.searchBarText}
              placeholder="Search"
              placeholderTextColor="#383838"
              maxLength={50}
              enablesReturnKeyAutomatically={true}
            />
          </View>
        </View>
        <View style={styles.sortRowContainer}>
          <Text style={styles.sortLabelText}>Sort by:</Text>
          <Text style={styles.sortValueText}>Location</Text>
        </View>
        <FlatList
          data={artists}
          renderItem={({item, index}) => (
            <ArtistPreview item={item} index={index} />
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
    opacity: 0.90,
  },
  topHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  backIconImage: {
    width: 45,
    height: 45,
  },
  searchBarContainer: {
    flex: 1,
    height: 45,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#191919',
    borderRadius: 25,
    borderColor: '#383838',
    borderWidth: 0.1,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  searchIconImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchBarText: {
    fontSize: 16,
    fontWeight: '600',
    width: '100%',
    color: 'white',
  },
  sortRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 5,
    alignItems: 'center',
  },
  sortLabelText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  sortValueText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 15,
    marginHorizontal: 10,
  },
  arrowDownIconImage: {
    width: 12,
    height: 11,
    marginTop: 1,
  },
  artistResultContainer: {
    width: width,
    height: 85,
    borderBottomWidth: 0.3,
    borderBottomColor: 'gray',
    display: 'flex',
    flexDirection: 'row',
    //  alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 7,
  },
  secondColumnContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: width * 0.5,
    marginHorizontal: 10,
  },
  nameText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  starIconImage: {
    width: 13,
    height: 11,
  },
  usernameText: {
    color: '#707070',
    fontSize: 10,
  },
  locationText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginLeft: -4,
    marginTop: 3,
  },
  distanceAwayText: {
   color: '#707070',
   fontSize: 10,
   marginTop: 3,
   marginLeft: 1,
   fontWeight: '400',
  },
  thirdColumnContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    maxWidth: width * 0.4,
    alignItems: 'flex-end',
  },
  titleText: {
    color: '#B99A5B',
    fontSize: 12,
  },
  linkIconImage: {
    width: 30,
    height: 23,
    justifyContent: 'flex-end',
  },
});

export default Search;
