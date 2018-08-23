import React from "react";
import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator
} from "react-navigation";

// Navigator for the screens related to contacts
import MainScreen from "./screens/MainScreen";

const AppNavigator = createStackNavigator({
    Main: MainScreen,
}, {
        initialRouteName: 'Main',
        navigationOptions: {
            headerTintColor: "#2A73E0"
        }
    });

export default AppNavigator;