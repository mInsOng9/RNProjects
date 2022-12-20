/**
 * @format
 */

import {AppRegistry} from 'react-native'; //react-native.js .js 생략됨
import App from './App'; //.jsx 생략됨
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
