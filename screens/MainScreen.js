import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Asset, AppLoading, SplashScreen } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//
import Header from '../components/Header';

export default class MainScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <FontAwesome name='barcode' size={25} color='black' />),
            headerTitle: (
                <Image style={{ height: 100, width: 100, resizeMode: 'contain' }}
                    source={require('../assets/images/ufc-logo.png')} />),
            headerRight: (
                <View style={{flexDirection:'row',justifyContent: 'space-between', width:55}}>
                    <FontAwesome name='bell' size={25} color='white' />
                    <Ionicons name='ios-apps' size={25} color='white' />
                </View>
            ),
            headerStyle: {
                backgroundColor: '#D20A0A',
                marginRight: 5,
                marginLeft: 5
            },
        };
    };


    constructor(props) {
        super(props);

        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Main</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D20A0A',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});
