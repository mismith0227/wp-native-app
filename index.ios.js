/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './component/App'

export default class wp_native_app extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('wp_native_app', () => wp_native_app);
