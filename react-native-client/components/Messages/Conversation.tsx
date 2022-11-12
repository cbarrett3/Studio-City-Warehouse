import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {conversationData} from '../dummydata/conversationData';
import {Nav} from '../../types';
const {width, height} = Dimensions.get('window');

const Message = (item, index) => (
  <>
    {item.item.from !== '@Yeat' ? (
      <View style={styles.leftMessageContainer}>
        <Image
          style={{
            width: width * 0.08,
            height: width * 0.08,
            borderRadius: 50,
            borderColor: '#B99A5B',
            borderWidth: 2,
          }}
          source={require('../assets/DogCreation.jpg')}
        />
        <Text style={styles.leftMessageText}>{item.item.message}</Text>
      </View>
    ) : (
      <View style={styles.rightMessageContainer}>
        <Text style={styles.rightMessageText}>{item.item.message}</Text>
      </View>
    )}
  </>
);

const Conversation: React.FC = () => {
  const {navigate} = useNavigation<Nav>();
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require('../assets/StudioCityBackgroundImage.png')}
      blurRadius={0}>
      <View style={styles.imageBackgroundBlurOverlay}>
        <View style={styles.topHeaderContainer}>
          <Pressable onPress={() => navigate('Messages')}>
            <Image
              style={styles.backIconImage}
              source={require('../assets/BackIcon.png')}
            />
          </Pressable>
          <Image
            style={{
              width: width * 0.09,
              height: width * 0.09,
              borderRadius: 50,
              borderColor: '#B99A5B',
              borderWidth: 2,
            }}
            source={
              conversationData[0].from === '@DogCreation'
                ? require('../assets/DogCreation.jpg')
                : conversationData[0].from === '@Cannons'
                ? require('../assets/Cannons.jpg')
                : ''
            }
          />
          <View
            style={{display: 'flex', flexDirection: 'column', marginLeft: 5}}>
            <Text style={{color: 'white', fontSize: 14}}>Dog Creation</Text>
            <Text style={{color: 'gray', fontSize: 10, fontWeight: '400'}}>
              {conversationData[0].from}
            </Text>
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              <FlatList
                style={styles.messagesContainer}
                data={conversationData}
                renderItem={({item, index}) => (
                  <Message item={item} index={index} />
                )}
                showsVerticalScrollIndicator={true}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
              />
              <View style={styles.typeBoxContainer}>
                <TextInput
                  style={styles.searchBarText}
                  placeholder="Message"
                  placeholderTextColor="#383838"
                  maxLength={500}
                  enablesReturnKeyAutomatically={true}
                />
                <Image
                  style={styles.micIconImage}
                  source={require('../assets/Mic.png')}
                />
                <Image
                  style={styles.imageIconImage}
                  source={require('../assets/Image.png')}
                />
                <Image
                  style={styles.fileIconImage}
                  source={require('../assets/File.png')}
                />
              </View>
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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
  topHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: '#151515',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    marginTop: 15,
  },
  backIconImage: {
    width: 45,
    height: 45,
    marginLeft: 10,
  },
  messagesContainer: {
    marginBottom: height * 0.02,
    borderBottomColor: '#151515',
    borderBottomWidth: 0.75,
  },
  leftMessageContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  leftMessageText: {
    color: 'white',
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: 'grey',
  },
  rightMessageContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  rightMessageText: {
    backgroundColor: '#D4AE5F',
    color: 'white',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 100,
    borderWidth: 1,
    textAlign: 'right',
    width: 'auto',
  },
  typeBoxContainer: {
    marginBottom: height * 0.125,
    height: 40,
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
  micIconImage: {
    width: 15,
    height: 24,
    marginRight: 12,
  },
  imageIconImage: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  fileIconImage: {
    width: 16,
    height: 21,
  },
  searchBarText: {
    fontSize: 16,
    fontWeight: '600',
    width: '75%',
    color: 'white',
  },
});

export default Conversation;
