/* eslint-disable prettier/prettier */
import 'react-native';
import React from 'react';
import PasswordReset from '../components/PasswordReset/PasswordReset';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
   const tree = renderer.create(<PasswordReset />).toJSON();
   expect(tree).toMatchSnapshot();
 });
