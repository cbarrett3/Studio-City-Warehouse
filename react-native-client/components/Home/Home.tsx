/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable */
import React, {createRef, useState, useRef, ReactDOM} from 'react';
import { artistsData } from '../dummydata/artistsFeed';
import {Nav} from '../../types';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  ScrollView,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const Home: React.FC = () => {
  const {navigate} = useNavigation<Nav>();
  const horizontalFlatlistRef = useRef<FlatList<any>>(null);
  //   const horizontalFlatlistRefs = [];
  const refs = useRef([]);
  const [artists, setArtists] = useState(artistsData);

  const Content = ({item, index}) => (
    <>
      {item.type === 'profile' && (
        <ImageBackground
          style={styles.image}
          source={
            item.username === '@AmyAppleseed'
              ? require('../assets/Photographer-Example.png')
              : item.username === '@AdrianMadeIt'
              ? require('../assets/Producer-Example.png')
              : item.username === '@Palace'
              ? require('../assets/Palace.jpg')
              : require('../assets/Photographer-Example.png')
          }>
          <View style={styles.socialsContainer}>
            {'instagram' in item.socials[0] && (
              <Image
                style={styles.instagramIconImage}
                source={require('../assets/Instagram.png')}
              />
            )}
            {'twitter' in item.socials[0] && (
              <Image
                style={styles.twitterIconImage}
                source={require('../assets/Twitter.png')}
              />
            )}
            {'spotify' in item.socials[0] && (
              <Image
                style={styles.spotifyIconImage}
                source={require('../assets/Spotify.png')}
              />
            )}
            {'apple' in item.socials[0] && (
              <Image
                style={styles.appleIconImage}
                source={require('../assets/Apple.png')}
              />
            )}
            {'vsco' in item.socials[0] && (
              <Image
                style={styles.vscoIconImage}
                source={require('../assets/VSCO.png')}
              />
            )}
            {'facebook' in item.socials[0] && (
              <Image
                style={styles.facebookIconImage}
                source={require('../assets/Facebook.png')}
              />
            )}
          </View>
          <View style={styles.profileBottomCardContainer}>
            <View style={styles.topRowContainer}>
              <Text style={styles.usernameText}>
                {`${item.username}  `}
                <Image source={require('../assets/Star.png')} />
              </Text>
              <Image
                style={styles.linkIconImage}
                source={require('../assets/LinksBottomTabIcon.png')}
              />
            </View>
            <Text style={styles.titleText}>{`${item.title}  `}</Text>
            <Text style={styles.locationText}> {`📍${item.location}  `}</Text>
            <Text style={styles.quoteText}>{`${item.quote}`}</Text>
          </View>
        </ImageBackground>
      )}
      {item.type === 'photo' && (
        <ImageBackground
          style={styles.image}
          source={
            item.id === 1
              ? require('../assets/Yellowstone.png')
              : item.id === 2
              ? require('../assets/Wasatch.png')
              : require('../assets/Yellowstone.png')
          }>
          <View style={styles.photoBottomCardContainer}>
            <View style={styles.topRowContainer}>
              <Text style={styles.photoTitleText}>{`${item.title}  `}</Text>
              <Image
                style={styles.heartIconImage}
                source={require('../assets/HeartIcon.png')}
              />
            </View>
            <View style={styles.secondRowContainer}>
              <Text style={styles.photoCaptionText}>{item.caption}</Text>
              <Image
                style={styles.shareIconImage}
                source={require('../assets/ShareIcon.png')}
              />
            </View>
          </View>
        </ImageBackground>
      )}
      {item.type === 'song' && (
        <ImageBackground
          style={styles.image}
          source={
            item.id === 1 && item.username === '@AdrianMadeIt'
              ? require('../assets/5AMInHouston.png')
              : item.id === 2 && item.username === '@AdrianMadeIt'
              ? require('../assets/DancingInMyCity.png')
              : item.id === 3 && item.username === '@AdrianMadeIt'
              ? require('../assets/WhatsPopping.png')
              : item.id === 1 && item.username === '@Palace'
              ? require('../assets/HeavenUpThere.jpg')
              : item.id === 2 && item.username === '@Palace'
              ? require('../assets/RunningWild.jpg')
              : require('../assets/Yellowstone.png')
          }>
          <View style={styles.songBottomCardContainer}>
            <View style={styles.topRowContainer}>
              <Text style={styles.songTitleText}>{`${item.title}  `}</Text>
            </View>
            <View style={styles.songSecondRowContainer}>
              <Text style={styles.songCaptionText}>{item.caption}</Text>
            </View>
          </View>
        </ImageBackground>
      )}
    </>
  );
  const Artist = ({item, index}) => (
    <>
      {console.log(item, index)}
      <FlatList
        data={item.content}
        horizontal
        renderItem={({item, index}) => <Content item={item} index={index} />}
        showsHorizontalScrollIndicator={true}
        snapToInterval={width}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        pagingEnabled={true}
        keyExtractor={(item, index) => item.id}
        ref={item => {
          refs.current[index] = item;
        }}
      />
      <View style={styles.usernameTopTextContainer}>
        <Text
          style={styles.usernameTopText}
          onPress={e => {
            refs.current[index]!.scrollToIndex({
              animated: true,
              index: 0,
            });
          }}>
          {item.content[0].username}
        </Text>
      </View>
      {/* <View style={styles.contentProgressBar} />
      <View style={styles.dots}>
         {item.content &&
         item.content.map(item => (
            <View style={styles.contentProgressDot} />
         ))}
      </View> */}
    </>
  );

  return (
    <>
      <FlatList
        data={artists}
        renderItem={({item, index}) => <Artist item={item} index={index} />}
        showsVerticalScrollIndicator={true}
        snapToInterval={height - 84}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        pagingEnabled={true}
      />
      <View style={styles.headerIcons}>
        <Pressable onPress={() => navigate('Filter')}>
          <Image
            style={styles.filterIconImage}
            source={require('../assets/Filter.png')}
          />
        </Pressable>
        <Pressable onPress={() => navigate('Search')}>
          <Image
            style={styles.searchIconImage}
            source={require('../assets/Search.png')}
          />
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerIcons: {
    position: 'absolute',
  },
  filterIconImage: {
    position: 'absolute',
    width: 24,
    height: 24,
    left: 25,
    marginTop: 25,
  },
  searchIconImage: {
    position: 'absolute',
    width: 28,
    height: 28,
    left: width - 55,
    marginTop: 25,
  },
  profileBottomCardContainer: {
    position: 'absolute',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.35)',
    bottom: 0,
    height: 150,
    width: '95%',
    borderRadius: 7,
   //  borderWidth: 0.5,
    borderColor: 'gray', // gold outline if linked
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  photoBottomCardContainer: {
    position: 'absolute',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.85)',
    bottom: 0,
    height: 140,
    width: '95%',
    borderRadius: 7,
    borderColor: 'red',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 20,
  },
  songBottomCardContainer: {
    position: 'absolute',
    display: 'flex',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.85)',
    bottom: 0,
    height: 200,
    width: '95%',
    borderRadius: 7,
   //  borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  topRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkIconImage: {
    width: 35,
    height: 35,
  },
  usernameText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  titleText: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: '600',
    marginTop: -10,
  },
  locationText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '700',
    marginLeft: -4,
    marginTop: 8,
  },
  quoteText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '400',
    fontStyle: 'italic',
    textAlign: 'left',
    marginTop: 10,
  },
  image: {
    height: height - 84,
    width: width,
  },
  heartIconImage: {
    width: 26,
    height: 22,
  },
  shareIconImage: {
    width: 23,
    height: 23,
    opacity: 0.75,
  },
  photoTitleText: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  songTitleText: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  secondRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  songSecondRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  photoCaptionText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '400',
    width: '90%',
  },
  songCaptionText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '400',
    width: '90%',
  },
  usernameTopTextContainer: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 27,
  },
  usernameTopText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '700',
    opacity: 0.75,
  },
  socialsContainer: {
    position: 'absolute',
    display: 'flex',
    alignSelf: 'flex-end',
    flexDirection: 'column-reverse',
    bottom: 0,
    marginBottom: 180,
    right: 20,
  },
  facebookIconImage: {
    width: 37,
    height: 37,
    marginVertical: 8,
    opacity: 0.5,
  },
  instagramIconImage: {
    width: 35,
    height: 36,
    marginVertical: 8,
    opacity: 0.5,
  },
  twitterIconImage: {
    width: 33,
    height: 28,
    marginVertical: 8,
    opacity: 0.5,
  },
  vscoIconImage: {
    width: 35,
    height: 36,
    marginVertical: 8,
    opacity: 0.5,
  },
  spotifyIconImage: {
    width: 34,
    height: 34,
    marginVertical: 8,
    opacity: 0.5,
  },
  appleIconImage: {
    width: 32,
    height: 38,
    marginVertical: 8,
    opacity: 0.5,
  },
  contentProgressBar: {
    position: 'absolute',
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    bottom: 0,
    marginBottom: 20,
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'flex-end',
    width: width * 0.9,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 80,
  },
  contentProgressDot: {
    position: 'absolute',
    borderColor: 'white',
    borderWidth: 3,
    bottom: 0,
    backgroundColor: 'white',
    marginBottom: 15,
    // display: 'flex',
    // alignSelf: 'center',
    // alignItems: 'flex-end',
    width: width * 0.03,
    height: width * 0.03,
    borderRadius: 30,
    opacity: 0.75,
  },
  //   contentProgressDots: {
  //     position: 'absolute',
  //     display: 'flex',
  //     alignSelf: 'center',
  //     borderRadius: 100,
  //     width: 400,
  //     height: 50,
  //     color: 'white',
  //     bottom: 0,
  //     marginBottom: 20,
  //   },
});

export default Home;
