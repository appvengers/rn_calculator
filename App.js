/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://35.202.116.156/'}}
      />
    );
  }
}
