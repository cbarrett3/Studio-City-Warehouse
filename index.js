/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// @ts-ignore
import Amplify from 'aws-amplify';
// @ts-ignore
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


AppRegistry.registerComponent(appName, () => App);
