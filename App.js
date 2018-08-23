import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Asset, AppLoading, SplashScreen } from 'expo';
//
import AppNavigator from './AppNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSplashReady: false,
      isAppReady: false,
    };
  }
  render() {
    return (
      <AppNavigator />
    )
  }
}