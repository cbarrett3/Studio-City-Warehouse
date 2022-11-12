/* eslint-disable prettier/prettier */
import 'react-native';
import React from 'react';
import SignUp from '../components/SignUp/SignUp';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
   const tree = renderer.create(<SignUp />).toJSON();
   expect(tree).toMatchSnapshot();
 });
