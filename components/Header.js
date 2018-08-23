import React from 'react';
import { StyleSheet, View } from 'react-native';

function Header({ children }) {
    return (
        <View style={styles.header}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: '#D20A0A',
        height: 80
    }
});

export default Header;