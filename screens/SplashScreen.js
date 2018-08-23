import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Asset, AppLoading, SplashScreen } from 'expo';


export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSplashReady: false,
      isAppReady: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 300, resizeMode: 'contain' }} source={require('../assets/images/ufc-logo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D20A0A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
