/* eslint-disable prettier/prettier */
import 'react-native';
import React from 'react';
import LogIn from '../components/LogIn/LogIn';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
   const tree = renderer.create(<LogIn />).toJSON();
   expect(tree).toMatchSnapshot();
 });
