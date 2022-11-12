/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Nav} from '../../types';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  Pressable,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from './CustomMarker';
const {width, height} = Dimensions.get('window');

interface FilterData {
  id: number;
  value: string;
}

const Filter: React.FC = () => {
  const {navigate} = useNavigation<Nav>();
  const [distance, setDistance] = useState([50]);
  const [filter, setFilter] = useState<string>('');
  const [filters, setFilters] = useState([]);

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
              onChangeText={value => setFilter(value)}
              value={filter}
              onSubmitEditing={event => {
                if (event.nativeEvent.text.length > 0) {
                  setFilters([...filters, event.nativeEvent.text]);
                  setFilter('');
                }
              }}
              placeholder="Keyword"
              placeholderTextColor="#383838"
              maxLength={50}
              //   enablesReturnKeyAutomatically={true}
            />
            {/* {console.log(filters)} */}
          </View>
        </View>
        <View style={styles.distanceWithinTopRowContainer}>
          <Text style={styles.distanceWithinLabelText}>Search Within</Text>
          {distance[0] === 10000 ? (
            <Text style={styles.distanceWithinValueText}>Any</Text>
          ) : (
            <Text style={styles.distanceWithinValueText}>{distance} mi</Text>
          )}
        </View>
        <MultiSlider
          containerStyle={{alignSelf: 'center'}}
          values={distance}
          onValuesChange={value => setDistance(value)}
          min={1}
          max={5000}
          optionsArray={[1, 10, 25, 50, 100, 250, 500, 1000, 5000, 10000]}
          snapped={true}
          customMarker={CustomMarker}
          sliderLength={width * 0.85}
          selectedStyle={{
            backgroundColor: '#707070',
          }}
          unselectedStyle={{
            backgroundColor: '#333333',
          }}
          trackStyle={{
            height: 5,
            width: width,
            backgroundColor: '#333333',
          }}
        />
        <View style={styles.applyResetContainer}>
          <Pressable
            style={styles.resetButton}
            onPress={() => Alert.alert('Reset Filters')}
            accessibilityLabel="Reset Filters Button">
            <Text style={styles.resetButtonText}>Reset</Text>
          </Pressable>
          <Pressable
            style={styles.applyButton}
            onPress={() => Alert.alert('Apply Filters')}
            accessibilityLabel="Apply Filters Button">
            <Text style={styles.applyButtonText}>Apply</Text>
          </Pressable>
        </View>
        <View style={styles.filtersContainer}>
          {filters.map((value, index) => (
            <Pressable
              key={value}
              style={styles.removeFilterButton}
              onPress={() =>
                setFilters(prevFilters =>
                  prevFilters.filter(prevItem => prevItem != value),
                )
              }
              accessibilityLabel="Remove Filter Button">
              <Image
                style={styles.deleteTagIconImage}
                source={require('../assets/DeleteTag.png')}
              />
              <Text style={styles.removeFilterButtonText}>{value}</Text>
            </Pressable>
          ))}
        </View>
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
    opacity: 0.85,
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
  //   distanceWithinContainer: {
  //     display: 'flex',
  //     flexDirection: 'column',
  //   },
  distanceWithinTopRowContainer: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.85,
  },
  distanceWithinLabelText: {
    color: '#707070',
    fontWeight: '500',
    fontSize: 12,
    marginBottom: 5,
  },
  distanceWithinValueText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
    marginBottom: 5,
  },
  applyResetContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    alignSelf: 'center',
    //  backgroundColor: '#191919',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    opacity: 0.85,
  },
  resetButton: {
    padding: 10,
    borderRadius: 100,
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  applyButton: {
    backgroundColor: '#B99A5B',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
    //  marginVertical: 10,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  filtersContainer: {
    marginHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  removeFilterButton: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginRight: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  removeFilterButtonText: {
    color: '#B99A5B',
    fontSize: 18,
    fontWeight: '600',
  },
  deleteTagIconImage: {
    width: 18,
    height: 18,
    marginRight: 5,
  },
});

export default Filter;
