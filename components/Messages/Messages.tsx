import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  Modal,
  Alert,
} from 'react-native';
import {create} from 'react-test-renderer';
import {Nav} from '../../types';
import {conversations} from '../dummydata/conversations';
import {artistsSearchData} from '../dummydata/artistsSearch';
const {width, height} = Dimensions.get('window');

const Messages: React.FC = () => {
  const {navigate} = useNavigation<Nav>();
  const [createMessageMode, setCreateMessageMode] = useState(false);

  const ConversationPreview = (item, index) => (
    <View style={styles.conversationPreviewContainer}>
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
            item.item.username === '@DogCreation'
              ? require('../assets/DogCreation.jpg')
              : item.item.username === '@Cannons'
              ? require('../assets/Cannons.jpg')
              : ''
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
          {/* <Text style={styles.usernameText}>{item.item.username}</Text> */}
          {item.item.latestMessagesCount !== 0 ? (
            <Text style={styles.latestMessageUnreadText}>
              {item.item.latestMessage}
            </Text>
          ) : (
            <Text style={styles.latestMessageReadText}>
              {item.item.latestMessage}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.thirdColumnContainer}>
        <Text style={styles.timeText}>{item.item.latestMessageDateTime}</Text>
        {item.item.latestMessagesCount !== 0 && (
          <View style={styles.newMessageIconContainer}>
            <Text style={styles.newMessageIconText}>
              {item.item.latestMessagesCount}
            </Text>
          </View>
        )}
        {item.item.latestMessagesCount === 0 &&
          item.item.latestMessageDelivered && (
            <Image
              style={styles.deliveredIconImage}
              source={require('../assets/Delivered.png')}
            />
          )}
      </View>
    </View>
  );

  const NewMessageUserPreview = (item, index) => (
    <View style={styles.userPreviewContainer}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Image
          style={{
            width: width * 0.12,
            height: width * 0.12,
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
        </View>
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
          <Pressable
            onPress={() =>
              setCreateMessageMode(
                prevCreateNewMessageMode => !prevCreateNewMessageMode,
              )
            }>
            <Image
              style={styles.createNewMessageIconImage}
              source={require('../assets/CreateNewMessage.png')}
            />
          </Pressable>
        </View>
        <FlatList
          data={conversations}
          renderItem={({item, index}) => (
            <Pressable onPress={() => navigate('Conversation')}>
              <ConversationPreview item={item} index={index} />
            </Pressable>
          )}
          showsVerticalScrollIndicator={true}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={createMessageMode}
        onRequestClose={() => {
          Alert.alert('Create Message Modal Closed.');
          setCreateMessageMode(!createMessageMode);
        }}>
        <View style={styles.createNewMessageModalContainer}>
          <View style={styles.createNewMessageModalTopRowContainer}>
            <Text style={styles.createNewMessageText}>New Message</Text>
            <Pressable
              onPress={() => {
                setCreateMessageMode(!createMessageMode);
              }}>
              <Image
                style={styles.closeIconImage}
                source={require('../assets/Close.png')}
              />
            </Pressable>
          </View>
          <View style={styles.topHeaderContainer}>
            <View style={styles.searchBarContainer}>
              <Image
                style={styles.searchIconImage}
                source={require('../assets/Search.png')}
              />
              <TextInput
                style={styles.searchBarText}
                placeholder="Search by name or username"
                placeholderTextColor="#383838"
                maxLength={50}
                enablesReturnKeyAutomatically={true}
              />
            </View>
          </View>
          <FlatList
            data={artistsSearchData}
            renderItem={({item, index}) => (
              <Pressable onPress={() => navigate('Conversation')}>
                <NewMessageUserPreview item={item} index={index} />
              </Pressable>
            )}
            showsVerticalScrollIndicator={true}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
          />
        </View>
      </Modal>
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
  createNewMessageIconImage: {
    alignSelf: 'center',
    marginLeft: 15,
    marginRight: 7,
  },

  conversationPreviewContainer: {
    width: width,
    height: 85,
    borderBottomWidth: 0.3,
    borderBottomColor: 'gray',
    display: 'flex',
    flexDirection: 'row',
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
    fontWeight: '400',
  },
  latestMessageReadText: {
    color: '#707070',
    fontSize: 12,
    marginTop: 5,
    fontWeight: '400',
  },
  latestMessageUnreadText: {
    color: 'whitesmoke',
    fontSize: 13,
    marginTop: 5,
    fontWeight: '400',
  },
  thirdColumnContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    maxWidth: width * 0.4,
    alignItems: 'flex-end',
  },
  timeText: {
    color: 'gray',
    fontSize: 12,
  },
  newMessageIconContainer: {
    display: 'flex',
    borderRadius: 100,
    backgroundColor: '#B99A5B',
    height: 22,
    width: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  newMessageIconText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '500',
    marginBottom: 2,
  },
  deliveredIconImage: {
    width: 25,
    height: 13.5,
    marginTop: 15,
  },

  createNewMessageModalContainer: {
    flex: 1,
    width: width,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignSelf: 'center',
    marginTop: height * 0.025,
  },
  createNewMessageModalTopRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 8,
    paddingTop: 10,
    borderBottomWidth: 0.75,
    borderBottomColor: '#383838',
  },
  createNewMessageText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  closeIconImage: {
    width: 38,
    height: 38,
  },
  userPreviewContainer: {
    width: width,
    height: 65,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },
});

export default Messages;
