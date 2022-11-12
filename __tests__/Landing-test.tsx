/* eslint-disable prettier/prettier */
import 'react-native';
import React from 'react';
import Landing from '../components/Landing/Landing';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
   const tree = renderer.create(<Landing />).toJSON();
   expect(tree).toMatchSnapshot();
 });
