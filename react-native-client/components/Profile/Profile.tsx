import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  Image,
  FlatList,
  Pressable,
  Modal,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import {userData} from '../dummydata/userData';
import {
  NavigationHelpersContext,
  useNavigation,
} from '@react-navigation/native';
import {Nav} from '../../types';
const {width, height} = Dimensions.get('window');

const Profile = () => {
  const [editProfileMode, setEditProfileMode] = useState(false);
  const [editContentMode, setEditContentMode] = useState(false);
  const [editProfileInfoMode, setEditProfileInfoMode] = useState(false);
  const [editContentItemMode, setEditContentItemMode] = useState(false);
  const [editPhotoMode, setEditPhotoMode] = useState(false);
  const [editSongMode, setEditSongMode] = useState(false);
  const [editVideoMode, setEditVideoMode] = useState(false);
  const [editContentIndex, setEditContentIndex] = useState(0);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const refs = useRef([]);
  const {navigate} = useNavigation<Nav>();

  const Content = ({item, index}) => (
    <>
      {item.type === 'profile' && (
        <ImageBackground
          style={styles.image}
          source={require('../assets/YEAT.jpg')}>
          <Pressable
            style={styles.editProfileButton}
            onPress={() =>
              setEditProfileMode(prevEditProfileMode => !prevEditProfileMode)
            }>
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </Pressable>
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
          <View style={styles.linksCountContainer}>
            <Text style={styles.linksCountNumberText}>
              {`${29}`} <Text style={styles.linksCountLabelText}>links</Text>{' '}
            </Text>
          </View>
          <View style={styles.profileBottomCardContainerHome}>
            <View style={styles.topRowContainer}>
              <Text style={styles.usernameText}>{item.username}</Text>
              <Image
                style={styles.starIconImage}
                source={require('../assets/Star.png')}
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
            item.id === 1
              ? require('../assets/SorryBoutThat.jpg')
              : item.id === 2
              ? require('../assets/Poppin.jpeg')
              : item.id === 3
              ? require('../assets/UCouldTell.jpg')
              : require('../assets/YEAT.jpg')
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

  return (
    <>
      {editProfileMode && !editContentMode && (
        <>
          <ImageBackground
            style={styles.image}
            source={require('../assets/YEAT.jpg')}
            blurRadius={10}>
            <View style={styles.imageBackgroundBlurOverlay}></View>
          </ImageBackground>
          <Pressable
            style={styles.editProfileButton}
            onPress={() =>
              setEditProfileMode(prevEditProfileMode => !prevEditProfileMode)
            }>
            <Text style={styles.editProfileButtonText}>Save Profile</Text>
          </Pressable>
          <Pressable style={styles.changeProfilePictureButton}>
            <Text style={styles.changeProfilePictureButtonText}>
              {`Change Profile Picture  `}
              <Image
                style={styles.changeProfilePictureIconImage}
                source={require('../assets/EditContentPencil.png')}
              />
            </Text>
          </Pressable>
          <Pressable
            style={styles.editContentButtonContainer}
            onPress={() => {
              console.log('edit content');
              setEditContentMode(prevEditConentMode => !prevEditConentMode);
            }}>
            <Image
              style={styles.editContentIconImage}
              source={require('../assets/EditContentPencil.png')}
            />
            <Text style={styles.editContentText}>Edit Content</Text>
          </Pressable>
          <View style={styles.socialsContainer}>
            {'instagram' in userData.content[0].socials[0] && (
              <Image
                style={styles.instagramIconImage}
                source={require('../assets/Instagram.png')}
              />
            )}
            {'twitter' in userData.content[0].socials[0] && (
              <Image
                style={styles.twitterIconImage}
                source={require('../assets/Twitter.png')}
              />
            )}
            {'spotify' in userData.content[0].socials[0] && (
              <Image
                style={styles.spotifyIconImage}
                source={require('../assets/Spotify.png')}
              />
            )}
            {'apple' in userData.content[0].socials[0] && (
              <Image
                style={styles.appleIconImage}
                source={require('../assets/Apple.png')}
              />
            )}
            {'vsco' in userData.content[0].socials[0] && (
              <Image
                style={styles.vscoIconImage}
                source={require('../assets/VSCO.png')}
              />
            )}
            {'facebook' in userData.content[0].socials[0] && (
              <Image
                style={styles.facebookIconImage}
                source={require('../assets/Facebook.png')}
              />
            )}
            <Image
              style={styles.editSocialsIconImage}
              source={require('../assets/EditContentPencil.png')}
            />
          </View>
          <View style={styles.linksCountContainer}>
            <Text style={styles.linksCountNumberText}>
              {`${29}`} <Text style={styles.linksCountLabelText}>links</Text>{' '}
            </Text>
          </View>
          <View style={styles.profileBottomCardContainer}>
            <View style={styles.topRowContainer}>
              <Text style={styles.usernameText}>
                {userData.content[0].username}
              </Text>
              <Image
                style={styles.starIconImage}
                source={require('../assets/Star.png')}
              />
            </View>
            <Text
              style={styles.titleText}>{`${userData.content[0].title}  `}</Text>
            <Text style={styles.locationText}>
              {' '}
              {`📍${userData.content[0].location}  `}
            </Text>
            <Text
              style={styles.quoteText}>{`${userData.content[0].quote}`}</Text>
          </View>
        </>
      )}
      {editProfileMode && editContentMode && (
        <>
          <ImageBackground
            style={styles.image}
            source={require('../assets/YEAT.jpg')}
            blurRadius={30}>
            <View style={styles.imageBackgroundBlurOverlay}></View>
          </ImageBackground>
          <Pressable
            style={styles.editProfileButton}
            onPress={() =>
              setEditContentMode(prevEditContentMode => !prevEditContentMode)
            }>
            <Text style={styles.editProfileButtonText}>Save Content</Text>
          </Pressable>
          <View style={styles.editContentImagesContainer}>
            <ImageBackground
              style={styles.editContentImage}
              source={require('../assets/SorryBoutThat.jpg')}>
              <View style={styles.editContentImageBlurOverlay}>
                <Pressable
                  onPress={() =>
                    userData.content[1].type === 'photo'
                      ? (setEditPhotoMode(!editPhotoMode),
                        setEditContentIndex(1))
                      : userData.content[1].type === 'song'
                      ? (setEditSongMode(!editSongMode), setEditContentIndex(1))
                      : userData.content[1].type === 'video'
                      ? (setEditVideoMode(!editVideoMode),
                        setEditContentIndex(1))
                      : (setEditContentItemMode(!editContentItemMode),
                        setEditContentIndex(1))
                  }>
                  <Image
                    style={styles.editContentIconImage}
                    source={require('../assets/EditContentPencil.png')}
                  />
                </Pressable>
              </View>
            </ImageBackground>
            <ImageBackground
              style={styles.editContentImage}
              source={require('../assets/Poppin.jpeg')}>
              <View style={styles.editContentImageBlurOverlay}>
                <Pressable
                  onPress={() =>
                    userData.content[2].type === 'photo'
                      ? (setEditPhotoMode(!editPhotoMode),
                        setEditContentIndex(2))
                      : userData.content[2].type === 'song'
                      ? (setEditSongMode(!editSongMode), setEditContentIndex(2))
                      : userData.content[2].type === 'video'
                      ? (setEditVideoMode(!editVideoMode),
                        setEditContentIndex(2))
                      : (setEditContentItemMode(!editContentItemMode),
                        setEditContentIndex(3))
                  }>
                  <Image
                    style={styles.editContentIconImage}
                    source={require('../assets/EditContentPencil.png')}
                  />
                </Pressable>
              </View>
            </ImageBackground>
            <ImageBackground
              style={styles.editContentImage}
              source={require('../assets/UCouldTell.jpg')}>
              <View style={styles.editContentImageBlurOverlay}>
                {userData.content[3].type === 'song'}
                <Pressable
                  onPress={() =>
                    userData.content[3].type === 'photo'
                      ? (setEditPhotoMode(!editPhotoMode),
                        setEditContentIndex(3))
                      : userData.content[3].type === 'song'
                      ? (setEditSongMode(!editSongMode), setEditContentIndex(3))
                      : userData.content[3].type === 'video'
                      ? (setEditVideoMode(!editVideoMode),
                        setEditContentIndex(3))
                      : (setEditContentItemMode(!editContentItemMode),
                        setEditContentIndex(3))
                  }>
                  <Image
                    style={styles.editContentIconImage}
                    source={require('../assets/EditContentPencil.png')}
                  />
                </Pressable>
              </View>
            </ImageBackground>
            <View style={styles.editContentEmptyView}>
              <Pressable
                onPress={() => setEditContentItemMode(!editContentItemMode)}>
                <Image
                  style={styles.addContentIconImage}
                  source={require('../assets/Add.png')}
                />
              </Pressable>
            </View>
            <View style={styles.editContentEmptyView}>
              <Pressable
                onPress={() => setEditContentItemMode(!editContentItemMode)}>
                <Image
                  style={styles.addContentIconImage}
                  source={require('../assets/Add.png')}
                />
              </Pressable>
            </View>
            <View style={styles.editContentEmptyView}>
              <Pressable
                onPress={() => setEditContentItemMode(!editContentItemMode)}>
                <Image
                  style={styles.addContentIconImage}
                  source={require('../assets/Add.png')}
                />
              </Pressable>
            </View>
            <View style={styles.editContentEmptyView}>
              <Pressable
                onPress={() => setEditContentItemMode(!editContentItemMode)}>
                <Image
                  style={styles.addContentIconImage}
                  source={require('../assets/Add.png')}
                />
              </Pressable>
            </View>
            <View style={styles.editContentEmptyView}>
              <Pressable
                onPress={() => setEditContentItemMode(!editContentItemMode)}>
                <Image
                  style={styles.addContentIconImage}
                  source={require('../assets/Add.png')}
                />
              </Pressable>
            </View>
            <View style={styles.editContentEmptyView}>
              <Pressable
                onPress={() => setEditContentItemMode(!editContentItemMode)}>
                <Image
                  style={styles.addContentIconImage}
                  source={require('../assets/Add.png')}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.profileBottomCardContainer}>
            <View style={styles.profileBottomCardContainerOverlay}>
              <View style={styles.topRowContainer}>
                <Text style={styles.usernameText}>
                  {userData.content[0].username}
                </Text>
                <Image
                  style={styles.starIconImage}
                  source={require('../assets/Star.png')}
                />
              </View>
              <Text
                style={
                  styles.titleText
                }>{`${userData.content[0].title}  `}</Text>
              <Text style={styles.locationText}>
                {' '}
                {`📍${userData.content[0].location}  `}
              </Text>
              <Text
                style={styles.quoteText}>{`${userData.content[0].quote}`}</Text>
            </View>
          </View>
          {!keyboardVisible && (
            <Pressable
              style={styles.editProfileInfoButtonContainer}
              onPress={() => {
                console.log('edit profileInfo');
                setEditProfileInfoMode(prevEditProfileInfoMode => true);
              }}>
              <Image
                style={styles.editProfileInfoIconImage}
                source={require('../assets/EditContentPencil.png')}
              />
              <Text style={styles.editProfileInfoText}>Edit Profile Info</Text>
            </Pressable>
          )}
          <Modal
            animationType="slide"
            transparent={true}
            visible={editContentItemMode}
            onRequestClose={() => {
              Alert.alert('Content Item Modal Closed.');
              setEditProfileInfoMode(!editContentItemMode);
            }}>
            <View style={styles.editContentItemModalContainer}>
              <View style={styles.editContentItemModalTopRowContainer}>
                <Text style={styles.uploadNewText}>Upload New</Text>
                <Pressable
                  onPress={() => {
                    setEditContentItemMode(!editContentItemMode);
                    setEditContentIndex(0);
                  }}>
                  <Image
                    style={styles.closeIconImage}
                    source={require('../assets/Close.png')}
                  />
                </Pressable>
              </View>
              <View style={styles.editContentItemModalButtons}>
                <Pressable
                  style={[styles.button, styles.photoButton]}
                  onPress={() => {
                    setEditPhotoMode(!editPhotoMode);
                    setEditContentItemMode(!editContentItemMode);
                  }}>
                  {/* <Text style={styles.textStyle}>Photo</Text> */}
                  <Image
                    style={styles.photoIconImage}
                    source={require('../assets/Photo.png')}></Image>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.songButton]}
                  onPress={() => {
                    setEditSongMode(!editSongMode);
                    setEditContentItemMode(!editContentItemMode);
                  }}>
                  {/* <Text style={styles.textStyle}>Song</Text> */}
                  <Image
                    style={styles.songIconImage}
                    source={require('../assets/Song.png')}></Image>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.videoButton]}
                  onPress={() => {
                    setEditVideoMode(!editVideoMode);
                    setEditContentItemMode(!editContentItemMode);
                  }}>
                  {/* <Text style={styles.textStyle}>Video</Text> */}
                  <Image
                    style={styles.videoIconImage}
                    source={require('../assets/Video.png')}></Image>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={editPhotoMode}
            onRequestClose={() => {
              Alert.alert('Content Item Modal Closed.');
              setEditPhotoMode(!editPhotoMode);
            }}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.editPhotoModalContainer}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                  <View style={styles.editContentItemModalTopRowContainer}>
                    <Text style={styles.uploadNewText}>Upload Photo</Text>
                    <Pressable onPress={() => setEditPhotoMode(!editPhotoMode)}>
                      <Image
                        style={styles.closeIconImage}
                        source={require('../assets/Close.png')}
                      />
                    </Pressable>
                  </View>
                  {!keyboardVisible && editContentIndex === 0 && (
                    <Pressable>
                      <View style={styles.editPhotoEmptyView}>
                        <Image
                          style={styles.addPhotoIconImage}
                          source={require('../assets/Add.png')}
                        />
                        <Text style={styles.addPhotoText}>{`Add \nPhoto`}</Text>
                      </View>
                    </Pressable>
                  )}
                  {!keyboardVisible && editContentIndex !== 0 && (
                    <Text>fix this by showing selected image</Text>
                  )}
                  <View style={styles.editTitleModalContainer}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Title"
                      placeholderTextColor="#E7E7E7"
                      enablesReturnKeyAutomatically={true}
                    />
                  </View>
                  <View style={styles.editCaptionModalContainer}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Caption"
                      placeholderTextColor="#E7E7E7"
                      enablesReturnKeyAutomatically={true}
                    />
                  </View>
                </>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={editSongMode}
            onRequestClose={() => {
              Alert.alert('Edit Song Modal Closed.');
              setEditPhotoMode(!editSongMode);
            }}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.editSongModalContainer}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                  <View style={styles.editContentItemModalTopRowContainer}>
                    <Text style={styles.uploadNewText}>Upload Song</Text>
                    <Pressable
                      onPress={() => {
                        setEditSongMode(!editSongMode);
                        setEditContentIndex(0);
                      }}>
                      <Image
                        style={styles.closeIconImage}
                        source={require('../assets/Close.png')}
                      />
                    </Pressable>
                  </View>
                  {!keyboardVisible && (
                    <View style={styles.editSongEmptyViewsContainer}>
                      {editContentIndex === 0 ? (
                        <>
                          <Pressable>
                            <View style={styles.editSongEmptyView}>
                              <Image
                                style={styles.addPhotoIconImage}
                                source={require('../assets/Add.png')}
                              />
                              <Text
                                style={
                                  styles.addPhotoText
                                }>{`Add \nAudio`}</Text>
                            </View>
                          </Pressable>
                          <Pressable>
                            <View style={styles.editSongEmptyView}>
                              <Image
                                style={styles.addPhotoIconImage}
                                source={require('../assets/Add.png')}
                              />
                              <Text
                                style={
                                  styles.addPhotoText
                                }>{`Add \nArtwork`}</Text>
                            </View>
                          </Pressable>
                        </>
                      ) : (
                        <>
                          <Pressable>
                            <View style={styles.editSongEmptyView}>
                              {editContentIndex === 1 ? (
                                <ImageBackground
                                  style={styles.editPhotoIconImage}
                                  source={require('../assets/GoldSmoke.jpg')}
                                  blurRadius={0}>
                                  <View style={styles.changeImageBlurOverlay}>
                                    <Image
                                      style={styles.changePhotoIconImage}
                                      source={require('../assets/EditContentPencil.png')}
                                    />
                                    <Text style={styles.changePhotoText}>
                                      {`Change \nAudio`}
                                    </Text>
                                  </View>
                                </ImageBackground>
                              ) : editContentIndex === 2 ? (
                                <ImageBackground
                                  style={styles.editPhotoIconImage}
                                  source={require('../assets/GoldSmoke.jpg')}
                                  blurRadius={0}>
                                  <View style={styles.changeImageBlurOverlay}>
                                    <Image
                                      style={styles.changePhotoIconImage}
                                      source={require('../assets/EditContentPencil.png')}
                                    />
                                    <Text style={styles.changePhotoText}>
                                      {`Change \nAudio`}
                                    </Text>
                                  </View>
                                </ImageBackground>
                              ) : editContentIndex === 3 ? (
                                <ImageBackground
                                  style={styles.editPhotoIconImage}
                                  source={require('../assets/GoldSmoke.jpg')}
                                  blurRadius={0}>
                                  <View style={styles.changeImageBlurOverlay}>
                                    <Image
                                      style={styles.changePhotoIconImage}
                                      source={require('../assets/EditContentPencil.png')}
                                    />
                                    <Text style={styles.changePhotoText}>
                                      {`Change \nAudio`}
                                    </Text>
                                  </View>
                                </ImageBackground>
                              ) : (
                                <Image
                                  style={styles.addPhotoIconImage}
                                  source={require('../assets/Add.png')}
                                />
                              )}
                            </View>
                          </Pressable>
                          <Pressable>
                            <View style={styles.editSongEmptyView}>
                              {editContentIndex === 1 ? (
                                <ImageBackground
                                  style={styles.editPhotoIconImage}
                                  source={require('../assets/SorryBoutThat.jpg')}
                                  blurRadius={0}>
                                  <View style={styles.changeImageBlurOverlay}>
                                    <Image
                                      style={styles.changePhotoIconImage}
                                      source={require('../assets/EditContentPencil.png')}
                                    />
                                    <Text style={styles.changePhotoText}>
                                      {`Change \nArtwork`}
                                    </Text>
                                  </View>
                                </ImageBackground>
                              ) : editContentIndex === 2 ? (
                                <ImageBackground
                                  style={styles.editPhotoIconImage}
                                  source={require('../assets/Poppin.jpeg')}
                                  blurRadius={0}>
                                  <View style={styles.changeImageBlurOverlay}>
                                    <Image
                                      style={styles.changePhotoIconImage}
                                      source={require('../assets/EditContentPencil.png')}
                                    />
                                    <Text style={styles.changePhotoText}>
                                      {`Change \nArtwork`}
                                    </Text>
                                  </View>
                                </ImageBackground>
                              ) : editContentIndex === 3 ? (
                                <ImageBackground
                                  style={styles.editPhotoIconImage}
                                  source={require('../assets/UCouldTell.jpg')}
                                  blurRadius={0}>
                                  <View style={styles.changeImageBlurOverlay}>
                                    <Image
                                      style={styles.changePhotoIconImage}
                                      source={require('../assets/EditContentPencil.png')}
                                    />
                                    <Text style={styles.changePhotoText}>
                                      {`Change \nArtwork`}
                                    </Text>
                                  </View>
                                </ImageBackground>
                              ) : (
                                <Image
                                  style={styles.addPhotoIconImage}
                                  source={require('../assets/Add.png')}
                                />
                              )}
                            </View>
                          </Pressable>
                        </>
                      )}
                    </View>
                  )}
                  <View style={styles.editTitleModalContainer}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Title"
                      placeholderTextColor="#E7E7E7"
                      enablesReturnKeyAutomatically={true}
                    />
                  </View>
                  <View style={styles.editCaptionModalContainer}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Caption"
                      placeholderTextColor="#E7E7E7"
                      enablesReturnKeyAutomatically={true}
                    />
                  </View>
                </>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={editVideoMode}
            onRequestClose={() => {
              Alert.alert('Edit Video Modal Closed.');
              setEditPhotoMode(!editVideoMode);
            }}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.editVideoModalContainer}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                  <View style={styles.editContentItemModalTopRowContainer}>
                    <Text style={styles.uploadNewText}>Upload Video</Text>
                    <Pressable
                      onPress={() => {
                        setEditVideoMode(!editVideoMode);
                        setEditContentIndex(0);
                      }}>
                      <Image
                        style={styles.closeIconImage}
                        source={require('../assets/Close.png')}
                      />
                    </Pressable>
                  </View>
                  {!keyboardVisible && editContentIndex === 0 && (
                    <Pressable>
                      <View style={styles.editVideoEmptyView}>
                        <Image
                          style={styles.addPhotoIconImage}
                          source={require('../assets/Add.png')}
                        />
                        <Text style={styles.addPhotoText}>{`Add \nVideo`}</Text>
                      </View>
                    </Pressable>
                  )}
                  {!keyboardVisible && editContentIndex !== 0 && (
                    <Text>fix this by showing selected video</Text>
                  )}
                  <View style={styles.editTitleModalContainer}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Title"
                      placeholderTextColor="#E7E7E7"
                      enablesReturnKeyAutomatically={true}
                    />
                  </View>
                  <View style={styles.editCaptionModalContainer}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Caption"
                      placeholderTextColor="#E7E7E7"
                      enablesReturnKeyAutomatically={true}
                    />
                  </View>
                </>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={editProfileInfoMode}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setEditProfileInfoMode(!editProfileInfoMode);
            }}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.editProfileModalContainer}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                  <View style={styles.usernameModalContainer}>
                    <Image
                      style={styles.usernameModalIconImage}
                      source={require('../assets/Username.png')}
                    />
                    <TextInput
                      style={styles.textInput}
                      placeholder="@Yeat"
                      placeholderTextColor="#E7E7E7"
                      enablesReturnKeyAutomatically={true}
                    />
                  </View>
                  <View style={styles.titleModalContainer}>
                    <Image
                      style={styles.titleModalIconImage}
                      source={require('../assets/Title.png')}
                    />
                    <TextInput
                      style={styles.textInput}
                      placeholder="Rapper"
                      placeholderTextColor="#E7E7E7"
                      enablesReturnKeyAutomatically={true}
                    />
                  </View>
                  <View style={styles.quoteModalContainer}>
                    <Image
                      style={styles.quoteModalIconImage}
                      source={require('../assets/Quote.png')}
                    />
                    <TextInput
                      style={styles.textInput}
                      placeholder={`"My money big, my money tonka"`}
                      placeholderTextColor="#E7E7E7"
                      enablesReturnKeyAutomatically={true}
                    />
                  </View>
                  <View style={styles.modalCloseButtonsContainer}>
                    <Pressable
                      style={[styles.button, styles.saveButton]}
                      onPress={() =>
                        setEditProfileInfoMode(!editProfileInfoMode)
                      }>
                      <Text style={styles.textStyle}>Save and Close</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button, styles.undoButton]}
                      onPress={() =>
                        setEditProfileInfoMode(!editProfileInfoMode)
                      }>
                      <Text style={styles.textStyle}>Undo Changes</Text>
                    </Pressable>
                  </View>
                </>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </Modal>
        </>
      )}
      {!editProfileMode && !editContentMode && (
        <>
          <FlatList
            data={userData.content}
            horizontal
            renderItem={({item, index}) => (
              <Content item={item} index={index} />
            )}
            showsHorizontalScrollIndicator={true}
            snapToInterval={width}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            pagingEnabled={true}
            keyExtractor={(item, index) => item.id}
            ref={item => {
              refs.current[userData.id] = item;
            }}
          />
          <View style={styles.usernameTopTextContainer}>
            <Text
              style={styles.usernameTopText}
              onPress={e => {
                refs.current[userData.id]!.scrollToIndex({
                  animated: true,
                  index: 0,
                });
              }}>
              {userData.content[0].username}
            </Text>
          </View>
          <View style={styles.settingsButtonContainer}>
            <Pressable onPress={() => navigate('Settings')}>
              <Image
                style={styles.settingsIconImage}
                source={require('../assets/Settings.png')}
              />
            </Pressable>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: height - 84,
    width: width,
  },
  imageBackgroundBlurOverlay: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  changeImageBlurOverlay: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.7,
  },
  socialsContainer: {
    position: 'absolute',
    display: 'flex',
    alignSelf: 'flex-end',
    flexDirection: 'column-reverse',
    bottom: 0,
    marginBottom: 205,
    right: 20,
  },
  linksCountContainer: {
    position: 'absolute',
    display: 'flex',
    alignSelf: 'flex-end',
    bottom: 0,
    marginBottom: 180,
    right: 10,
  },
  linksCountNumberText: {
    color: 'white',
    // paddingRight: 10,
  },
  linksCountLabelText: {
    color: 'gray',
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
  profileBottomCardContainer: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.35)',
    height: 150,
    width: width * 0.95,
    borderRadius: 7,
    borderColor: 'gray',
    paddingHorizontal: 15,
    marginBottom: 20,
    bottom: 170,
  },
  profileBottomCardContainerHome: {
    position: 'absolute',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.35)',
    height: 150,
    width: width * 0.95,
    borderRadius: 7,
    borderColor: 'gray',
    paddingHorizontal: 15,
    marginBottom: 20,
    bottom: 0,
  },
  profileBottomCardContainerOverlay: {
    flex: 1,
    opacity: 0.15,
  },
  topRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 15,
  },
  starIconImage: {
    width: 18,
    height: 18,
  },
  usernameText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
    //  marginBottom: 20,
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
  photoBottomCardContainer: {
    position: 'absolute',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#000000',
    opacity: 0.85,
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
    backgroundColor: '#000000',
    opacity: 0.85,
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
  editProfileButton: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.25)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    top: 17,
    left: 10,
  },
  editProfileButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
  changeProfilePictureButton: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.25)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    top: 17,
    right: 10,
  },
  changeProfilePictureButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
  changeProfilePictureIconImage: {
    width: 15,
    height: 15,
  },
  editSocialsIconImage: {
    width: 32,
    height: 32,
  },
  settingsButtonContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 24,
    right: 10,
  },
  settingsIconImage: {
    width: 40,
    height: 40,
  },
  usernameTopTextContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: 27,
  },
  usernameTopText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '700',
    opacity: 0.75,
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
  editContentButtonContainer: {
    position: 'absolute',
    top: height * 0.3,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editContentIconImage: {
    width: 22,
    height: 22,
    margin: 2,
  },
  editContentText: {
    color: '#C9C9C9',
    marginTop: 5,
  },
  editContentImagesContainer: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 80,
  },
  editContentImage: {
    width: 100,
    height: 140,
    borderRadius: 8,
    marginHorizontal: 15,
    marginVertical: 5,
    overflow: 'hidden',
  },
  editContentImageBlurOverlay: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.5,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  editContentEmptyImage: {
    width: 100,
    height: 140,
    borderRadius: 8,
    marginHorizontal: 15,
    marginVertical: 5,
    opacity: 0.1,
    overflow: 'hidden',
  },
  editContentEmptyView: {
    width: 100,
    height: 140,
    borderRadius: 8,
    marginHorizontal: 15,
    marginVertical: 5,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.05)',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  editContentButton: {
    width: 50,
    height: 175,
  },
  addContentIconImage: {
    width: 28,
    height: 28,
    marginRight: 1,
    opacity: 0.5,
  },
  editPhotoIconImage: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  addPhotoIconImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 25,
  },
  changePhotoIconImage: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginTop: 25,
  },
  addPhotoText: {
    color: 'rgba(255, 255, 255, .6)',
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
  },
  changePhotoText: {
    color: 'rgba(255, 255, 255, .6)',
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 25,
  },
  editProfileInfoButtonContainer: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editProfileInfoIconImage: {
    width: 22,
    height: 22,
    margin: 2,
  },
  editProfileInfoText: {
    color: '#C9C9C9',
    marginTop: 5,
  },
  editProfileModalContainer: {
    flex: 1,
    width: width * 0.95,
    backgroundColor: 'rgba(0, 0, 0, .85)',
    borderRadius: 8,
    padding: 20,
    alignSelf: 'center',
    marginTop: height * 0.1,
    marginBottom: 80,
  },
  editContentItemModalContainer: {
    flex: 1,
    width: width * 0.95,
    backgroundColor: 'rgba(0, 0, 0, .85)',
    borderRadius: 8,
    padding: 20,
    alignSelf: 'center',
    marginBottom: 80,
    marginTop: height * 0.65,
  },
  editPhotoModalContainer: {
    flex: 1,
    width: width * 0.95,
    backgroundColor: 'rgba(0, 0, 0, .85)',
    borderRadius: 8,
    borderColor: 'rgba(188, 81, 158, .75)',
    borderWidth: 1,
    padding: 20,
    alignSelf: 'center',
    marginBottom: 80,
    marginTop: height * 0.1,
  },
  editVideoModalContainer: {
    flex: 1,
    width: width * 0.95,
    backgroundColor: 'rgba(0, 0, 0, .85)',
    borderRadius: 8,
    borderColor: 'rgba(79, 99, 57, .75)',
    borderWidth: 1,
    padding: 20,
    alignSelf: 'center',
    marginBottom: 80,
    marginTop: height * 0.1,
  },
  editSongModalContainer: {
    flex: 1,
    width: width * 0.95,
    backgroundColor: 'rgba(0, 0, 0, .85)',
    borderRadius: 8,
    borderColor: 'rgba(61, 96, 152, .75)',
    borderWidth: 1,
    padding: 20,
    alignSelf: 'center',
    marginBottom: 80,
    marginTop: height * 0.1,
  },
  editContentItemModalTopRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  uploadNewText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  closeIconImage: {
    width: 38,
    height: 38,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  editContentItemModalButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  photoButton: {
    backgroundColor: 'rgba(10, 10, 10, .85)',
    borderWidth: 1,
    borderColor: 'rgba(188, 81, 158, .75)',
    padding: 20,
    marginTop: 15,
  },
  editPhotoEmptyView: {
    width: width * 0.6,
    height: height * 0.38,
    backgroundColor: 'rgba(188, 81, 158, .75)',
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
  editVideoEmptyView: {
    width: width * 0.6,
    height: height * 0.38,
    backgroundColor: 'rgba(79, 99, 57, .75)',
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
  editSongEmptyView: {
    width: width * 0.36,
    height: height * 0.38,
    backgroundColor: 'rgba(61, 96, 152, .75)',
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
  photoIconImage: {
    width: 37,
    height: 31,
    marginTop: 3,
  },
  songButton: {
    backgroundColor: 'rgba(10, 10, 10, .85)',
    borderWidth: 1,
    borderColor: 'rgba(61, 96, 152, .75)',
    padding: 20,
    marginTop: 15,
  },
  songIconImage: {
    width: 37,
    height: 37,
  },
  videoButton: {
    backgroundColor: 'rgba(10, 10, 10, .85)',
    borderWidth: 1,
    borderColor: 'rgba(79, 99, 57, .75)',
    padding: 20,
    marginTop: 15,
  },
  videoIconImage: {
    width: 36,
    height: 34,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  modalCloseButtonsContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  saveButton: {
    backgroundColor: '#B99A5B',
  },
  undoButton: {
    backgroundColor: 'grey',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  usernameModalContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
    marginTop: 15,
  },
  usernameModalIconImage: {
    width: 36,
    height: 36,
    marginRight: 10,
    marginTop: 3,
  },
  titleModalContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
    marginTop: 40,
  },
  titleModalIconImage: {
    width: 38,
    height: 38,
    marginRight: 10,
    marginLeft: -2,
    marginTop: 3,
  },
  editTitleModalContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.75,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
    marginTop: 40,
    alignSelf: 'center',
  },
  editCaptionModalContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.75,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
    marginTop: 40,
    alignSelf: 'center',
  },
  quoteModalContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
    marginTop: 40,
  },
  quoteModalIconImage: {
    width: 38,
    height: 38,
    marginRight: 10,
    marginTop: 3,
  },
  textInput: {
    color: 'white',
    fontSize: 15,
  },
  editSongEmptyViewsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  //  textInput: {
  //    height: 40,
  //    borderColor: "#000000",
  //    borderBottomWidth: 1,
  //    marginBottom: 36
  //  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default Profile;
