import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Block({ icon, iconColor, label, onPress, disabled }) {
    return (
        <TouchableOpacity onPress={() => !disabled && onPress()}
            style={styles.container}
            activeOpacity={disabled ? 1 : 0.7}>
            <Ionicons name={icon} size={40} color={iconColor} />
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: 80,
        width:70
    },
    label:{
        fontSize: 20,
        fontWeight:'bold',
        color:'#363636'
    }
});

export default Block;